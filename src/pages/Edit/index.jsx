import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

import CurrencyInput from "react-currency-input-field";

import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";
import { BackButton } from "../../components/BackButton";
import { IngredientItem } from "../../components/IngredientItem";

import { Check } from "lucide-react";

import {
  Container,
  Form,
  DishImg,
  ButtonWrapper,
  ImagePreview,
} from "./styles";

export function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    ingredients: [],
    image_url: null,
  });

  const [newIngredient, setNewIngredient] = useState("");

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const formattedValue =
      name === "price" ? value.replace(/[^\d,]/g, "") : value;
    setFormData((prevData) => ({ ...prevData, [name]: formattedValue }));
  };

  const handleAddFile = (e) => {
    const file = e.target.files[0];
    setImagePreview(URL.createObjectURL(file));
    setImageFile(file);
  };

  const handleAddIngredient = () => {
    if (newIngredient.trim() === "") {
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      ingredients: [...prevData.ingredients, newIngredient],
    }));
    setNewIngredient("");
  };

  const handleRemoveIngredient = (deleted) => {
    setFormData((prevData) => ({
      ...prevData,
      ingredients: prevData.ingredients.filter(
        (ingredient) => ingredient !== deleted
      ),
    }));
  };

  const handleUpdateDish = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updatedFormData = { ...formData };
    const requestData = new FormData();

    const formattedPrice = updatedFormData.price.replace(",", ".");

    requestData.append("name", updatedFormData.name);
    requestData.append("description", updatedFormData.description);
    requestData.append("category", updatedFormData.category);
    requestData.append("price", parseFloat(formattedPrice));

    updatedFormData.ingredients.forEach((ingredient) => {
      requestData.append("ingredients[]", ingredient);
    });

    if (imageFile) {
      requestData.append("image_url", imageFile);
    }

    try {
      await api.put(`/dishes/${id}`, requestData);
      alert("Prato atualizado com sucesso!");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao atualizar o prato!");
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${id}`);

        const { name, description, category, price, ingredients, image_url } =
          response.data;
        setFormData({
          name,
          description,
          category,
          price: parseFloat(price),
          ingredients: ingredients.map((ingredient) => ingredient.name),
          image_url,
        });

        if (!imageFile) {
          setImagePreview(`${api.defaults.baseURL}/files/${image_url}`);
        }
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Erro ao buscar o prato!");
        }
      }
    }

    fetchDish();
  }, [id, imageFile]);

  const handleDeleteDish = async () => {
    setLoadingDelete(true);
    const isConfirm = confirm("Tem certeza que deseja remover este item?");

    if (isConfirm) {
      try {
        await api.delete(`/dishes/${id}`);
        alert("Prato removido com sucesso!");
        navigate("/");
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Erro ao remover o prato!");
        }
      }
    }

    setLoadingDelete(false);
  };

  return (
    <Container>
      <Header />
      <BackButton to="/" />
      <h1>Editar Prato</h1>
      <Form>
        <label>
          Imagem do prato
          <DishImg>
            {imagePreview && (
              <ImagePreview>
                <Check size={24} stroke="white" />
                <input type="file" onChange={handleAddFile} />
                <span>Imagem selecionada</span>
                <img src={imagePreview} alt="Imagem do Prato" />
              </ImagePreview>
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
            value={formData.price}
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
        <ButtonWrapper>
          <Button
            text="Excluir prato"
            $isblack
            onClick={handleDeleteDish}
            loading={loadingDelete}
          />
          <Button
            text="Salvar Alterações"
            onClick={handleUpdateDish}
            loading={loading}
          />
        </ButtonWrapper>
      </Form>
      <Footer />
    </Container>
  );
}
