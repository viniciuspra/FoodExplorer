import Receipt from "../Receipt";
import Button from "../Button";
import Input from "../Input";
import { Container, Form } from "./styles";
import { useState } from "react";

export default function CreditCardForm() {
  const [cardNumber, setCardNumber] = useState('')
  const [expiringDate, setExpiringDate] = useState('')

  const formatCardNumber = (value) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    const formattedCardNumber = numericValue.replace(/(\d{4}(?=\d))/g, '$1 ');
  
    setCardNumber(formattedCardNumber);
  }

  const formatExpiringDate = (value) => {
    const expiringDateWithoutSlash = value.replace(/\//g, '');
    const formattedExpiringDate = expiringDateWithoutSlash.replace(/(\d{2})(\d{2})/, '$1/$2');
    
    setExpiringDate(formattedExpiringDate);
  };

  return (
    <Container>
      <Form>
        <label>
          <span>Número do Cartão</span>
          <Input placeholder="0000 0000 0000 0000" value={cardNumber} maxLength={19} onChange={(e) => formatCardNumber(e.target.value)}/> 
        </label>
        <label>
          <span>Validade</span>
          <Input placeholder="04/25" value={expiringDate} maxLength={5} onChange={(e) => formatExpiringDate(e.target.value)}/>
        </label>
        <label>
          <span>CVC</span>
          <Input placeholder="000" maxLength={4}/>
        </label>

        <Button icon={Receipt} text="Finalizar pagamento" />
      </Form>
    </Container>
  );
}
