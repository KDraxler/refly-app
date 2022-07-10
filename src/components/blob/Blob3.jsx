import React from 'react';
import './blob.css'

const Blob3 = () => {
  return (
    <>
        <svg id="gl4" className="glow" width="450" height="1094" viewBox="0 0 450 1094" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="col4" gradientTransform="rotate(125)">
                <stop offset='10%' stop-color='#0000bd'>
                    <animate attributeName="stop-color" values="#0000bd;#db472a;#0000bd" dur="3.5s" repeatCount="indefinite"></animate>
                </stop>
               
                <stop offset='100%' stop-color='#5300ab'></stop>
            </linearGradient>
        </defs>
        <path d="M80.9378 1094C-59.7158 1094 11.4807 116.156 80.9377 13.1006C186.777 -67.4426 54.3922 249.727 195.046 249.727C335.699 249.727 449.722 353.204 449.722 480.851C449.722 608.497 221.591 1094 80.9378 1094Z"/>
      </svg> 
    </>
  )
}

export default Blob3