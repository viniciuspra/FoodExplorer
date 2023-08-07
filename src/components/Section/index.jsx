import { Container } from "./styles";

import DishCard from "../DishCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import getSliderSettings from "../../configs/SliderSettings";

export default function Section({ title, dishes }) {
  const settings = getSliderSettings(dishes)
  
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
          />
        ))}
      </Slider>
    </Container>
  );
}
