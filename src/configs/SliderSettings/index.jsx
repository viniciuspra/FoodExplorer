import {
  PrevArrowButton,
  NextArrowButton,
  PrevArrowIcon,
  NextArrowIcon,
} from "./styles";

export default function GetSliderSettings(dishes) {
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

  return {
    speed: 500,
    slidesToShow: Math.min(4, dishes.length),
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    infinite: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: Math.min(4, dishes.length),
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: Math.min(3, dishes.length),
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(3, dishes.length),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(2, dishes.length),
          arrows: false,
        },
      },
    ],
  };
}
