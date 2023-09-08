import QRCodeDisplay from "../QRCodeDisplay";
import CreditCardForm from "../CreditCardForm";
import { Container } from "./styles";

export default function PaymentContent({ selectedOption }) {
  return (
    <Container>
      {selectedOption === "pix" ? <QRCodeDisplay /> : <CreditCardForm />}
    </Container>
  );
}
