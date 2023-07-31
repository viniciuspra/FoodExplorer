import { Container, InputWrapper } from "./styles";
import InputSearch from "../InputSearch";

import Button from "../Button";
import useLocalStorage from "../../hooks/useLocalStorage";

import { LogOut } from "lucide-react";
import Receipt from "../Receipt";
import LogoFoodExplorer from "../LogoFoodExplorer";

export default function HeaderDesktop() {
  const { value } = useLocalStorage('order-items')

  return (
    <Container>
      <LogoFoodExplorer fill="#065E7C" stroke="#065E7C" size="32"/>
      <InputWrapper>
        <InputSearch
          type="text"
          placeholder="Busque por pratos ou ingredientes"
        />
      </InputWrapper>
      <div>
        <Button icon={Receipt} text="Pedidos" value={`(${value.length})`}/>
        <LogOut size={40} cursor="pointer"/>
      </div>
    </Container>
  );
}
