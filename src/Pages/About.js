import React from "react";

//components
import Header from "../Components/Header/index";
import AboutUsGrid from "../Components/AboutUsGrid/AboutUsGrid";
import Footer from "../Components/Footer/index";
import Gallery from "../Components/Gallery/Gallery";
import Whatsapp from "../Components/ContactIcons/Whatsapp";
import Phone from "../Components/ContactIcons/Phone";

function About() {
  return (
    <>
      <Header />
      <Whatsapp />
      <Phone />
      <AboutUsGrid />
      <Gallery />
      <Footer />
    </>
  );
}

export default About;
