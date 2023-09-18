import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { GetSliderSettings } from "../../configs/SliderSettings";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

import { DishCard } from "../DishCard";

import { Container } from "./styles";

export function Section({ title, dishes }) {
  const { user } = useAuth();
  const settings = GetSliderSettings(dishes);

  return (
    <Container>
      <h2>{title}</h2>
      <Slider {...settings}>
        {dishes.map((dish) => (
          <DishCard
            key={dish.id}
            id={dish.id}
            title={dish.name}
            price={dish.price}
            description={dish.description}
            image_url={`${api.defaults.baseURL}/files/${dish.image_url}`}
            isAdmin={user.isAdmin}
          />
        ))}
      </Slider>
    </Container>
  );
}
