import { useState } from "react";
import { Container, PaymentOptions, Option } from "./styles";
import Pix from "../Pix";
import { CreditCard } from "lucide-react";
import PaymentContent from "../PaymentContent";

export default function Payment() {
  const [selectedOption, setSelectedOption] = useState("pix");

  const handleChangeSelectedOption = (option) => {
    setSelectedOption(option);
  };
  return (
    <Container>
      <h1>Pagamento</h1>
      <PaymentOptions>
        <Option
          selected={selectedOption == "pix"}
          isFirst
          onClick={() => handleChangeSelectedOption("pix")}
        >
          <Pix /> PIX
        </Option>
        <Option
          selected={selectedOption == "creditCard"}
          isLast
          onClick={() => handleChangeSelectedOption("creditCard")}
        >
          <CreditCard size={28} /> Crédito
        </Option>
      </PaymentOptions>
      <PaymentContent selectedOption={selectedOption}/>
    </Container>
  );
}
