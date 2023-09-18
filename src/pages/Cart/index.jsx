import { useEffect, useState } from "react";
import { useCartContext } from "../../hooks/cart-items";
import { useMediaQuery } from "react-responsive";
import { api } from "../../services/api";

import { OrderCard } from "../../components/OrderCard";
import { Payment } from "../../components/Payment";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { Container, ContentWrapper } from "./styles";

export function Cart() {
  const { cartItems } = useCartContext();

  const [cartDishes, setCartDishes] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showPayment, setShowPayment] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 1280 });

  const handleChangeShowPayment = () => {
    setShowPayment(true);
  };

  useEffect(() => {
    const fetchDishes = async () => {
      const dishesData = await Promise.all(
        cartItems.map(async (cartItem) => {
          const response = await api.get(`/dishes/${cartItem.id}`);
          const dishesData = response.data;
          return {
            ...dishesData,
            quantity: cartItem.quantity,
          };
        })
      );
      setCartDishes(dishesData);

      const total = dishesData.reduce(
        (accumulator, dish) => accumulator + dish.price * dish.quantity,
        0
      );
      setTotalPrice(total);
    };

    fetchDishes();
  }, [cartItems]);

  return (
    <Container>
      <Header />
      <main>
        {isMobile ? (
          <>
            {!showPayment ? (
              <ContentWrapper>
                <h1>Meus Pedidos</h1>

                <OrderCard cartDishes={cartDishes} />
                {cartDishes.length > 0 && (
                  <div>
                    <p>Total: R${totalPrice.toFixed(2).replace(".", ",")}</p>
                    <Button text="Avançar" onClick={handleChangeShowPayment} />
                  </div>
                )}
              </ContentWrapper>
            ) : (
              <Payment />
            )}
          </>
        ) : (
          <>
            <ContentWrapper>
              <h1>Meus Pedidos</h1>

              <OrderCard cartDishes={cartDishes} />
              {cartDishes.length > 0 && (
                <div>
                  <p>Total: R${totalPrice.toFixed(2).replace(".", ",")}</p>
                </div>
              )}
            </ContentWrapper>
            <Payment />
          </>
        )}
      </main>
      <Footer />
    </Container>
  );
}
