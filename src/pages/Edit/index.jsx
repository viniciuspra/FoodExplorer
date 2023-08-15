import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import Input from "../../components/Input";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import TextArea from "../../components/TextArea";
import BackButton from "../../components/BackButton";
import IngredientItem from "../../components/IngredientItem";
import { Upload } from "lucide-react";

import { Container, Form, DishImg, ButtonWrapper } from "./styles";

export default function Edit() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  
  const [data, setData] = useState(null);
  
  const [image, setImage] = useState();
  const [imageFile, setImageFile] = useState(null)

  function handleAddFile(event) {
    const file = event.target.files[0];
    setImageFile(file);

    const imagePreview = URL.createObjectURL(file);
    setImage(imagePreview);
  }

  function handleAddIngredient() {
    if (newIngredient.trim() === "") {
      return;
    }
      setIngredients(prevState => [...prevState, newIngredient]);
      setNewIngredient("");
  }

  function handleRemoveIngredient(deleted){
    setIngredients((prevIngredients) =>
      prevIngredients.filter((ingredient) => ingredient !== deleted)
    );
  }

  async function handleUpdateDish(e) {
    e.preventDefault()

    setLoading(true);

    const formData = new FormData();

    if (imageFile) formData.append("image_url", imageFile);
    if (name) formData.append("name", name);
    if (description) formData.append("description", description);
    if (category) formData.append("category", category);
    if (price) formData.append("price", price);
    
    ingredients.map(ingredient => (
        formData.append("ingredients", ingredient)
    ))

    try {
      await api.put(`/dishes/${id}`, formData);
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
  }

  useEffect(() => {
      async function fetchDish() {
          const response = await api.get(`/dishes/${id}`);
          setData(response.data);
          
          const { name, description, category, price, ingredients } = response.data;
          setName(name);
          setDescription(description);
          setCategory(category);
          setPrice(price);
          setIngredients(ingredients.map(ingredient => ingredient.name));
      }
  
      fetchDish();
  }, [])

  async function handleDeleteDish() {
    setLoadingDelete(true);
    const isConfirm = confirm("Tem certeza que deseja remover este item?");
    if(isConfirm) {
        await api.delete(`/dishes/${id}`)
        .then(() => {
            alert("Prato removido com sucesso!");
            navigate("/");
            setLoadingDelete(false);
        })
    } else {
        return
    }
  }

  return (
    <Container>
      <Header />
      <BackButton to="/" />
      <h1>Editar Prato</h1>
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
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Categoria
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
            {ingredients.map((ingredient, index) => (
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
              onClick={handleAddIngredient}
            />
          </div>
        </label>
        <label>
          Preço
          <Input
            placeholder="R$ 00,00"
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          Descrição
          <TextArea
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <ButtonWrapper>
          <Button text="Excluir prato" $isblack onClick={handleDeleteDish} />
          <Button text="Salvar Alterações" onClick={handleUpdateDish} />
        </ButtonWrapper>
      </Form>
      <Footer />
    </Container>
  );
}
