import { OrderCount, Container } from "./styles";
import Receipt from "../Receipt";
import { useCartContext } from "../../hooks/cart-items";

export default function OrderControl() {
  const { cartItems } = useCartContext();

  const totalQuantity = cartItems ? cartItems.reduce((total, item) => total + item.id.quantity, 0) : 0;

  return (
    <Container to="/cart">
      <Receipt />
      <OrderCount>{totalQuantity}</OrderCount>
    </Container>
  );
}
