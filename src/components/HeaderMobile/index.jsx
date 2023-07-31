import { useState } from "react";
import { Container, MenuButton, SearchWrapper } from "./styles";


import OrderControl from "../OrderControl";

import SearchMenu from "../SearchMenu"
import { Menu } from "lucide-react";
import LogoFoodExplorer from "../LogoFoodExplorer";

export default function HeaderMobile() {
  const [searchMenuOpen, setsearchMenuOpen] = useState(false);

  const onToggleSearchMenu = () => {
    setsearchMenuOpen(!searchMenuOpen);
  }
  
  return (
    <>
      {!searchMenuOpen ? (
      <Container>
        <MenuButton onClick={onToggleSearchMenu}>
          <Menu stroke="white" size={28}/>
        </MenuButton>
        <LogoFoodExplorer fill="#065E7C" stroke="#065E7C" size="24"/>
        <OrderControl />
      </Container>
      ) : <SearchWrapper>
            <SearchMenu onClose={onToggleSearchMenu}/>
          </SearchWrapper> }
    </>
  );
}
