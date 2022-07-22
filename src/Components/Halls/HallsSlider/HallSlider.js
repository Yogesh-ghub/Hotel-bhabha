import React from "react";
import Slider from "react-slick";

import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import sliderimg1 from '../../../Assets/images/gallery8.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderElement from './Slider'
const HallDetails = [
    {
        id: '1',
        image: sliderimg1,
        title: "Dining Hall",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
    },
    {
        id: '2',
        image: sliderimg1,
        title: "Banquet Hall",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
    },
    {
        id: '3',
        image: sliderimg1,
        title: "Conference Hall",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
    },
        
]


function HallSlider(props) {
  var settings = {
    dots: true,
    arrow: true,
    centerPadding: 10,
    centerMode:true,
    nextArrow: <HiArrowCircleRight />,
    prevArrow: <HiArrowCircleLeft />,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    variableleWidth: true,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 1,
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
      <div className="p-5 bg-grey">
        <h2 className="division-heading">Dine & Shine</h2>
            <Slider {...settings}>
                {
                  HallDetails.map((room) =>{
                    return <SliderElement id={room.id} img={room.image} title={room.title} description={room.description} />
                  })
                }
            </Slider>
      </div>
    </>
  );
}

export default HallSlider;
