import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Services from '../components/Services'
import Tracking from '../components/Tracking'
import WhyChoose from '../components/WhyChoose'
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
    {/* </div> */}
    </>
  )
}

export default Home
