import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";

import { Mail, Lock } from "lucide-react";

import { LogoFoodExplorer } from "../../components/LogoFoodExplorer";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, Form } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  const isMobile = useMediaQuery({ maxWidth: 1024 });

  function handleSignIn(e) {
    e.preventDefault();
    signIn({ email, password });
  }

  return (
    <Container>
      <LogoFoodExplorer fill="#065E7C" stroke="#065E7C" size="24" />
      <Form>
        {!isMobile ? <h1>Faça login</h1> : ""}
        <label>
          <span>E-mail</span>
          <Input
            placeholder="exemplo@exemplo.com"
            type="text"
            icon={Mail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha</span>
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
            icon={Lock}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <Button text="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  );
}
