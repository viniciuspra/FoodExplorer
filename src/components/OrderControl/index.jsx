import { useCartContext } from "../../hooks/cart-items";

import { Receipt } from "../Receipt";

import { OrderCount, Container } from "./styles";

export function OrderControl() {
  const { cartItems } = useCartContext();

  const totalQuantity = cartItems
    ? cartItems.reduce((total, item) => total + item.quantity, 0)
    : 0;

  return (
    <Container to="/cart">
      <Receipt />
      <OrderCount>{totalQuantity}</OrderCount>
    </Container>
  );
}
