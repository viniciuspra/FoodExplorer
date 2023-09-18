import { Search, X } from "lucide-react";

import { Input } from "../Input";
import { Footer } from "../Footer";
import { TextButton } from "../TextButton";

import {
  Container,
  InputWrapper,
  CloseButton,
  CloseButtonWrapper,
  ContentWrapper,
  FooterWrapper,
} from "./styles";

export function SearchMenu({
  onClose,
  isAdmin,
  signOut,
  search,
  setSearch,
}) {
  return (
    <Container>
      <CloseButtonWrapper>
        <CloseButton onClick={onClose}>
          <X size={28} /> Menu
        </CloseButton>
      </CloseButtonWrapper>
      <ContentWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Busque por pratos ou ingredientes"
            icon={Search}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputWrapper>

        {isAdmin ? (
          <>
            <TextButton title="Novo Prato" to="/new" />
            <TextButton title="Pedidos" to="/order-history" />
          </>
        ) : (
          <>
            <TextButton title="Meus Favoritos" to="/favorites" />
            <TextButton title="Histórico de Pedidos" to="/order-history" />
          </>
        )}
        <TextButton title="Sair" onClick={signOut} />
      </ContentWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  );
}
