import React from 'react';
import './about.css';
import Kiply from '../../assets/Kips.png'
import api from '../../api';
import config from '../../config/config';



const About = (props) => {
  const description = props.data.attributes.description.split("\n\n");
  // console.log(props.data)
  return (
    <div className='refly__about section__padding' id='about' >
      <div className='refly__about-content' >
        <p className='refly__about-content__title'>{props.data.attributes.sub_title}</p>
        <h1 className='refly__about-content__heading'>{props.data.attributes.title}</h1>
        {
          description.length === 0 ? <p>No Description</p> : description.map(desc => {
            return(
              <p className='refly__about-content__description' key={Object.keys(desc)}>{desc}</p>
            )
          })
        }
      </div>
      <div className='refly__about-image'>
        <img src={props.data.attributes.image.data.attributes.formats.large.url} alt="Refly" />
        {/* {console.log(config.apiURL+props.data.attributes.image.data.attributes.formats.large.url)} */}
      </div>
    </div>
  )
}

export default About