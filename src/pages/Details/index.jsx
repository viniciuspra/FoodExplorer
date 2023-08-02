import BackButton from "../../components/BackButton";
import { Container, ContentWrapper, ButtonWrapper } from "./styles";

import img from "../../assets/img.png"
import Button from "../../components/Button";

import Counter from "../../components/Counter";
import Receipt from "../../components/Receipt";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Details() {
  const ingredients = [
    'alface',
    'cheese',
    'orange',
    'tomato',
    'pao de nam',
    'alface'
  ]

  const cost = '10.90'

  return (
    <Container>
      <Header />
      <BackButton to="/"/>
      <ContentWrapper>
        <img src={img} alt="prato" />
        <h3>Salada Ravanello</h3>
        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </ContentWrapper>
      <ButtonWrapper>
        <Counter />
        <Button icon={Receipt} text="pedir" value={`R$${cost}`}/> 
      </ButtonWrapper>
      <Footer />
    </Container>
  )
}
