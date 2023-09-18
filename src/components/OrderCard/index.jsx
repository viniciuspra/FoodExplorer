import { useCartContext } from "../../hooks/cart-items";
import { api } from "../../services/api";

import { Container, ContentWrapper } from "./styles";

export function OrderCard({ cartDishes }) {
  const { removeFromCart } = useCartContext();

  const removeDishFromCart = (id) => {
    const confirm = window.confirm(
      "você tem certeza que deseja remover esse item do carrinho?"
    );

    if (confirm) {
      removeFromCart(id);
      alert("Item removido do carrinho");
    }
  };

  return (
    <Container>
      {cartDishes.map((dish) => (
        <main key={dish.id}>
          <img
            src={`${api.defaults.baseURL}/files/${dish.image_url}`}
            alt={dish.name}
          />

          <div>
            <ContentWrapper>
              <span>{dish.quantity}x</span>
              <h1>{dish.name}</h1>
              <p>R$ {dish.price.toFixed(2).replace(".", ",")}</p>
            </ContentWrapper>
            <button onClick={() => removeDishFromCart(dish.id)}>Excluir</button>
          </div>
        </main>
      ))}
    </Container>
  );
}
