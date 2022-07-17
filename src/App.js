import React, { useEffect, useState } from 'react'
import {About, Contact, Exploration, Footer, Header, Favorite, Services} from './containers';
import { Navbar_c_new, hello } from './components';
import './App.css';
import {
  headerAPI, 
  aboutAPI, 
  favoriteAPI,
  explorationAPI,
  serviceAPI,
  contactUsAPI,
} from './api/dataAPI'



const App = () => {
  // console.log(hello().testing)
  const [headerData, setHeaderData] = useState(null)
  const [aboutData, setAboutData] = useState(null)
  const [favoriteData, setFavoriteData] = useState(null)
  const [explorationData, setExplorationData] = useState(null)
  const [serviceData, setServiceData] = useState(null)
  const [contactUsData, setContactUsData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    
    const promiseHeader = headerAPI().filter('home')
    const promiseAbout = aboutAPI().find()
    const promiseFavorite = favoriteAPI().find()
    const promiseExploration = explorationAPI().find()
    const promiseService = serviceAPI().find()
    const promiseContactUs = contactUsAPI().find()

    const allPromise = [
      promiseHeader, 
      promiseAbout,
      promiseFavorite,
      promiseExploration,
      promiseService,
      promiseContactUs
    ]

    Promise.all(allPromise).then(
      ([resHeader, resAbout, resFavorite, resExploration, resService, resContactUs]) => {
        setHeaderData(resHeader.data)
        setAboutData(resAbout.data)
        setFavoriteData(resFavorite.data)
        setExplorationData(resExploration.data)
        setServiceData(resService.data)
        setContactUsData(resContactUs.data)
        setLoading(false)
    })
  }, [])

  if(loading) return <h1>Loading</h1> 
  return (
    <div className='App'>
        <Navbar_c_new/>
        <Header  data={headerData} />
        <About data={aboutData} />
        {/* <Favorite data={favoriteData} />  */}
        {/* <Exploration data={explorationData}/> */}
        {/* <Services data={serviceData} /> */}
        {/* <Contact data={contactUsData} /> */}
      {/* <div className='refly__bg'> 
        <Footer/>
      </div> */}

        
    </div> 
  )
}

export default App