import { Container, ContentWrapper } from "./styles";
import { api } from "../../services/api";

export default function OrderCard({ cartDishes }) {

  return (
    <Container>
      {cartDishes.map((item) => (
        <main key={item.id}>
          <img
            src={`${api.defaults.baseURL}/files/${item.image_url}`}
            alt={item.name}
          />

          <ContentWrapper>
            <span>{item.quantity} x</span>
            <h1>{item.name}</h1>
            <p>R$ {item.price.toFixed(2)}</p>
          </ContentWrapper>
          <button>
            Excluir
          </button>
        </main>
      ))}
    </Container>
  );
}
