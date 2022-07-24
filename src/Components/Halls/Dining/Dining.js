import React from 'react'

import bigImg from '../../../Assets/images/weeding.jpg'
import smallImg1 from '../../../Assets/images/gallery8.jpg'
import smallImg2 from '../../../Assets/images/restaurant2.jpg'
import Slider from '../../Slider/Slider'
import AboutHall from '../AboutUs/index'
import './Dining.css'
import RoomBookingCard from '../../Booking/RoomBookingCard'
import HallSlider from '../HallsSlider/HallSlider'


const Dining = () => {
  return (
    <div>
        <Slider img1={bigImg} img2={smallImg1} img3={smallImg2} />
        <HallSlider />

    </div>
  )
}

export default Dining