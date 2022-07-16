import React from 'react';
import './services.css';
import {Offer_c} from '../../components';

const Services = (props) => {
  // console.log(props.data)
  return (
    <div className='refly__services section__padding'>
      <div className='refly__services-content'>
        <p className='refly__services-content__title'>{props.data.attributes.sub_title}</p>
        <h1 className='refly__services-content__heading'>{props.data.attributes.title}</h1>
        <div className='refly__services-content__offer'>
          {
            props.data.attributes.serves.data === null ? <p>No Service</p> : props.data.attributes.serves.data.map(dataServe => {
              return(
                <Offer_c key={dataServe.id} data={dataServe} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Services