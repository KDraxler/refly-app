import React from 'react';
import './exploration.css';
import Image from '../../assets/explore/Image.png';
import Image1 from '../../assets/explore/Image-1.png';
import Image2 from '../../assets/explore/Image-2.png';
import Image3 from '../../assets/explore/Image-3.png';
import Image4 from '../../assets/explore/Image-4.png';
import Image5 from '../../assets/explore/Image-5.png';
import Arrow from '../../assets/Arrow.png';
import {Blob3_c} from '../../components'


const Exploration = (props) => {
  return (
    <div className='refly__exploration section__padding'>
      <div className='separator'>
        <span></span>
        <p className='refly__exploration-title separator'>{props.description}</p>
      </div>
      <Blob3_c/>
      <div className='refly__exploration-content'>
        <a href=""><img src={Image} alt="Image" /></a>
        <a href=""><img src={Image1} alt="Image" /></a>
        <a href=""><img src={Image2} alt="Image" /></a>
        <a href=""><img src={Image3} alt="Image" /></a>
        <a href=""><img src={Image4} alt="Image" /></a>
        <a href=""><img src={Image5} alt="Image" /></a>
      </div>
      <div className='refly__exploration-more'>
          <p>View all exploration</p>
          <img src={Arrow} />
        </div>
    </div>
  )
}

export default Exploration