import React, { useState, useEffect } from 'react';
import './footer.css';
import Logo from '../../assets/logoAja.png'
import { footerAPI } from '../../api/dataAPI';

const Footer = () => {
  const[footerData, setFooterData] = useState(null);
  const[loading, setLoading] = useState(true);
  
  useEffect(() => {
    footerAPI().find().then((res) => {
      setFooterData(res.data);
      setLoading(false);
      console.log(res.data)  
    })
  },[])
  
  if(loading) return <h1>Loading</h1>
  return (
    <div className='refly__footer section__padding'>
      <div className='refly__footer-content'>
        <div className='refly__footer-content__home'>
          <div className='refly__footer-content__home-logo'>
            <img src={Logo} alt="DesignbyRefly" />
            <p>Designbyrefly</p>
          </div>
          <p className='refly__footer-content__home-desc'>Welcome to my Portfolio and I hope we can work together</p>
        </div>
        <div className='refly__footer-content__navigation'>
          <h2 className='refly__footer-content__navigation-title'>Navigation</h2>
          <div className='refly__footer-content__navigation-content'>
            <a href=""><p>Home</p></a>
            <a href=""><p>About Us</p></a>
            <a href=""><p>Project</p></a>
            <a href=""><p>Contact Us</p></a>
          </div>
        </div>
        <div className='refly__footer-content__social'>
          <h2 className='refly__footer-content__navigation-title'>Social Media</h2>
          <div className='refly__footer-content__navigation-content'>
            <a href="#"><p>Dribble</p></a>
            <a href="#"><p>Instagram</p></a>
            <a href="#"><p>LinkedIn</p></a>
            <a href="#"><p>Twitter</p></a>
          </div>
        </div>
      </div>
      
      <p className='refly__footer-copyright'>© Designed by Refly. All rights reserved</p>
    </div>
  )
}

export default Footer