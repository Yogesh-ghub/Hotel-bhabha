import React from "react";

//components
import Header from "../Components/Header/index";
import Slider from "../Components/Slider/Slider";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";
import AboutUs from "../Components/AboutUs";
import CardSlider from "../Components/CardSlider/CardSlider";
import HallAndDiningHome from "../Components/HallAndDiningHome";
import Amneties from "../Components/Hotel-amneties";
import RoomSlider from '../Components/RoomSlider/RoomSlider'
import img1 from '../Assets/images/gallery8.jpg'
import slideimg1 from "../Assets/images/sliderimg-1.jpeg";
import slideimg2 from "../Assets/images/sliderimg-2.jpeg";
import slideimg3 from "../Assets/images/sliderimg-3.jpeg";

const array = [
  {
    image: img1,
    title: "title",
    subTitle: "subtitle",
    description: "Description"
  },
  {
    image: img1,
    title: "title",
    subTitle: "subtitle",
    description: "Description"
  },
  {
    image: img1,
    title: "title",
    subTitle: "subtitle",
    description: "Description"
  },
]

function Home() {
  return (
    <div>
      <Header />
      <Slider img1={slideimg1} img2={slideimg2} img3={slideimg3} />
      <AboutUs />
      <RoomSlider />
      <CardSlider array={array} />
      <HallAndDiningHome />
      <Amneties />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
