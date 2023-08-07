import { Container, Form, DishImg, ButtonWrapper } from "./styles";

import Input from "../../components/Input";
import BackButton from "../../components/BackButton";
import Header from "../../components/Header";
import IngredientItem from "../../components/IngredientItem";
import Footer from "../../components/Footer";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import { Upload } from "lucide-react";
import { useState } from "react";

export default function Edit() {
  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const [ingredients, setIngredient] = useState([]);
  const [newIngredients, setNewIngredient] = useState([]);

  const handleUpdateDish = async () => {
    if (!dishName) {
      return alert("Você precisar adicionar um nome antes de salvar o prato!");
    }

    if (!price) {
      return alert("Adicione um preço antes de salvar o prato!");
    }

    if (newIngredients) {
      return alert("Adicione um ingrediente antes de salvar o prato!");
    }
  };
  return (
    <Container>
      <Header />
      <BackButton to="/" />
      <h1>Editar Prato</h1>
      <Form>
        <label>
          Selecione imagem para alterá-la
          <DishImg>
            <Upload size={24} stroke="white" />
            <input type="file" />
            <span>Selecione imagem para alterá-la</span>
          </DishImg>
        </label>
        <label>
          Nome
          <Input
            placeholder="Ex: Salada Ceasar"
            type="text"
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
          />
        </label>
        <label>
          Categoria
          <select onChange={e => setCategory(e.target.value)}>
            <option value="1">Refeição</option>
            <option value="2">Sobremesa</option>
            <option value="3">Bebida</option>
          </select>
        </label>
        <label>
          Ingredientes
          <div className="itens">
            <IngredientItem value="Alface" />
            <IngredientItem isNew placeholder="Adicionar" />
          </div>
        </label>
        <label>
          Preço
          <Input
            placeholder="R$ 00,00"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          Descrição
          <TextArea
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <ButtonWrapper>
          <Button text="Excluir prato" isBlack/>
          <Button text="Salvar Alterações" onClicl={handleUpdateDish}/>
        </ButtonWrapper>
      </Form>
      <Footer />
    </Container>
  );
}
