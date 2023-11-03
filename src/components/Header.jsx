import React from 'react'
import '../styles/Header.css'

function Header() {
  return (
    <>
    <div id='wrapper2' >
    {/* <div style={{minWidth:"max-content", maxWidth:"1782px", width:"1782px" ,background:"#FFFF",height:'898px', position: 'absolute', top:"150px", left:"0", display:"inline-flex", justifyContent:"center", alignItems:"center", overflow:"clip"}}> */}

    <div id='div1'></div>

    <img id='container-img' src="./assets/container.png"/>

    <div id='heading'>LOGISTICS</div>

    <div id='header-text'>The best ever support your logistics needs, we provide you with cutting edge logistics solution</div>

    <a id='get-started-btn2' href='/'>
        <div id='get-started-text2'>Get Started</div>
    </a>

    <a id='learn-more-btn' href='/' >
        <div id='learn-more-text' >Learn more</div>
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.43 6.42999L20.5 12.5L14.43 18.57" stroke="#7990FB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.5 12.5H20.33" stroke="#7990FB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </a>



    <div id='slider-wrapper' >
        <div id='cargo'>CARGO</div>

        <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 0L29.0912 18.121L48 23L29.0912 27.879L24 46L18.9088 27.879L0 23L18.9088 18.121L24 0Z" fill="white"/>
        </svg>

        <div id='tracking'>TRACKING</div>

        <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 0L29.0912 18.121L48 23L29.0912 27.879L24 46L18.9088 27.879L0 23L18.9088 18.121L24 0Z" fill="white"/>
        </svg>

        <div id='logistics'>LOGISTICS</div>

        <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 0L29.0912 18.121L48 23L29.0912 27.879L24 46L18.9088 27.879L0 23L18.9088 18.121L24 0Z" fill="white"/>
        </svg>

        <div id='custom'>CUSTOM</div>

        <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 0L29.0912 18.121L48 23L29.0912 27.879L24 46L18.9088 27.879L0 23L18.9088 18.121L24 0Z" fill="white"/>
        </svg>
    </div>

    <div id='header-sub-heading'>Efficient Logistics Solutions for Seamless Supply Chain Management</div>

</div>
    </>
  )
}

export default Header
