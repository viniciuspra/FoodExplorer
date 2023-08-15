import { useEffect, useState } from "react";
import { Container, NoDishesMessage } from "./styles";
import Banner from "../../components/Banner";
import Section from "../../components/Section";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { api } from "../../services/api";

export default function Home() {
  const [search, setSearch] = useState("");
  const [filteredSections, setFilteredSections] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await api.get(`/dishes?name=${search}`);
        const fetchedDishes = response.data;

        const filteredRefeicaoDishes = fetchedDishes.filter(
          (dish) => dish.category === "refeicao"
        );
        const filteredSobremesaDishes = fetchedDishes.filter(
          (dish) => dish.category === "sobremesa"
        );
        const filteredBebidasDishes = fetchedDishes.filter(
          (dish) => dish.category === "bebida"
        );

        const sections = [
          { title: "Refeições", dishes: filteredRefeicaoDishes },
          { title: "Sobremesas", dishes: filteredSobremesaDishes },
          { title: "Bebidas", dishes: filteredBebidasDishes },
        ];
        
        setFilteredSections(sections);
      } catch (error) {
        console.error("Erro ao buscar pratos:", error);
      }
    };

    fetchDishes();
  }, [search]);

  return (
    <Container>
      <Header search={search} setSearch={setSearch} />
      <Banner />
      {filteredSections.map((section) => (
        section.dishes.length > 0 && (
          <Section
            key={section.title}
            title={section.title}
            dishes={section.dishes}
          />
        )
      ))}
      {filteredSections.every((section) => section.dishes.length === 0) && (
        <NoDishesMessage>Nenhum prato cadastrado.</NoDishesMessage>
      )}
      <Footer />
    </Container>
  );
}
