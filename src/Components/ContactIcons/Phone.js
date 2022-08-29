import React from 'react'
import phone from '../../Assets/images/phone.png'
import './index.css'
const Phone = () => {
  return (
    <div className='phone-icon'>
        <a className='' href='tel:+91-281-2220861'><img src={phone} alt="" width='50px' /></a>
    </div>
  )
}

export default Phone
