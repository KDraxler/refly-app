import React from 'react';
import './blob.css'

const Blob = () => {
  return (
    <>
        <svg id="gl1" className="glow" width="608" height="453" viewBox="0 0 608 453" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="col" gradientTransform="rotate(25)">
                <stop offset='10%' stop-color='#0000bd'>
                    <animate attributeName="stop-color" values="#0000bd;#db472a;#0000bd" dur="3s" repeatCount="indefinite"></animate>
                </stop>
               
                <stop offset='100%' stop-color='#5300ab'></stop>
            </linearGradient>
        </defs>
        <path d="M605.713 412.148C633.863 517.206 251.103 383.16 251.103 383.16C251.103 383.16 35.1207 349.751 6.97049 244.693C-21.1797 139.635 42.4814 31.2956 149.162 2.71068C255.842 -25.8742 577.563 307.09 605.713 412.148Z" />
      </svg> 
    </>
  )
}

export default Blob