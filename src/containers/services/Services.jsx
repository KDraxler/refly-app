import React from 'react';
import './services.css';
import {Offer_c} from '../../components';
import Figma from '../../assets/figma.png';

const Services = (props) => {
  return (
    <div className='refly__services section__padding'>
      <div className='refly__services-content'>
        <p className='refly__services-content__title'>{props.title}</p>
        <h1 className='refly__services-content__heading'>{props.heading}</h1>
        <div className='refly__services-content__offer'>
          <Offer_c image={Figma} title="Website Design" description="Engaging and stunning designs of website crafted with Figma and prototyping using Principle."/>
          <Offer_c image={Figma} title="Feed Design" description="Engaging and stunning designs of Instagram Feed crafted with Figma or Adobe Photoshop."/>
          <Offer_c image={Figma} title="Mobile Design" description="Engaging and stunning designs of mobile apps crafted with Figma."/>
        </div>
      </div>
    </div>
  )
}

export default Services