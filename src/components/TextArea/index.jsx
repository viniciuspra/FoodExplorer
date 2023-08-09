import { Container } from "./styles";

export default function TextArea({ value, ...rest }) {
  return (
    <Container {...rest} >
      {value}
    </Container>
  )
}