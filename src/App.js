import React, { useEffect, useState } from 'react'
import {About, Contact, Exploration, Footer, Header, Favorite, Services} from './containers';
import { Navbar_c_new, hello } from './components';
import './App.css';
import {
  headerAPI, 
  aboutAPI, 
  favoriteAPI
} from './api/dataAPI'



const App = () => {
  // console.log(hello().testing)
  const [headerData, setHeaderData] = useState(null)
  const [aboutData, setAboutData] = useState(null)
  const [favoriteData, setFavoriteData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    
    const promiseHeader = headerAPI().filter('home')
    const promiseAbout = aboutAPI().find()
    const promiseFavorite = favoriteAPI().find()

    const allPromise = [
      promiseHeader, 
      promiseAbout,
      promiseFavorite
    ]

    Promise.all(allPromise).then(
      ([resHeader, resAbout, resFavorite]) => {
        setHeaderData(resHeader.data)
        setAboutData(resAbout.data)
        setFavoriteData(resFavorite.data)
        setLoading(false)
    })
  }, [])

  if(loading) return <h1>Loading</h1> 
  return (
    <div className='App'>
        <Navbar_c_new/>
        <Header  data={headerData} />
        <About data={aboutData} />
        <Favorite data={favoriteData} /> 
        {/* <Exploration description="Exploration Design"/> */}
        {/* <Services title="Services" heading="What i can do for you"/> */}
        {/* <Contact title="Contact us" heading="Interested in working together with us? we’ll surely you how me turn your idea into amazing design."/> */}
      {/* <div className='refly__bg'>  */}
        {/* <Footer/> */}
      {/* </div> */}

        
    </div> 
  )
}

export default App