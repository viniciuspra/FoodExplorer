import { Container } from "./styles";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import OrderCard from "../../components/OrderCard";
import { useCartContext } from "../../hooks/cart-items";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export default function Cart() {
  const { cartItems } = useCartContext()
  const [cartDishes, setCartDishes] = useState([])

  useEffect(() => {
    const fetchDishes = async () => {
      const dishesData = await Promise.all(
        cartItems.map(async (cartItem) => {
          const response = await api.get(`/dishes/${cartItem.id}`)
          const dishesData = response.data
          return {
            ...dishesData,
            quantity: cartItem.quantity,
          }
        })
      )
      setCartDishes(dishesData)
    }

    fetchDishes()
  }, [cartItems])

  return (
    <Container>
      <Header />
        <OrderCard cartDishes={cartDishes}/>
      <Footer />
    </Container>
  );
}
