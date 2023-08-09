import { Container } from "./styles";

import { useAuth } from "../../hooks/auth";

import DishCard from "../DishCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import GetSliderSettings from "../../configs/SliderSettings";

export default function Section({ title, dishes }) {
  const { user } = useAuth();
  const settings = GetSliderSettings(dishes)
  
  return (
    <Container>
      <h2>{title}</h2>
      <Slider {...settings}>
        {dishes.map((dish) => (
          <DishCard
            key={dish.id}
            id={dish.id}
            title={dish.title}
            price={dish.price}
            img={dish.img}
            isAdmin={user.isAdmin}
          />
        ))}
      </Slider>
    </Container>
  );
}
