import {
  Container,
  InputWrapper,
  CloseButton,
  CloseButtonWrapper,
  ContentWrapper,
  FooterWrapper,
} from "./styles";

import Footer from "../Footer";

import InputSearch from "../InputSearch";
import { X } from "lucide-react";
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
          <InputSearch
            type="text"
            placeholder="Busque por pratos ou ingredientes"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputWrapper>

        {isAdmin ? <TextButton title="Novo Prato" to="/new" /> : ""}
        <TextButton title="Sair" onClick={signOut} />
      </ContentWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  );
}
