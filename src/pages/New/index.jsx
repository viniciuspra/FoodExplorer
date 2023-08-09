import { Container, Form, DishImg } from "./styles";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../components/Input";
import BackButton from "../../components/BackButton";
import Header from "../../components/Header";
import IngredientItem from "../../components/IngredientItem";
import Footer from "../../components/Footer";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import { Upload } from "lucide-react";

import { api } from "../../services/api";

export default function New() {
  const [dishFile, setDishFile] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState(null);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [ingredients, setIngredient] = useState([]);
  const [newIngredients, setNewIngredient] = useState("");

  const navigate = useNavigate();

  const handleAddFile = (event) => {
    const file = event.target.files[0];
    setDishFile(file);
  };

  const handleAddIngredient = () => {
    if (newIngredients.length === 0) {
      return alert("O campo ingredientes não pode ser vazio!");
    }
    setIngredient((prevState) => [...prevState, newIngredients]);
    setNewIngredient("");
  };

  const handleRemoveIngredient = (deleted) => {
    setIngredient((prevState) => prevState.filter((item) => item !== deleted));
    setNewIngredient("");
  };

  const handleNewDish = async (e) => {
    e.preventDefault();
    if (!dishFile) {
      return alert("Por favor, selecione uma imagem");
    }

    if (!name) {
      return alert("Você precisar adicionar um nome antes de salvar o prato!");
    }

    if (category === null) {
      return alert("Selecione uma categoria antes de salvar o prato!");
    }

    if (ingredients.length === 0) {
      return alert("Adicione um ingrediente antes de salvar o prato!");
    }

    if (!price) {
      return alert("Adicione um preço antes de salvar o prato!");
    }

    if (!description) {
      return alert("Adicione uma descrição antes de salvar o prato!");
    }

    const formData = new FormData();
    formData.append("image_url", dishFile);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);

    ingredients.map(ingredient => (
      formData.append("ingredients[]", ingredient)
    ))

      await api.post("/dishes", formData)
      alert("Prato criado com sucesso!")
      navigate(-1)
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
            <Upload size={24} stroke="white" />
            <input type="file" onChange={handleAddFile} />
            <span>Selecione uma imagem</span>
          </DishImg>
        </label>
        <label>
          Nome
          <Input
            placeholder="Ex: Salada Ceasar"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Categoria
          <select
            onChange={(e) =>
              setCategory(e.target.value !== "null" ? e.target.value : null)
            }
          >
            <option value="null">Selecione uma categoria</option>
            <option value="Refeição">Refeição</option>
            <option value="Sobremesa">Sobremesa</option>
            <option value="Bebida">Bebida</option>
          </select>
        </label>
        <label>
          Ingredientes
          <div className="itens">
            {
              ingredients.map((item, index) => {
                return (
                  <IngredientItem
                    key={index}
                    value={item}
                    onClick={() => handleRemoveIngredient(item)}
                  />
                );
              })
            }
            <IngredientItem
              $isnew
              placeholder="Adicionar"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredients}
              onClick={handleAddIngredient}
            />
          </div>
        </label>
        <label>
          Preço
          <Input
            placeholder="R$ 00,00"
            type="number"
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          Descrição
          <TextArea
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <Button text="Salvar Alterações" onClick={handleNewDish} />
      </Form>
      <Footer />
    </Container>
  );
}
