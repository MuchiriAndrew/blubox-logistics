import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Services from '../components/Services'
import Tracking from '../components/Tracking'
import WhyChoose from '../components/WhyChoose'
import People from '../components/People'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
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
      <Contact />
      <Footer />
    {/* </div> */}
    </>
  )
}

export default Home
