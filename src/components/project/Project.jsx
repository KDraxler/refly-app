import React from 'react';
import './project.css';
import Arrow from '../../assets/Arrow.png';

const Project = (props) => {
  console.log(props.data.attributes)
  return (
    <div className='refly__project'>
      <div className='refly__project-content'>
        <div className='refly__project-content__platform'>
          <p>{props.platform}</p>
        </div>
        <h1 className='refly__project-content__heading'>{props.data.attributes.title}</h1>
        <p className='refly__favorite-content__desc'>{props.data.attributes.description}</p>
        <div className='refly__project-content__btn'>
          <p>See project</p>
          <img src={Arrow} />
        </div>
      </div>
      <div className='refly__project-content__image'>
        <img src={props.image}  />
      </div>
    </div>
  )
}

export default Project