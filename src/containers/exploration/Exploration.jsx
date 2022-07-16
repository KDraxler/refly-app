import React from 'react';
import './exploration.css';
import Arrow from '../../assets/Arrow.png';
import {Blob3_c} from '../../components'


const Exploration = (props) => {
  // console.log(props.data.attributes)
  return (
    <div className='refly__exploration section__padding'>
      <div className='separator'>
        <span></span>
        <p className='refly__exploration-title separator'>{props.data.attributes.desc}</p>
      </div>
      <Blob3_c/>
      <div className='refly__exploration-content'>
        {
          props.data.attributes.explores.data === null ? <p>No Data</p> : props.data.attributes.explores.data.map(dataExp => {
            return(
              <a href={dataExp.attributes.link} key={dataExp.id}><img src={dataExp.attributes.image.data.attributes.formats.medium.url} alt="Image" /></a>
            )
          })
        }
      </div>
      <div className='refly__exploration-more'>
          <p>View all exploration</p>
          <img src={Arrow} />
        </div>
    </div>
  )
}

export default Exploration