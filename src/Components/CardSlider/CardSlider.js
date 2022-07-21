import React from "react";
import Slider from "react-slick";

import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

import SliderCard from "./SliderCard";

function CardSlider(props) {

  const propArray = props.array;

  var settings = {
    dots: false,
    arrow: true,
    centerPadding: 10,
    nextArrow: <GrLinkNext />,
    prevArrow: <GrLinkPrevious />,
    infinite: false,
    speed: 500,
    slidesToShow: 2.7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="card-slider-container p-5">
        <h2 className="division-heading">Special Offers</h2>
          <Slider {...settings}>

          {
            propArray.map((item) => {
              return  <SliderCard image={item.image} title={item.title}  /> 
            })
          }
          </Slider>
        
      </div>
    </>
  );
}

export default CardSlider;
