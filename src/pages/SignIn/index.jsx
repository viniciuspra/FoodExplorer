import { Container, Form } from "./styles";

import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { Link } from "react-router-dom";

import LogoFoodExplorer from "../../components/LogoFoodExplorer";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { Mail, Lock } from "lucide-react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn(e) {
    e.preventDefault()
    signIn({ email, password });
  }

  return (
    <Container>
      <LogoFoodExplorer fill="#065E7C" stroke="#065E7C" size="24" />
      <Form>
        <label>
          <span>E-mail</span>
          <Input
            placeholder="exemplo@exemplo.com.br"
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
