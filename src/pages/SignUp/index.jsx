import { useState } from "react";
import { Container, Form } from "./styles";

import { api } from "../../services/api";
import { useMediaQuery } from "react-responsive";

import { Link, useNavigate } from "react-router-dom";

import LogoFoodExplorer from "../../components/LogoFoodExplorer";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { User, Mail, Lock } from "lucide-react";

export default function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const navigate = useNavigate()

  const handleSignUp = (e) => {
    e.preventDefault();
    
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
      return alert("Digite um E-mail valido!");
    }

    if (password.length < 6) {
      return alert("A senha deve ter no mínimo 6 caracteres!");
    }

    api.post("/users", {name, email, password})
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/")
      })
      .catch(error => {
        if(error.response) {
          alert(error.response.data.message);
        }else {
          alert("Não foi possível cadastar")
        }
      });
  };

  return (
    <Container>
      <LogoFoodExplorer fill="#065E7C" stroke="#065E7C" size="24" />
      <Form>
        { !isMobile ? <h1>Crie sua conta</h1> : ''}
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

        <Button text="Criar conta" onClick={handleSignUp} />

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  );
}
