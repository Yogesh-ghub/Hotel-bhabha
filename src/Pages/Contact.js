import React from "react";

//components
import ContactUs from "../Components/Contact";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
import Header from "../Components/Header/index";
import Whatsapp from "../Components/ContactIcons/Whatsapp";
import Phone from "../Components/ContactIcons/Phone";

function Contact() {
  return (
    <>
      <Header />
      <Whatsapp />
      <Phone />
      <ContactUs />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
