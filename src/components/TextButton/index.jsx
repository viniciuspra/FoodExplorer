import { Container } from "./styles";

export default function TextButton({ title, ...rest}) {
  return (
    <Container {...rest}>
      {title}
    </Container>
  ) 
}