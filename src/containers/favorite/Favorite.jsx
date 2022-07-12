import React from 'react';
import './favorite.css';
import Project from '../../components/project/Project';
import Arrow from '../../assets/Arrow.png';
import Radio from '../../assets/project/mobile/radio.png';
import Maintenance from '../../assets/project/mobile/maintenance.png';
import { Blob2_c } from '../../components';

const Favorite = (props) => {
  // console.log(props.data.attributes)
  return (
    <div className='refly__favorite section__padding' id='project'>
      <div className='refly__favorite-content'>
        <p className='refly__favorite-content__title'>{props.data.attributes.sub_title}</p>
        <h1 className='refly__favorite-content__heading'>{props.data.attributes.title}</h1>
        <div className='separator'>
          <span></span>
          <p className='refly__favorite-content__title'>{props.data.attributes.desc}</p>
        </div>
        <div className='refly__favorite-content__project'>
          {
            props.data.attributes.projects.data === null ? <p>No Project</p> : props.data.attributes.projects.data.map(dataProj => {
              return(
                <Project key={dataProj.id} data={dataProj} platform="MOBILE" heading="Radio PPI Redesign" description="There are several elements that need to be improvised in the design because it is not friendly, a media player that seems to be a media player patch and a broadcast schedule which is hardcoded embed from google sheet." image={Radio}/>
              )
            })
          }
          {/* <Project platform="MOBILE" heading="Maintence Mobile Apps" description="Maintence apps are applications that are used to maintain the internet and cable tv, the aim is to make it easier for users to report problems with the internet or cable tv, with an integrated chatbot easily making users more comfortable." image={Maintenance}/> */}
        </div>
        <div className='refly__favorite-content__more'>
          <p>View all projects</p>
          <img src={Arrow} />
        </div>
        <Blob2_c/>

      </div>
    </div>
  )
}

export default Favorite