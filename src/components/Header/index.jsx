import { Container } from "./styles";
import { useMediaQuery } from "react-responsive";
import HeaderDesktop from "../../components/HeaderDesktop";
import HeaderMobile from "../../components/HeaderMobile";

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

   return (
    <Container>
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
    </Container>
   )
}
