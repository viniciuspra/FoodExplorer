import { Container } from "./styles";

import Banner from "../../components/Banner";
import Section from "../../components/Section";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Home() {
  return (
    <Container>
      <Header/>
      <Banner/>
      <Section title="Refeições" />
      <Section title="Sobremesas" />
      <Section title="Bebidas" />
      <Footer />
    </Container>
  );
}
