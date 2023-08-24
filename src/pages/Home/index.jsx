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
        const nameResponse = await api.get(`/dishes?name=${search}`);
        const ingredientResponse = await api.get(
          `/dishes?name&ingredients=${search}`
        );

        const fetchedNameDishes = nameResponse.data;
        const fetchedIngredientsDishes = ingredientResponse.data;

        const combinedDishes = [
          ...fetchedNameDishes,
          ...fetchedIngredientsDishes,
        ];

        let filteredRefeicaoDishes;
        let filteredSobremesaDishes;
        let filteredBebidasDishes;

        if (fetchedIngredientsDishes.length === fetchedNameDishes.length) {
          filteredRefeicaoDishes = fetchedNameDishes.filter(
            (dish) => dish.category === "refeicao"
          );
          filteredSobremesaDishes = fetchedNameDishes.filter(
            (dish) => dish.category === "sobremesa"
          );
          filteredBebidasDishes = fetchedNameDishes.filter(
            (dish) => dish.category === "bebida"
          );
        } else {
          filteredRefeicaoDishes = combinedDishes.filter(
            (dish) => dish.category === "refeicao"
          );
          filteredSobremesaDishes = combinedDishes.filter(
            (dish) => dish.category === "sobremesa"
          );
          filteredBebidasDishes = combinedDishes.filter(
            (dish) => dish.category === "bebida"
          );
        }

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
      {filteredSections.map(
        (section) =>
          section.dishes.length > 0 && (
            <Section
              key={section.title}
              title={section.title}
              dishes={section.dishes}
            />
          )
      )}
      {filteredSections.every((section) => section.dishes.length === 0) && (
        <NoDishesMessage>Nenhum prato cadastrado.</NoDishesMessage>
      )}
      <Footer />
    </Container>
  );
}
