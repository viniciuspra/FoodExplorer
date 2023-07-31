import { useState } from "react";

import { Container } from "./styles";
import { ChevronRight, Heart } from "lucide-react";

import Counter from "../Counter"
import Button from "../Button"

export default function DishCard({ title, img, price }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleHeartClick = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };
  return (
    <Container>
      <Heart
        size={24}
        onClick={handleHeartClick}
        fill={isLiked ? "white" : ""}
        cursor="pointer"
      />
      <img src={img} alt="foto do prato" />
      <h2><a href="">{title} <ChevronRight size={24}/></a></h2>
      <span>R$ {price}</span>

      <Counter />
      <Button text="incluir"/>
    </Container>
  );
}
