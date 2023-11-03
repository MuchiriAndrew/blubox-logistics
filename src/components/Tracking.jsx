import React from 'react'
import '../styles/Tracking.css'

function Tracking() {
  return (
    <>
    <div id='wrapper4'>
      <div id='tracking-heading'>Manage your shipment from anywhere in the world</div>

      <div id='phone-div'>
      <img id='outer-phone-img' src="./assets/outerphone.png" />
      <img id='iphone-screen-img' src="./assets/iPhone.png" />
      </div>

      <div id='box1' >
      <div id='box2'>

      <img id='map-img' src="../assets/map.png" />

      <svg id='tracking-circle' width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20.9244" cy="20.9244" r="20.9244" fill="#7990FB" fill-opacity="0.2"/>
      </svg>

      <svg id='inner-tracking-circle' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15" r="13.3307" fill="white" stroke="#D9D9D9" stroke-width="3.33864"/>
      <circle cx="14.9998" cy="15.0001" r="3.46154" fill="#7990FB"/>
      </svg>

      <img id='tracking-person-img' src="../assets/photo.svg" alt="" />

      <svg id='remainder-path' width="39" height="46" viewBox="0 0 39 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.83194 43.3067L12.9454 37.0294L2.83194 11.9201L27.9412 8.08398L33.8698 4.24785L37.7059 2.50415" stroke="#B8B8B8" stroke-width="4.45152" stroke-linejoin="round" stroke-dasharray="4.45 4.45"/>
      </svg>

      <svg id='tracking-path-done'  width="263" height="153" viewBox="0 0 263 153" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M253.876 58.4856V52.1725L260 41.5616L250.592 27.0687L256.579 10.2465L211.679 3L152.667 16.1989L96.3563 29.6567L88.9517 31.2095L79.9717 33.2799L63.044 37.6796L48.3278 41.5616L36.782 43.8908L54.3145 69.0644L3 83.7465L33.3611 125.155L42.3411 136.283L48.3278 143.271L52.1764 150L94.9384 135.766L93.6556 128.261" stroke="url(#paint0_linear_1_122)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
      <linearGradient id="paint0_linear_1_122" x1="92.5492" y1="157.851" x2="111.437" y2="20.2339" gradientUnits="userSpaceOnUse">
      <stop stop-color="#7990FB"/>
      <stop offset="1" stop-color="#7990FB" stop-opacity="0.17"/>
      </linearGradient>
      </defs>
      </svg>

      </div>
      </div>



      <div id='subheading1'>You can track your shipment real time</div>
      <div id='tracking-text1' >You can track your shipment real time by making use of our mobile application for easy and seamless tracking anywhere, anytime.</div>

      <a id='get-started-btn3' href='/' >
      <div id='get-started-text3'>Get started</div>
      </a>


      <div id='ipad-div'>
      <img id='outer-ipad-img' src="../assets/outeripad.png" />
      <img id='ipad-screen-img' src="../assets/iPad.png" />
      </div>

      <div id='subheading2' >Manage your shipments seamlessly and effortlessly</div>
      <div id='tracking-text2'>You can now view, manage and track your shipments seamlessly and effortlessly through your dashboard</div>

      <a id='get-started-btn4' href='/' >
      <div id='get-started-text4'>Get started</div>
      </a>
    </div>
    </>
  )
}

export default Tracking
