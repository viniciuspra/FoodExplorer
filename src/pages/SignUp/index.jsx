import { useState } from "react";
import { Container, Form } from "./styles";

import { Link } from "react-router-dom";

import LogoFoodExplorer from "../../components/LogoFoodExplorer";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { User, Mail, Lock } from "lucide-react";

export default function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(!emailPattern.test(email)) {
      return alert("Digite um E-mail valido!")
    }

    if(password.length < 6) {
      return alert("A senha deve ter no mínimo 6 caracteres!")
    }
  };

  return (
    <Container>
      <LogoFoodExplorer fill="#065E7C" stroke="#065E7C" size="24" />
      <Form>
        <label>
          <span>Seu Nome</span>
          <Input
            placeholder="Maria da Silva"
            type="text"
            icon={User}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
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

        <Button text="Entrar" onClick={handleSignUp}/>

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  );
}
