import React, { useEffect, useState } from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar_new.css';
import Logo from '../../assets/Logo.png'
import Burger from '../../assets/menu-burger.png'
import Close from '../../assets/menu-close.png'
import Arrow from '../../assets/Arrow.png'

const Menu = () => (
  <>
    <p><a href="#Home">Home</a></p>
    <p><a href="#About">About me</a></p>
    <p><a href="#Project">Projects</a></p>
    <p><a href="#Contact">Contact us</a></p>
  </>
)

const Navbar_new = () => {
  const[toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='refly__navbar navbar__padding'>
      <div className='refly__navbar-links'>
        <div className='refly__navbar-links_logo'>  
          <img src={Logo} alt="Logo" />
        </div>
          <div className={ toggleMenu ? "refly__navbar-menu_bg-layer" : "" } ></div>
        <div className='refly__navbar-menu'>
          <div className="refly__navbar-menu_bg">
            <img className={toggleMenu ? "" : "none"} id='close' src={Close} onClick={() => {setToggleMenu(false)}}/>
            <img className={toggleMenu ? "none" : ""} id='burger' src={Burger} onClick={() => {setToggleMenu(true)}}/>
          </div>
        </div>
      </div>
      {toggleMenu &&(
        <div className="refly__navbar-menu_container">
          <div className="refly__navbar-menu_container-links">
            <Menu/>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar_new