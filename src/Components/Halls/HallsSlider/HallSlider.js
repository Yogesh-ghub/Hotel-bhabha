import React from "react";
import Slider from "react-slick";

import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import sliderimg1 from '../../../Assets/images/gallery8.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderElement from './Slider'
const HallImages = [
    {
        id: '1',
        image: sliderimg1
    },
    {
        id: '2',
        image: sliderimg1
    },
    {
        id: '3',
        image: sliderimg1
    },
    {
        id: '4',
        image: sliderimg1
    },
    {
        id: '5',
        image: sliderimg1
    },
    {
        id: '6',
        image: sliderimg1
    },
    
]


function HallSlider(props) {
  var settings = {
    dots: false,
    arrow: true,
    centerPadding: 10,
    centerMode:true,
    nextArrow: <HiArrowCircleRight />,
    prevArrow: <HiArrowCircleLeft />,
    infinite: false,
    speed: 700,
    slidesToShow: 3.9,
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    variableleWidth: true,
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
      <div className="p-5">
        <h2 className="division-heading">Stay & Live</h2>
            <Slider {...settings}>
                {
                  HallImages.map((room) =>{
                    return <SliderElement id={room.id} img={room.image} />
                  })
                }
            </Slider>
      </div>
    </>
  );
}

export default HallSlider;
