import { useState } from "react";
import { Container, MenuButton, SearchWrapper } from "./styles";

import Menu from "../icons/Menu";
import Explorer from "../icons/Explorer";
import OrderControl from "../OrderControl";

import SearchMenu from "../SearchMenu"

export default function Header() {
  const [searchMenuOpen, setsearchMenuOpen] = useState(false);

  const onToggleSearchMenu = () => {
    setsearchMenuOpen(!searchMenuOpen);
  }
  
  return (
    <>
      {!searchMenuOpen ? (
      <Container>
        <MenuButton onClick={onToggleSearchMenu}>
          <Menu />
        </MenuButton>
        <h1>
          <Explorer fill="#065E7C" /> food explorer
        </h1>
        <OrderControl />
      </Container>
      ) : <SearchWrapper>
            <SearchMenu onClose={onToggleSearchMenu}/>
          </SearchWrapper> }
    </>
  );
}
