import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import Banner from "../../components/Banner";
import Section from "../../components/Section";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import img from "../../assets/img2.png";

export default function Home() {
  const dishes = [
    { id: 1, title: "Dish 1", img: img, price: 49.97, category: 1 },
    { id: 2, title: "Dish 2", img: img, price: 29.99, category: 2 },
    { id: 3, title: "Dish 3", img: img, price: 19.99, category: 3 },
  ];

  const [refeicaoDishes, setRefeicaoDishes] = useState([]);
  const [sobremesaDishes, setSobremesaDishes] = useState([]);
  const [bebidasDishes, setBebidasDishes] = useState([]);

  useEffect(() => {
    const refeicao = dishes.filter((dish) => dish.category === 1);
    const sobremesas = dishes.filter((dish) => dish.category === 2);
    const bebidas = dishes.filter((dish) => dish.category === 3);

    setRefeicaoDishes(refeicao);
    setSobremesaDishes(sobremesas);
    setBebidasDishes(bebidas);
  }, []);

  return (
    <Container>
      <Header />
      <Banner />
      <Section title="Refeições" dishes={refeicaoDishes} />
      <Section title="Sobremesas" dishes={sobremesaDishes} />
      <Section title="Bebidas" dishes={bebidasDishes} />
      <Footer />
    </Container>
  );
}
