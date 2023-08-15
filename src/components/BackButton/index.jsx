import { ChevronLeft } from "lucide-react";
import { Container } from "./styles";

export default function BackButton({...rest}) {
  return (
    <Container {...rest}>
        <ChevronLeft size={26}/> Voltar
    </Container>
  )
}
