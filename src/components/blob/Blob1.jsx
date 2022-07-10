import React from 'react';
import './blob.css'

const Blob1 = () => {
  return (
    <>
        <svg id="gl2" className="glow" width="760" height="381" viewBox="0 0 760 381" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="col2" gradientTransform="rotate(125)">
                <stop offset='10%' stop-color='#0000bd'>
                    <animate attributeName="stop-color" values="#0000bd;#db472a;#0000bd" dur="3.5s" repeatCount="indefinite"></animate>
                </stop>
               
                <stop offset='100%' stop-color='#5300ab'></stop>
            </linearGradient>
        </defs>
        <path d="M759.309 283.034C759.309 410.626 116.465 397.547 13.4096 334.54C-67.1335 238.528 250.036 358.62 250.036 231.027C250.036 103.434 353.513 0 481.16 0C608.806 0 759.309 155.441 759.309 283.034Z"/>
      </svg> 
    </>
  )
}

export default Blob1