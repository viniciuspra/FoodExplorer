import { Container } from "./styles";
import { useMediaQuery } from "react-responsive";
import HeaderDesktop from "../../components/HeaderDesktop";
import HeaderMobile from "../../components/HeaderMobile";

import { useAuth } from "../../hooks/auth";

export default function Header() {
  const { user, signOut } = useAuth();
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <Container>
      {isMobile ? (
        <HeaderMobile isAdmin={user.isAdmin} signOut={signOut} />
      ) : (
        <HeaderDesktop isAdmin={user.isAdmin} signOut={signOut} />
      )}
    </Container>
  );
}
