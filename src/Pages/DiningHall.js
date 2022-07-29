import React from "react";
import Dining from "../Components/Halls/Dining/Dining";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CardSlider from "../Components/CardSlider/CardSlider";
import img1 from "../Assets/images/gallery8.jpg";

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
      <Dining />
      <CardSlider array={array} divHeading="Meetings & Celebrations" />
      <Footer />
    </div>
  );
};

export default DiningHall;
