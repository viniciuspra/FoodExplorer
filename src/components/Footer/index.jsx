import { Container } from "./styles"

import { Hexagon } from "lucide-react"

export default function Footer() {
  return (
    <Container>
      <h3>
        <Hexagon fill="#4D585E" stroke="#4D585E" size={24} /> food explorer
      </h3>
      © 2023 - Todos os direitos reservados.
    </Container>
  )
}