import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import {
  Container,
  MenuButton,
  SearchWrapper,
  LogoWrapper,
  ButtonWrapper,
  InputWrapper,
} from "./styles";

import { Menu, LogOut, PlusCircle } from "lucide-react";
import Receipt from "../Receipt";

import Button from "../Button";
import SearchMenu from "../SearchMenu";
import InputSearch from "../InputSearch";
import OrderControl from "../OrderControl";
import LogoFoodExplorer from "../LogoFoodExplorer";

import useLocalStorage from "../../hooks/useLocalStorage";

export default function Header({ search, setSearch }) {
  const { user, signOut } = useAuth();

  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const navigate = useNavigate();

  const { value } = useLocalStorage("order-items");

  const [searchMenuOpen, setsearchMenuOpen] = useState(false);

  const onToggleSearchMenu = () => {
    setsearchMenuOpen(!searchMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const NavigateNew = () => {
    navigate("/new");
  };

  return (
    <>
      {isMobile ? (
        <>
          {!searchMenuOpen ? (
            <Container>
              <MenuButton onClick={onToggleSearchMenu}>
                <Menu stroke="white" size={28} />
              </MenuButton>
              <LogoWrapper>
                <LogoFoodExplorer
                  fill="#065E7C"
                  stroke="#065E7C"
                  size="24"
                  isAdmin={user.isAdmin}
                />
              </LogoWrapper>
              {!user.isAdmin ? <OrderControl /> : ""}
            </Container>
          ) : (
            <SearchWrapper>
              <SearchMenu
                onClose={onToggleSearchMenu}
                isAdmin={user.isAdmin}
                signOut={handleSignOut}
                setSearch={setSearch}
                search={search}
              />
            </SearchWrapper>
          )}
        </>
      ) : (
        <Container>
          <LogoFoodExplorer
            fill="#065E7C"
            stroke="#065E7C"
            size="32"
            isAdmin={user.isAdmin}
          />
          <InputWrapper>
            <InputSearch
              type="text"
              placeholder="Busque por pratos ou ingredientes"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputWrapper>
          <ButtonWrapper>
            {!user.isAdmin ? (
              <Button
                icon={Receipt}
                text="Pedidos"
                value={`(${value.length})`}
              />
            ) : (
              <Button
                icon={PlusCircle}
                text="Criar Prato"
                onClick={NavigateNew}
              />
            )}
            <LogOut size={40} cursor="pointer" onClick={handleSignOut} />
          </ButtonWrapper>
        </Container>
      )}
    </>
  );
}
