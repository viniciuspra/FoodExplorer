import {
  Container,
  ExitButton,
  InputWrapper,
  CloseButton,
  CloseButtonWrapper,
  ContentWrapper,
  FooterWrapper
} from "./styles";

import Footer from "../Footer"

import InputSearch from "../InputSearch";
import { X } from "lucide-react";

export default function SearchMenu({ onClose }) {
  return (
    <Container>
      <CloseButtonWrapper>
        <CloseButton onClick={onClose}>
          <X size={28}/> Menu
        </CloseButton>
      </CloseButtonWrapper>
      <ContentWrapper>
        <InputWrapper>
          <InputSearch
            type="text"
            placeholder="Busque por pratos ou ingredientes"
          />
        </InputWrapper>
        
        <ExitButton>Sair</ExitButton>
      </ContentWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  );
}
