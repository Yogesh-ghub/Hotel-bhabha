import React from 'react'
import './index.css'

const Banner = (props) => {
  return (
    <div>
        <div className="room-banner" style={{backgroundImage: `url(${props.img})`}} >
            <div className="animated animatedFadeInUp fadeInUp">
            <h1>{props.title}</h1>

            <blockquote className="quote">
                "You kind of owe it to yourself to do all the things you've dreamed of."
            </blockquote>
            </div>
        </div>
    </div>
  )
}

export default Banner