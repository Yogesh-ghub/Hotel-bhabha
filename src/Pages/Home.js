import React from "react";

//components
import Header from "../Components/Header";
import Slider from "../Components/Slider/Slider";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";
import AboutUs from "../Components/AboutUs";
import CardSlider from "../Components/CardSlider/CardSlider";

import Facilities from '../Components/Facilities'
import slideimg1 from "../Assets/images/sliderimg-1.jpeg";
import slideimg2 from "../Assets/images/sliderimg-2.jpeg";
import slideimg3 from "../Assets/images/sliderimg-3.jpeg";


function Home() {
  return (
    <div> 
      <Header />
      <Slider img1={slideimg1} img2={slideimg2} img3={slideimg3} />
      <AboutUs />
      <CardSlider />
      <Facilities />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
