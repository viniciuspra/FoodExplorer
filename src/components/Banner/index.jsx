import { Container, ImgWrapper, ContentWrapper } from "./styles";
import imgMobile from "../../assets/macaronMobile.png"
import imgDesktop from "../../assets/macaronDesktop.png"
import { useMediaQuery } from "react-responsive";

export default function Banner() {
  const isMobile = useMediaQuery({ maxWidth: 768 })

  return (
    <Container>
      <ContentWrapper>
        <ImgWrapper>
          <img src={isMobile ? imgMobile : imgDesktop} alt="foto de varios macaron" />
        </ImgWrapper>
        <div>
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </ContentWrapper>
    </Container>
  )
}
