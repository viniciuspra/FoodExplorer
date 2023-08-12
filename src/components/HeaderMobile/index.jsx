import { useState } from "react";
import { Container, MenuButton, SearchWrapper, LogoWrapper } from "./styles";


import OrderControl from "../OrderControl";

import SearchMenu from "../SearchMenu"
import { Menu } from "lucide-react";
import LogoFoodExplorer from "../LogoFoodExplorer";

export default function HeaderMobile({ isAdmin, signOut }) {
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
        <LogoWrapper>
          <LogoFoodExplorer fill="#065E7C" stroke="#065E7C" size="24" isAdmin={isAdmin}/>
        </LogoWrapper>
        {!isAdmin ? <OrderControl /> : ''}
      </Container>
      ) : <SearchWrapper>
            <SearchMenu onClose={onToggleSearchMenu} isAdmin={isAdmin} signOut={signOut}/>
          </SearchWrapper> }
    </>
  );
}
