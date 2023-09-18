import { useFavoritesContext } from "../../hooks/favorites";
import { useEffect, useState } from "react";
import { useCartContext } from "../../hooks/cart-items";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import { ChevronRight, Heart, Pencil } from "lucide-react";

import { Counter } from "../Counter";
import { Button } from "../Button";

import { Container, ContentWrapper, LinkWrapper, Paragraph } from "./styles";

export function DishCard({
  id,
  title,
  image_url,
  price,
  description,
  isAdmin,
}) {
  const { favorites, updateFavorite } = useFavoritesContext();
  const { addToCart } = useCartContext();

  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const [isLiked, setIsLiked] = useState(favorites.includes(id));
  const [totalPrice, setTotalPrice] = useState(0);

  const [quantity, setQuantity] = useState(1);

  const formattedPrice = totalPrice.toFixed(2).replace(".", ",");

  const handleCountChange = (newCount) => {
    setQuantity(newCount);
    setTotalPrice(newCount * price);
  };

  const handleAddToCart = () => {
    addToCart(id, quantity);
  };

  const handleHeartClick = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
    updateFavorite(id);
  };

  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  useEffect(() => {
    setIsLiked(favorites.includes(id));
  }, [favorites, id]);

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
          {!isMobile && (
            <Paragraph>
              <p>{truncateDescription(description, 50)}</p>
            </Paragraph>
          )}
          {!isAdmin ? <span>R$ {formattedPrice}</span> : ""}
        </Link>
        {!isAdmin ? (
          <>
            <Counter onCountChange={handleCountChange} />
            <Button
              text="incluir"
              onClick={() => handleAddToCart({ id, quantity })}
            />
          </>
        ) : (
          ""
        )}
      </ContentWrapper>
    </Container>
  );
}
