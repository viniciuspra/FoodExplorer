import { useState } from "react";

import { CreditCard } from "lucide-react";

import { PaymentContent } from "../PaymentContent";
import { Pix } from "../Pix";

import { Container, PaymentOptions, Option } from "./styles";

export function Payment() {
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
          $isfirst
          onClick={() => handleChangeSelectedOption("pix")}
        >
          <Pix /> PIX
        </Option>
        <Option
          selected={selectedOption == "creditCard"}
          $islast
          onClick={() => handleChangeSelectedOption("creditCard")}
        >
          <CreditCard size={28} /> Crédito
        </Option>
      </PaymentOptions>
      <PaymentContent selectedOption={selectedOption} />
    </Container>
  );
}
