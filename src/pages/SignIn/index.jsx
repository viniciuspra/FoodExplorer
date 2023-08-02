import { Container, Form } from "./styles";

import { Link } from "react-router-dom";

import LogoFoodExplorer from "../../components/LogoFoodExplorer";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { Mail, Lock } from "lucide-react";

export default function SignIn() {
  return (
    <Container>
      <LogoFoodExplorer fill="#065E7C" stroke="#065E7C" size="24" />
      <Form>
        <label>
          <span>E-mail</span>
          <Input placeholder="exemplo@exemplo.com.br" type="text" icon={Mail} />
        </label>
        <label>
          <span>Senha</span>
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
            icon={Lock}
          />
        </label>

        <Button text="Entrar" />

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  );
}
