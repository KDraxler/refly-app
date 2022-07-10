import React from 'react'
import './more.css';
import Mouse from '../../assets/Mouse.png'
import Dribbble from '../../assets/Dribbble.png'
import LinkedIn from '../../assets/LinkedIn.png'
import Instagram from '../../assets/Instagram.png'

const Icons = (props) => {
    return (
        <>
            <div className="refly__more-icon__bg">
                <a href={props.href}><img src={props.src} alt={props.alt} /></a>
            </div>
        </>
    )
}

const More = () => {
  return (
    <div className='refly__more'>
        <div className="refly__more-scroll">
            <div className="refly__more-scroll__blink">
                <Icons src={Mouse} alt="Mouse"/>
            </div>
            <p>Scroll down for more</p>
        </div>
        <div className="refly__more-social">
            <Icons src={Dribbble} alt="Dribbble" href="#"/>
            <Icons src={Instagram} alt="Instagram" href="#"/>
            <Icons src={LinkedIn} alt="LinkedIn" href="#"/>
        </div>
    </div>
  )
}

export default More