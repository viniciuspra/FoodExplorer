import { Container, PrevArrowButton, NextArrowButton, PrevArrowIcon, NextArrowIcon } from "./styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img from "../../assets/img2.png";
import DishCard from "../DishCard";

export default function Section({ title }) {
  const dishes = [
    { id: 1, title: "Dish 1", img: img, price: 49.97 },
    { id: 2, title: "Dish 2", img: img, price: 29.99 },
    { id: 3, title: "Dish 3", img: img, price: 19.99 },
    { id: 4, title: "Dish 4", img: img, price: 19.99 },
    { id: 5, title: "Dish 5", img: img, price: 19.99 },
    { id: 6, title: "Dish 6", img: img, price: 19.99 },
    { id: 7, title: "Dish 7", img: img, price: 19.99 },
  ];

  const PrevArrow = ({ onClick }) => {
    return (
      <PrevArrowButton onClick={onClick}>
        <PrevArrowIcon />
      </PrevArrowButton>
    );
  };

  const NextArrow = ({ onClick }) => {
    return (
      <NextArrowButton onClick={onClick}>
        <NextArrowIcon />
      </NextArrowButton>
    );
  };

  const settings = {
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Container>
      <h2>{title}</h2>
      <Slider {...settings}>
        {dishes.map((dish) => (
          <DishCard
            key={dish.id}
            title={dish.title}
            price={dish.price}
            img={dish.img}
          />
        ))}
      </Slider>
    </Container>
  );
}
