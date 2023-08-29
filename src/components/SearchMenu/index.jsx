import {
  Container,
  InputWrapper,
  CloseButton,
  CloseButtonWrapper,
  ContentWrapper,
  FooterWrapper,
} from "./styles";

import Footer from "../Footer";

import Input from "../Input";
import { Search, X } from "lucide-react";
import TextButton from "../TextButton";

export default function SearchMenu({
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
          <TextButton title="Novo Prato" to="/new" />
        ) : (
          <TextButton title="Meus Favoritos" to="/favorites" />
        )}

        <TextButton title="Sair" onClick={signOut} />
      </ContentWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  );
}
