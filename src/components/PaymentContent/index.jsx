import { QRCodeDisplay } from "../QRCodeDisplay";
import { CreditCardForm } from "../CreditCardForm";

import { Container } from "./styles";

export function PaymentContent({ selectedOption }) {
  return (
    <Container>
      {selectedOption === "pix" ? <QRCodeDisplay /> : <CreditCardForm />}
    </Container>
  );
}
