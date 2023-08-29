import { Container } from "./styles";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import OrderCard from "../../components/OrderCard";

export default function Favorites() {


  return (
    <Container>
      <Header />
        <OrderCard />
      <Footer />
    </Container>
  );
}
