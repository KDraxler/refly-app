import React from 'react';
import './contact.css';
import { Blob4_c } from '../../components';

import Call from '../../assets/call.png'
const Contact = (props) => {
  // console.log(props.data)
  return (
    <div className='refly__contact section__padding'>
      <div className='refly__contact-content'>
        <p className='refly__contact-content__title'>{props.data.attributes.titile}</p>
        <h1 className='refly__contact-content__heading'>{props.data.attributes.description}</h1>
        <div className='refly__contact-content__btn'>
          <p>Contact me</p>
          <img src={Call} alt="" />
        </div>
      </div>
      <Blob4_c/>
    </div>
  )
}

export default Contact