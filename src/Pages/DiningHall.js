import React from "react";
import Dining from "../Components/Halls/Dining/Dining";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CardSlider from "../Components/CardSlider/CardSlider";
import img1 from "../Assets/images/gallery8.jpg";
import Whatsapp from "../Components/ContactIcons/Whatsapp";
import Phone from "../Components/ContactIcons/Phone";

const array = [
  {
    id: "wedding",
    image: img1,
    title: "Banquet Hall",
  },
  {
    id: "dining",
    image: img1,
    title: "Dining Hall",
  },
  {
    id: "conference",
    image: img1,
    title: "Conference Hall",
  },
];
const DiningHall = () => {
  return (
    <div>
      <Header />
      <Whatsapp />
      <Phone />
      <Dining />
      <CardSlider array={array} divHeading="Meetings & Celebrations" />
      <Footer />
    </div>
  );
};

export default DiningHall;
