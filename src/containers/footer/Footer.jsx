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
    }) 
  },[])
  
  if(loading) return <h1>Loading</h1>
  // console.log(footerData)  
  return (
    <div className='refly__footer section__padding'>
      <div className='refly__footer-content'>
        <div className='refly__footer-content__home'>
          <div className='refly__footer-content__home-logo'>
            <img src={Logo} alt="DesignbyRefly" />
            <p>Designbyrefly</p>
          </div>
          <p className='refly__footer-content__home-desc'>{footerData.attributes.description}</p>
        </div>
        <div className='refly__footer-content__navigation'>
          <h2 className='refly__footer-content__navigation-title'>Navigation</h2>
          <div className='refly__footer-content__navigation-content'>
            {
              footerData.attributes.menus.data === null ? <p>No data</p> : footerData.attributes.menus.data.map(menu => {
                return(
                  <a href="#"><p>{menu.attributes.title}</p></a>
                )
              })
            }
            {/* <a href=""><p>Home</p></a>
            <a href=""><p>About Us</p></a>
            <a href=""><p>Project</p></a>
            <a href=""><p>Contact Us</p></a> */}
          </div>
        </div>
        <div className='refly__footer-content__social'>
          <h2 className='refly__footer-content__navigation-title'>Social Media</h2>
          <div className='refly__footer-content__navigation-content'>
            {
              footerData.attributes.links.data === null ? <p>No data</p> : footerData.attributes.links.data.map(link => {
                return(
                  <a href={link.attributes.link}><p>{link.attributes.title}</p></a>
                )
              })
            }
           
          </div>
        </div>
      </div>
      
      <p className='refly__footer-copyright'>© Designed by Refly. All rights reserved</p>
    </div>
  )
}

export default Footer