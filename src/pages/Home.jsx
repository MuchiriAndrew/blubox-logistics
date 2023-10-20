import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Services from '../components/Services'
import Tracking from '../components/Tracking'
import WhyChoose from '../components/WhyChoose'
import People from '../components/People'
import '../styles/Home.css'

function Home() {
  return (
    <>
    {/* <div id='wrapper'> */}
      <Navbar/>
      <Header/>
      <Services/>
      <Tracking />
      <WhyChoose />
      <People />
    {/* </div> */}
    </>
  )
}

export default Home
