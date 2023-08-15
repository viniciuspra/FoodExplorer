// React Router DOM, React Hooks e API
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

// Componentes e Icon
import Input from "../../components/Input";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import TextArea from "../../components/TextArea";
import BackButton from "../../components/BackButton";
import IngredientItem from "../../components/IngredientItem";
import { Upload } from "lucide-react";

// Estilos da pagina
import { Container, Form, DishImg } from "./styles";

export default function New() {
  const { user } = useAuth();

  // estado para controlar os campos do formulario
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    ingredients: [],
    image_url: null,
  });

  // estado para controlar novos ingredients
  const [newIngredient, setNewIngredient] = useState("")

  const navigate = useNavigate();

  // funcao para atualizar os campos do formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // funcao para add um novo ingredient no array
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

  // funcao para remover um ingredient do array
  const handleRemoveIngredient = (ingredientToRemove) => {
    const { ingredients } = formData;
    // filtra o ingredient removido do array e atualiza o estado
    const updatedIngredients = ingredients.filter(
      (ingredient) => ingredient !== ingredientToRemove
    )
    setFormData((prevData) => ({
      ...prevData,
      ingredients: updatedIngredients,
    }));
  };

  // funcao para add um arquivo de img
  const handleAddFile = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({...prevData, image_url: file}));
  }

  // funcao para criar um novo prato
  const handleNewDish = async (e) => {
    e.preventDefault();

    if (!user.isAdmin) {
      return alert("Apenas administradores podem criar pratos.");
    }

    const { name, description, category, price, ingredients, image_url } = formData;
    // criaçao do objeto FormData para enviar os dados
    const newDishData = new FormData()
    newDishData.append("name", name)
    newDishData.append("description", description)
    newDishData.append("category", category)
    newDishData.append("price", price)
    
    ingredients.map((ingredient) => {
      newDishData.append("ingredients[]", ingredient)
    })
    
    if (image_url) {
      newDishData.append("image_url", image_url)
    }
    console.log(newDishData);

    // envia a requisição para o backend
    try {
      await api.post("/dishes", newDishData)
      alert("Prato criado com sucesso!")
      navigate("/")
    } catch (error) {
      console.log("Erro ao criar o prato");
    }
  } 

  return (
    <Container>
      <Header />
      <BackButton to="/" />
      <h1>Novo Prato</h1>
      <Form>
        {/* Campo para selecionar uma imagem */}
        <label>
          Imagem do prato
          <DishImg>
            <Upload size={24} stroke="white" />
            <input type="file" onChange={handleAddFile} />
            <span>Selecione uma imagem</span>
          </DishImg>
        </label>
        {/* Campo para inserir o nome do prato */}
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
        {/* Campo para selecionar a categoria do prato */}
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
        {/* Campo para gerenciar ingredientes */}
        <label>
          Ingredientes
          <div className="itens">
            {formData.ingredients.map((ingredient, index) => {
              return (
                <IngredientItem
                  key={index}
                  value={ingredient}
                  onClick={() => handleRemoveIngredient(ingredient)}
                />
              );
            })}
            {/* Campo para adicionar um novo ingrediente */}
            <IngredientItem
              $isnew
              placeholder="Adicionar"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              onClick={handleAddIngredient}
            />
          </div>
        </label>
        {/* Campo para inserir o preço do prato */}
        <label>
          Preço
          <Input
            placeholder="R$ 00,00"
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </label>
        {/* Campo para inserir a descrição do prato */}
        <label>
          Descrição
          <TextArea
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        {/* Botão para salvar as alterações */}
        <Button text="Salvar Alterações" onClick={handleNewDish} />
      </Form>
      <Footer />
    </Container>
  );
  
}
