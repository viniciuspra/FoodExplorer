import { Container, InputWrapper } from "./styles";
import InputSearch from "../InputSearch";

import Explorer from '../icons/Explorer';
import Exit from '../icons/Exit';
import Button from "../Button";
import useLocalStorage from "../../hooks/useLocalStorage";
import Receipt from "../icons/Receipt";

export default function HeaderDesktop() {
  const { value } = useLocalStorage('order-items')

  return (
    <Container>
      <h1><Explorer fill="#065E7C"/> food explorer</h1>
      <InputWrapper>
        <InputSearch
          type="text"
          placeholder="Busque por pratos ou ingredientes"
        />
      </InputWrapper>
      <div>
        <Button icon={Receipt} text="Pedidos" value={value.length}/>
        <Exit />
      </div>
    </Container>
  );
}
