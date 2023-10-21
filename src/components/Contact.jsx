import React from 'react'
import  '../styles/Contact.css'

function Contact() {
  return (
    <>
    <div style={{width: '1440px', height: '693px', position: 'absolute', top:"5434px", left:"0px", background: '#181818'}}>

        <div style={{position:"absolute", top:"65px", left:"309px", color: 'white', fontSize: 40, fontFamily: 'Quicksand', fontWeight: '700', wordWrap: 'break-word'}}>We are the best choice for your shipments</div>

        <svg style={{position:"absolute", top:"45px", left:"256px"}} width="26" height="36" viewBox="0 0 26 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.7515 5.47888L15.8735 14.4249L24.6969 17.8782L15.7509 21.0002L12.2976 29.8236L9.17561 20.8776L0.352179 17.4243L9.29819 14.3023L12.7515 5.47888Z" fill="white"/>
        </svg>

        <svg style={{position:"absolute", top:"93px", left:"1158px"}} width="26" height="36" viewBox="0 0 26 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.7515 5.47888L15.8735 14.4249L24.6969 17.8782L15.7509 21.0002L12.2976 29.8236L9.17561 20.8776L0.352179 17.4243L9.29819 14.3023L12.7515 5.47888Z" fill="white"/>
        </svg>

        <img style={{position:"absolute", top:"296px", left:"929.06px"}} src="../assets/pointer.svg" alt="pointer" />

        <div className='' style={{width: '368px', height: '104px', position: 'absolute', top:"290px", right:"58px", background: '#7990FB', boxShadow: '0px 8px 41px rgba(0, 0, 0, 0.10)', borderRadius: 8, border: '1px white solid' }}>
            <img style={{width: 84, height: 69, left: 18, top: 18, position: 'absolute', background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)'}} src="../assets/contimage.png" />

            <div style={{left: 119, top: 12, position: 'absolute', color: 'white', fontSize: 24, fontFamily: 'Quicksand', fontWeight: '700', letterSpacing: 0.24, wordWrap: 'break-word'}}>Shanghai China</div>

            <div style={{width: 217, left: 119, top: 53, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Quicksand', fontWeight: '400', letterSpacing: 0.16, wordWrap: 'break-word'}}>358 East Daming Road Shanghai, Shanghai 200080</div>
        </div>

        <div id='contactworld' style={{width: 645, height: 383, left: 618, top: 224, position: 'absolute', opacity: 0.14, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}></div>

        <form style={{width: '423px', height: '418px', position: 'absolute', top:'201px', left:'58px', background: 'white', borderRadius: 10, overflow: 'hidden'}}>
            <input className='p-2' placeholder='Enter your email address' id='email' type="email" style={{width: 377, height: 52, left: 23, top: 55, position: 'absolute', borderRadius: 5, border: '1px #7990FB solid'}} />
            <label style={{left: 32, top: 25, position: 'absolute', color: '#27272A', fontSize: 16, fontFamily: 'Quicksand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}} htmlFor="email">Email</label>

            <textarea className='p-2' placeholder='Type your message here' id='message' type="textarea" style={{width: 377, height: 130, left: 23, top: 160, position: 'absolute', borderRadius: 5, border: '1px #7990FB solid', resize:"none"}} />
            <label style={{left: 32, top: 133, position: 'absolute', color: '#27272A', fontSize: 16, fontFamily: 'Quicksand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}} htmlFor="message">Message</label>

            <button style={{width: 377, paddingLeft: 30, paddingRight: 30, paddingTop: 16, paddingBottom: 16, left: 23, top: 330, position: 'absolute', background: '#7990FB', boxShadow: '0px 2px 20px rgba(121, 144, 251, 0.25)', borderRadius: 50, border: '1px #848586 solid', justifyContent: 'center', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
                <div style={{textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Quicksand', fontWeight: '500', wordWrap: 'break-word'}}>Send message</div>
            </button>

        </form>


    </div>
    </>
  )
}

export default Contact
