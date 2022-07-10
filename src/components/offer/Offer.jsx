import React from 'react';
import './offer.css';

const Offer = (props) => {
  return (
    <div className='refly__offer'>
      <img src={props.image}  />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}

export default Offer