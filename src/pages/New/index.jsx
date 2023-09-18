import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import CurrencyInput from "react-currency-input-field";

import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";
import { BackButton } from "../../components/BackButton";
import { IngredientItem } from "../../components/IngredientItem";

import { Check, Upload, X } from "lucide-react";

import { Container, Form, DishImg, ImagePreview } from "./styles";

export function New() {
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    ingredients: [],
    image_url: null,
  });

  const [newIngredient, setNewIngredient] = useState("");

  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const formattedValue =
      name === "price" ? value.replace(/[^\d,]/g, "") : value;
    setFormData((prevData) => ({ ...prevData, [name]: formattedValue }));
  };

  const handleAddIngredient = () => {
    const { ingredients } = formData;
    // verifica se o novo ingredient esta vazio e duplicado e atualiza o estado
    if (!ingredients.includes(newIngredient) && newIngredient.trim() !== "") {
      setFormData((prevData) => ({
        ...prevData,
        ingredients: [...ingredients, newIngredient],
      }));
      // limpa o campo do novo ingredient
      setNewIngredient("");
    }
  };

  const handleRemoveIngredient = (ingredientToRemove) => {
    const { ingredients } = formData;
    // filtra o ingredient removido do array e atualiza o estado
    const updatedIngredients = ingredients.filter(
      (ingredient) => ingredient !== ingredientToRemove
    );
    setFormData((prevData) => ({
      ...prevData,
      ingredients: updatedIngredients,
    }));
  };

  const handleAddFile = (e) => {
    const file = e.target.files[0];
    setImagePreview(URL.createObjectURL(file));
    setFormData((prevData) => ({ ...prevData, image_url: file }));
  };

  const handleRemoveFile = () => {
    setImagePreview(null);
    setFormData((prevData) => ({ ...prevData, image_url: null }));
  };

  const handleNewDish = async (e) => {
    e.preventDefault();

    if (!user.isAdmin) {
      return alert("Apenas administradores podem criar pratos.");
    }

    const { name, description, category, price, ingredients, image_url } =
      formData;

    const formattedPrice = price.replace(",", ".");

    const newDishData = new FormData();
    newDishData.append("name", name);
    newDishData.append("description", description);
    newDishData.append("category", category);
    newDishData.append("price", parseFloat(formattedPrice));

    ingredients.map((ingredient) => {
      newDishData.append("ingredients[]", ingredient);
    });

    if (image_url) {
      newDishData.append("image_url", image_url);
    }

    try {
      await api.post("/dishes", newDishData);
      alert("Prato criado com sucesso!");
      navigate("/");
    } catch (error) {
      console.log("Erro ao criar o prato");
    }
  };

  return (
    <Container>
      <Header />
      <BackButton to="/" />
      <h1>Novo Prato</h1>
      <Form>
        <label>
          Imagem do prato
          <DishImg>
            {imagePreview ? (
              <ImagePreview>
                <Check size={24} stroke="white" />
                <input type="file" onChange={handleAddFile} />
                <span>Imagem selecionada</span>
                <img src={imagePreview} alt="Imagem do Prato" />
                <X onClick={handleRemoveFile} />
              </ImagePreview>
            ) : (
              <>
                <Upload size={24} stroke="white" />
                <input type="file" onChange={handleAddFile} />
                <span>Selecione uma imagem</span>
              </>
            )}
          </DishImg>
        </label>
        <label>
          Nome
          <Input
            placeholder="Ex: Salada Ceasar"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Categoria
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="">Selecione uma categoria</option>
            <option value="refeicao">Refeição</option>
            <option value="sobremesa">Sobremesa</option>
            <option value="bebida">Bebida</option>
          </select>
        </label>
        <label>
          Ingredientes
          <div className="itens">
            {formData.ingredients.map((ingredient, index) => (
              <IngredientItem
                key={index}
                value={ingredient}
                onClick={() => handleRemoveIngredient(ingredient)}
              />
            ))}
            <IngredientItem
              $isnew
              placeholder="Adicionar"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddIngredient();
                }
              }}
              onClick={handleAddIngredient}
            />
          </div>
        </label>
        <label>
          Preço
          <CurrencyInput
            placeholder="R$ 00,00"
            prefix="R$ "
            decimalsLimit={2}
            onChange={handleInputChange}
            className="input-currency"
            name="price"
          />
        </label>
        <label>
          Descrição
          <TextArea
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <Button text="Criar Prato" onClick={handleNewDish} />
      </Form>
      <Footer />
    </Container>
  );
}
