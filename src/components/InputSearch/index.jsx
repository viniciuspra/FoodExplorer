import { Search } from "lucide-react"
import { Container, Wrapper } from "./styles"


export default function InputSearch({ ...rest }) {
  return (
    <Container>
      <Wrapper>
        <Search />
        <input {...rest} />
      </Wrapper>
    </Container>
  )
}