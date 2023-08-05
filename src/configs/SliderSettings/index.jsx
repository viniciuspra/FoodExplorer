import { PrevArrowButton, NextArrowButton, PrevArrowIcon, NextArrowIcon } from "./styles";

export default function getSliderSettings(dishes) {

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
  
  let slidesToShow = Math.min(5, dishes.length);

  if (window.innerWidth >= 2000) {
    slidesToShow = Math.min(7, dishes.length);
  } else if (window.innerWidth >= 1560) {
    slidesToShow = Math.min(5, dishes.length);
  } else if (window.innerWidth >= 1023) {
    slidesToShow = Math.min(4, dishes.length);
  } else if (window.innerWidth >= 767) {
    slidesToShow = Math.min(4, dishes.length);
  } else if (window.innerWidth >= 320) {
    slidesToShow = Math.min(2, dishes.length);
  }

  return {
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: slidesToShow,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: slidesToShow,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesToShow,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: slidesToShow,
          arrows: false,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: slidesToShow,
          arrows: false,
        },
      },
    ],
  };
}
