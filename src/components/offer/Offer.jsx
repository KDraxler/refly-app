import React from 'react';
import './offer.css';

const Offer = (props) => {
  // console.log(props.data)
  return (
    <div className='refly__offer'>
      <img src={props.data.attributes.image.data.attributes.formats.thumbnail.url}  />
      <h2>{props.data.attributes.title}</h2>
      <p>{props.data.attributes.description}</p>
    </div>
  )
}

export default Offer