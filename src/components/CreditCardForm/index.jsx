import { useEffect, useState } from "react";
import { useCartContext } from "../../hooks/cart-items";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Receipt } from "../Receipt";
import { Button } from "../Button";
import { Input } from "../Input";

import { Container, Form } from "./styles";

export function CreditCardForm() {
  const { cartItems } = useCartContext();
  const [cardNumber, setCardNumber] = useState("");
  const [expiringDate, setExpiringDate] = useState("");
  const [dishes, setDishes] = useState([]);

  const navigate = useNavigate();

  const formatCardNumber = (value) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    const formattedCardNumber = numericValue.replace(/(\d{4}(?=\d))/g, "$1 ");

    setCardNumber(formattedCardNumber);
  };

  const formatExpiringDate = (value) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    const expiringDateWithoutSlash = numericValue.replace(/\//g, "");
    const formattedExpiringDate = expiringDateWithoutSlash.replace(
      /(\d{2})(\d{2})/,
      "$1/$2"
    );

    setExpiringDate(formattedExpiringDate);
  };

  const handleNewOrder = async (e) => {
    e.preventDefault();

    if (!cardNumber || cardNumber.length !== 19) {
      return alert("Digite um numero de cartão válido. ");
    }

    if (!expiringDate || expiringDate.length !== 5) {
      return alert("Digite uma data válida. ");
    }

    try {
      const formattedCartItems = dishes.map((dish) => {
        const { name, quantity } = dish;
        return `${quantity}x ${name}`;
      });

      if (cartItems === "") {
        return alert("Nenhume item no carrinho!");
      }

      await api.post("/orders", { details: formattedCartItems.join(", ") });
      alert("Pedido realizado com sucesso!");
      navigate("/order-history");
      localStorage.removeItem("@FoodExplorer:cart-items");
      location.reload();
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possivel efetuar o pagamento!");
      }
    }
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
      setDishes(dishesData);
    };

    fetchDishes();
  }, [cartItems]);

  return (
    <Container>
      <Form>
        <label>
          <span>Número do Cartão</span>
          <Input
            placeholder="0000 0000 0000 0000"
            value={cardNumber}
            maxLength={19}
            onChange={(e) => formatCardNumber(e.target.value)}
          />
        </label>
        <label>
          <span>Validade</span>
          <Input
            placeholder="04/25"
            value={expiringDate}
            maxLength={5}
            onChange={(e) => formatExpiringDate(e.target.value)}
          />
        </label>
        <label>
          <span>CVC</span>
          <Input placeholder="000" maxLength={4} />
        </label>

        <Button
          icon={Receipt}
          text="Finalizar pagamento"
          onClick={handleNewOrder}
        />
      </Form>
    </Container>
  );
}
