import React, { useEffect, useState } from 'react'
import {About, Contact, Exploration, Footer, Header, Favorite, Services} from './containers';
import { Navbar_c_new, hello } from './components';
import './App.css';
import headerAPI from './api/headerAPI';
import aboutAPI from './api/aboutAPI';



const App = () => {
  // console.log(hello())
  const [header, setHeader] = useState(null)
  const [about, setAbout] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    
    const promiseHeader = headerAPI.filter('home')
    
    const promiseAbout = aboutAPI.find()

    const allPromise = [promiseHeader, promiseAbout]

    Promise.all(allPromise).then(
      ([resHeader, resAbout]) => {
        setHeader(resHeader.data)
        setAbout(resAbout.data)
        setLoading(false)
    })

  }, [])
  
  if(loading) return <h1>Loading</h1> 
  return (
    <div className='App'>
        <Navbar_c_new/>
        <Header  data={header} />
        <About data={about} />
        {/* <About about={[]} title="Proverb Don't Know Then Don't Love" heading="About Us" description={descAbout}/> */}
        {/* <Favorite title="Favorite" heading="Project Freelance & Exploration" description="Project Freelance"/>  */}
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