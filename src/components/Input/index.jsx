import { Container } from "./styles"

export default function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
        {Icon && <Icon />}
        <input {...rest} />
    </Container>
  )
}