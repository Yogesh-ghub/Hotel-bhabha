import React from "react";

//components
import Header from "../Components/Header/index";
import Slider from "../Components/Slider/Slider";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";
import AboutUs from "../Components/AboutUs";
import HallAndDiningHome from "../Components/HallAndDiningHome";
import Amneties from "../Components/Hotel-amneties";
import RoomSlider from '../Components/RoomSlider/RoomSlider'
import slideimg1 from "../Assets/images/sliderimg-1.jpeg";
import slideimg2 from "../Assets/images/sliderimg-2.jpeg";
import slideimg3 from "../Assets/images/sliderimg-3.jpeg";
import Whatsapp from "../Components/ContactIcons/Whatsapp";
import Phone from "../Components/ContactIcons/Phone";

// const array = [
//   {
//     image: img1,
//     title: "title",
//     subTitle: "subtitle",
//     description: "Description"
//   },
//   {
//     image: img1,
//     title: "title",
//     subTitle: "subtitle",
//     description: "Description"
//   },
//   {
//     image: img1,
//     title: "title",
//     subTitle: "subtitle",
//     description: "Description"
//   },
// ]

function Home() {
  return (
    <div>
      {/* <AlertTop /> */}
      <Header />
      <Slider img1={slideimg1} img2={slideimg2} img3={slideimg3} />
      <Whatsapp />
      <Phone />
      <AboutUs />
      <RoomSlider />
      <HallAndDiningHome />
      <Amneties />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
