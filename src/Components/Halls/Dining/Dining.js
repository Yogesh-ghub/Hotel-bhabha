import React from 'react'

import banquet from '../../../Assets/images/weeding.jpg'
import dining from '../../../Assets/images/dining/restaurant2.jpg'
import conference from '../../../Assets/images/conference/DSC00816 Large.jpeg'
import Slider from '../../Slider/Slider'
import AboutHall from '../AboutUs/index'
import './Dining.css'
import RoomBookingCard from '../../Booking/RoomBookingCard'
import HallSlider from '../HallsSlider/HallSlider'


const Dining = () => {
  return (
    <div>
        <Slider img1={dining} img2={banquet} img3={conference} />
        <HallSlider />

    </div>
  )
}

export default Dining