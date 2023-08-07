import { Container } from "./styles"

export default function InputSearch({ icon: Icon, ...rest }) {
  return (
    <Container>
        {Icon && <Icon />}
        <input {...rest} />
    </Container>
  )
}