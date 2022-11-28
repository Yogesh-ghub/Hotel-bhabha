import React from "react";
import Slider from "react-slick";

import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import banquet from '../../../Assets/images/dining/DSC00742 Large.jpeg'
import dining from '../../../Assets/images/dining/restaurant2.jpg'
import conference from '../../../Assets/images/conference/DSC00745 Large.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderElement from './Slider'
const HallDetails = [
    {
        id: '1',
        image: dining,
        title: "Dining Hall",
        description: "The state of art restaurant, serving the classic gujarathi cuisine is the elated specialty of the hotel.",
        smallDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
        timing: {
          Lunch: "11:00 A.M. to 3:00 P.M.",
          Dinner: "7:30 P.M. to 10:30 P.M."
        }
    },
    {
        id: '2',
        image: banquet,
        title: "Banquet Hall",
        description: "It may seem like an extravagant celebration with delicious meal and lavishly decorated venue. However, it is most auspicious and traditional event that marks beginning of an intimate companionship together. Therefore, The Hotel Bhabha understands that it is more than a ceremony. It presents more than just the wedding venues. It offers the perfect setting for your dream day. Whether you want a small intimate event or a true wedding bash, we are committed to transform your dream wedding into reality.",
        smallDescription: "It may seem like an extravagant celebration with glamorous clothes, delicious meal and lavishly..."
    },
    {
        id: '3',
        image: conference,
        title: "Conference Hall",
        description: "With the best of services, state-of-the-art technical capabilities, an experienced team as well as customized menus and innovative decorative themes, you can be sure of a seamless and memorable social event or business meeting. With excellent hospitality services at your fingertips, ergonomic usage of space and facilities, our conference rooms are the right choice for all your important events!",
        smallDescription: "With the best of services, state-of-the-art technical capabilities, an experienced..."
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
      <div className="p-4 bg-grey">
        <h2 className="division-heading">Dine & Shine</h2>
            <Slider {...settings}>
                {
                  HallDetails.map((room) =>{
                    return <SliderElement id={room.id} img={room.image} title={room.title} description={room.description} smallDescription={room.smallDescription} timing={room.timing} />
                  })
                }
            </Slider>
      </div>
    </>
  );
}

export default HallSlider;
