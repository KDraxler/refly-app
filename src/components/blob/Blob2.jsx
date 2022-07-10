import React from 'react';
import './blob.css'

const Blob2 = () => {
  return (
    <>
        <svg id="gl3" className="glow" width="426" height="767" viewBox="0 0 426 767" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="col3" gradientTransform="rotate(125)">
                <stop offset='10%' stop-color='#0000bd'>
                    <animate attributeName="stop-color" values="#0000bd;#db472a;#0000bd" dur="3.5s" repeatCount="indefinite"></animate>
                </stop>
               
                <stop offset='100%' stop-color='#5300ab'></stop>
            </linearGradient>
        </defs>
        <path d="M317.167 0.827013C457.82 0.827006 443.402 643.671 373.945 746.726C268.106 827.27 249.315 641.827 108.661 641.827C-31.9924 641.827 5.16114 406.622 5.16114 278.976C5.16113 151.33 176.513 0.827019 317.167 0.827013Z" />
      </svg> 
    </>
  )
}

export default Blob2