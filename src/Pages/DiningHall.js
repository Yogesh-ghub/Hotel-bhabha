import React from "react";
import Dining from "../Components/Halls/Dining/Dining";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CardSlider from "../Components/CardSlider/CardSlider";
import Whatsapp from "../Components/ContactIcons/Whatsapp";
import Phone from "../Components/ContactIcons/Phone";
import conference from '../Assets/images/conference/DSC00820 Large.jpeg'
import dining from '../Assets/images/dining/DSC00462 Large.png'
import banquet from '../Assets/images/dining/DSC00741 Large.jpeg'
const array = [
  {
    id: "wedding",
    image: banquet,
    title: "Banquet Hall",
  },
  {
    id: "dining",
    image: dining,
    title: "Dining Hall",
  },
  {
    id: "conference",
    image: conference,
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
