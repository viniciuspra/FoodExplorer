import { PrevArrowButton, NextArrowButton, PrevArrowIcon, NextArrowIcon } from "./styles";
import { useMediaQuery } from "react-responsive";

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

  const isWide = useMediaQuery({ query: '(max-width: 1824px)' });
  const isLarge = useMediaQuery({ query: '(max-width: 1560px)' });
  const isMedium = useMediaQuery({ query: '(max-width: 1023px)' });
  const isSmall = useMediaQuery({ query: '(max-width: 720px)' });
  const isSmaller = useMediaQuery({ query: '(max-width: 320px)' });

  let slidesToShow = 5;

  if (isWide) {
    slidesToShow = 7;
  } else if (isLarge) {
    slidesToShow = 5;
  } else if (isMedium) {
    slidesToShow = 4;
  } else if (isSmall) {
    slidesToShow = 3;
  } else if (isSmaller) {
    slidesToShow = 2;
  }

  return {
    speed: 500,
    slidesToShow: Math.min(slidesToShow, dishes.length),
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: Math.min(7, dishes.length),
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: Math.min(5, dishes.length),
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(4, dishes.length),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(3, dishes.length),
          arrows: false,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: Math.min(2, dishes.length),
          arrows: false,
        },
      },
    ],
  };
}
