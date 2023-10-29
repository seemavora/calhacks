import React from 'react'
import styles from '../styles/aboutUs.css';
import pic from "../assets/group.png";

function aboutUs() {
  return (
    <div>
        <h1 className='title' >
            Meet Our Team!
        </h1>
        <div className='picture'>
            <img src={pic}/>
        </div>
        <div className='item'>
            <b1 className='caption'>(From Left to Right): Yusrah Khan, Shruti Vora, Surabhi Gupta, Seema Vora</b1>
        </div>
    </div>
    
  )
}

export default aboutUs