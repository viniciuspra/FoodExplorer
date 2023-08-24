import BackButton from "../../components/BackButton";
import { Container, ContentWrapper, ButtonWrapper } from "./styles";

import Button from "../../components/Button";

import Counter from "../../components/Counter";
import Receipt from "../../components/Receipt";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { useAuth } from "../../hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export default function Details() {
  const { user } = useAuth();
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [totalPrice, setTotalPrice] = useState(0);

  const formattedPrice = totalPrice.toFixed(2).replace(".", ",");

  const navigate = useNavigate();

  const navigateEditPage = () => {
    navigate(`/edit/${id}`);
  };

  const handleCountChange = (newCount) => {
    setTotalPrice(newCount * (data ? data.price : 0));
  }

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${id}`);
        setData(response.data);
      } catch (error) {
        console.error("Erro ao buscar prato:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDish();
  }, [id]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Header />
      <BackButton to="/" />
      {data && data.image_url && (
        <>
          <ContentWrapper>
            <img
              src={`${api.defaults.baseURL}/files/${data.image_url}`}
              alt="prato"
            />
            <div>
              <h3>{data.name}</h3>
              <p>{data.description}</p>
              <ul>
                {data.ingredients &&
                  data.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.name}</li>
                  ))}
              </ul>
              <ButtonWrapper>
                {!user.isAdmin ? (
                  <>
                    <Counter onCountChange={handleCountChange}/>
                    <Button
                      icon={Receipt}
                      text="pedir"
                      value={`R$${formattedPrice}`}
                    />
                  </>
                ) : (
                  <Button text="Editar prato" onClick={navigateEditPage} />
                )}
              </ButtonWrapper>
            </div>
          </ContentWrapper>
        </>
      )}
      <Footer />
    </Container>
  );
}
