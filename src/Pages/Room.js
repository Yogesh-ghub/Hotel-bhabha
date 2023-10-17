import React from 'react'
import Header from "../Components/Header/index";
import Footer from "../Components/Footer";
import RoomOverview from "../Components/Rooms";
import Facilities from "../Components/Facilities";
import RoomSlider from "../Components/RoomSlider/RoomSlider";
import { useParams } from 'react-router-dom'
import Whatsapp from "../Components/ContactIcons/Whatsapp";
import Phone from "../Components/ContactIcons/Phone";
import execBanner from '../Assets/images/Executive-room/DSC00799.jpg' ;
import sliderImg2 from '../Assets/images/Executive-room/DSC00795.jpg' ;
import sliderImg3 from '../Assets/images/Executive-room/DSC00793.jpg' ;
import superiorBanner from '../Assets/images/Superior-room/DSC00763.jpg' ;
import superiorSlider2 from '../Assets/images/Superior-room/DSC00762.jpg' ;
import superiorSlider3 from '../Assets/images/Superior-room/DSC00764.jpg' ;

import superAcBanner from '../Assets/images/Super-ac/DSC00777.jpg'
import superSlider2 from '../Assets/images/Super-ac/DSC00773.jpg'
import superSlider3 from '../Assets/images/Super-ac/super-img.png'

const ExecutiveRoom = {
  id: "executive-room",
  title: "Executive Room",
  description: "Executive room are well furnished and equipped with all modern amenities. This room is equipped with a air-conditioner, wardrobe, LCD TV, and attached bathroom.",
  bannerImg: execBanner,
  sliderImg1: execBanner,
  sliderImg2: sliderImg2,
  sliderImg3: sliderImg3
}

const superiorRoom = {
  id: "superior-room",
  title: "Superior Room",
  description: "Superior Room are clean and well furnished. we offer rooms equipped with modern amenities. This room is equipped with a ceiling fan, wardrobe, flat-screen TV, and attached bathroom.",
  bannerImg: superiorBanner,
  sliderImg1: superiorBanner,
  sliderImg2: superiorSlider2,
  sliderImg3: superiorSlider3
}
const superRoom = {
  id: "super-room",
  title: "Super AC Room",
  description: "This room fully air conditioned family room is comfortable with a nice environment. Enjoy your stay full value of money. Clean and hygienic stay. Extra mattress is provided on additional charges and on request.",
  bannerImg: superAcBanner,
  sliderImg1: superAcBanner,
  sliderImg2: superSlider2,
  sliderImg3: superSlider3
}

const Room = () =>{


  const { id } = useParams();

  const renderElement = ( () =>{
    if(id === 'super-ac-room')
      return <RoomOverview details={superRoom} />

    else if(id === 'superior-room')
      return <RoomOverview details={superiorRoom} />

    else if(id === 'executive-room')
      return <RoomOverview details={ExecutiveRoom} />

    
  })

  return (
    <div>
        <Header /> 
        {
          (renderElement())
        } 
        <Whatsapp />
        <Phone />
        <Facilities />
        <RoomSlider />
        <Footer />
    </div>
  )
}

export default Room