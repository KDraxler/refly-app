import React, { useEffect, useState } from 'react';
import { Blob1_c, Blob_c, More_c } from '../../components';
import './header.css';

const Header = (props) => {
  // console.log(props.data.data) 
  return (
    <div className='refly__header section__padding' id='header'>
      <Blob_c />
      <div className="refly__header-content">
        <p className="refly__header-content__title">{props.data[0].attributes.title}</p>
        <h1 className="refly__header-content__heading">{props.data[0].attributes.description}</h1>
        <div className="refly__header-content__more">
          <More_c/>
          <Blob1_c/>
        </div>
      </div>
    </div>
  )
}

export default Header