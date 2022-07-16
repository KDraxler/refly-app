import React, { useState, useEffect } from 'react';
import { moreAPI } from '../../api/dataAPI';
import './more.css';

const More = () => {
    const [moreData, setMoreData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        moreAPI().find().then((res) => {
            setMoreData(res.data);
            setLoading(false)
        })
    },[])
    if(loading) return <h1>Loading</h1> 
    return (
        <div className='refly__more'>
            <div className="refly__more-scroll">
                <div className="refly__more-scroll__blink">
                    <div className="refly__more-icon__bg">
                        <a href="#"><img src={moreData.attributes.icon.data.attributes.url} alt="mouse" /></a>
                    </div>
                </div>
                <p>{moreData.attributes.desc}</p>
            </div>
            <div className="refly__more-social">
                {
                    moreData.attributes.links.data === null ? <p>No links</p> : moreData.attributes.links.data.map(link => {
                        return(
                            <div key={link.id} className="refly__more-icon__bg">
                                <a href={link.attributes.link}><img src={link.attributes.image.data.attributes.url} alt={link.attributes.title} /></a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default More