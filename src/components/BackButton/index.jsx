import { ChevronLeft } from "lucide-react";

import { Container } from "./styles";

export function BackButton({...rest}) {
  return (
    <Container {...rest}>
        <ChevronLeft size={26}/> Voltar
    </Container>
  )
}
