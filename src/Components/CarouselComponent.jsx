import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slide from "./Slide.jsx";

function CarouselComponent({ carouselData, objective }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <section id="carousel">
      <Slider {...settings}>
        {carouselData.map((slideData) => {
          return (
            <Slide key={slideData.number} slideData={slideData} objective={objective} />
          )
        })}
      </Slider>
    </section>
  );
}

export default CarouselComponent;
