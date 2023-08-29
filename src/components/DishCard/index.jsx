import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import { Container, ContentWrapper, LinkWrapper, Paragraph } from "./styles";
import { ChevronRight, Heart, Pencil } from "lucide-react";
import Counter from "../Counter";
import Button from "../Button";
import { useFavoritesContext } from "../../hooks/favorites";

export default function DishCard({ id, title, image_url, price, description, isAdmin }) {
  const { favorites, updateFavorite } = useFavoritesContext()
  const [isLiked, setIsLiked] = useState(favorites.includes(id));
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const [totalPrice, setTotalPrice] = useState(0)

  const formattedPrice = totalPrice.toFixed(2).replace(".", ",")
  
  const handleCountChange = (newCount) => {
    setTotalPrice(newCount * price);
  }

  useEffect(() => {
    setIsLiked(favorites.includes(id))
  }, [favorites, id])

  const handleHeartClick = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
    updateFavorite(id)
  };

  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }

  return (
    <Container>
      {!isAdmin ? (
        <Heart
          size={24}
          onClick={handleHeartClick}
          fill={isLiked ? "white" : ""}
          cursor="pointer"
        />
      ) : (
        <LinkWrapper to={`/edit/${id}`}>
          <Pencil size={24} />
        </LinkWrapper>
      )}
      <ContentWrapper>
        <Link to={`/details/${id}`}>
          <img src={image_url} alt="foto do prato" />
          <h2>
            {title} <ChevronRight size={20} />
          </h2>
          {
            !isMobile && 
            <Paragraph>
              <p>{truncateDescription(description, 50)}</p>
            </Paragraph>
          }
          {
            !isAdmin ? <span>R$ {formattedPrice}</span> : '' 
          }
        </Link>
        {!isAdmin ? (
          <>
            <Counter onCountChange={handleCountChange}/>
            <Button text="incluir" />
          </>
        ) : (
          ""
        )}
      </ContentWrapper>
    </Container>
  );
}
