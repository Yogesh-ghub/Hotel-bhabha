import React from "react";
import Slider from "react-slick";

import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderElement from "./Slider";

import executiveRoom from "../../Assets/images/Executive-room/DSC00799.jpg";
import superiorRoom from "../../Assets/images/Superior-room/DSC00763.jpg";
import superAc from "../../Assets/images/Super-ac/DSC00777.jpg";

const RoomDetails = [
  {
    id: "executive-room",
    title: "Executive Room",
    description:
      "Executive room are well furnished and equipped with all modern amenities. This room is equipped with a air-conditioner, wardrobe, LCD TV, writing desk and attached bathroom.",
    image: executiveRoom,
  },
  {
    id: "superior-room",
    title: "Superior Room",
    description:
      "Superior Room are clean and well furnished. we offer rooms equipped with modern amenities. This room is equipped with a wardrobe, flat-screen TV, writing desk and attached bathroom.",
    image: superiorRoom,
  },
  // {
  //   id: "deluxe-room",
  //   title: "Deluxe Room",
  //   description:
  //     "The room is a clean and well-maintained room. This room is equipped With a double bed Featuring a shower, private bathroom.",
  //   image: deluxeRoom,
  // },
  // {
  //   id: "standard-room",
  //   title: "Standard Room",
  //   description:
  //     "Well maintained, Clean family room with air conditioning. This room is equipped with ceiling fan, wardrobe, flat screen TV and attached bathroom. Extra mattress is provided on additional charges and on request.",
  //   image: executiveRoom,
  // },
  {
    id: "super-ac-room",
    title: "Super AC Room",
    description:
      "This room fully air conditioned family room is comfortable with a nice environment. Enjoy your stay full value of money. Clean and hygienic stay. Extra mattress is provided on additional charges and on request.",
    image: superAc,
  },
];


function RoomSlider() {
  var settings = {
    dots: true,
    arrow: true,
    centerPadding: 10,
    centerMode: true,
    nextArrow: <GrLinkNext />,
    prevArrow: <GrLinkPrevious />,
    infinite: false,
    speed: 700,
    slidesToShow: 1.6,

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
          arrow: false,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="room-slider-container container-fluid p-5">
        <h2 className="division-heading">Stay & Live</h2>
        <Slider {...settings}>
          {RoomDetails.map((room) => {
            return (
              <SliderElement
                id={room.id}
                img={room.image}
                title={room.title}
                description={room.description}
              />
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default RoomSlider;
