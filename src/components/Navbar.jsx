import React from 'react'

function Navbar() {
  return (
    <>
    <div style={{width:"1328px", height:"70px", position:"absolute",top:"20px", left:"58px", alignItems: 'center', gap: '191px', display: 'inline-flex'}}>

      <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: '12px', display: 'flex' }}>
        <div style={{ width: '70px', height: '70px', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
          <a href='/' style={{ width: '70px', height: '70px', position: 'relative', textDecoration:"none" }}>
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M58.9465 22.8096L36.4881 35.8179C35.584 36.3429 34.4465 36.3429 33.5131 35.8179L11.0548 22.8096C9.45063 21.8763 9.04229 19.6888 10.2673 18.3179C11.1131 17.3554 12.0756 16.5679 13.0965 16.0138L28.9048 7.26375C32.2881 5.36792 37.7715 5.36792 41.1548 7.26375L56.9631 16.0138C57.984 16.5679 58.9465 17.3846 59.7923 18.3179C60.959 19.6888 60.5506 21.8763 58.9465 22.8096Z" fill="#7990FB"/>
            <path d="M33.3389 41.2413V61.133C33.3389 63.3496 31.093 64.808 29.1097 63.8455C23.1014 60.8996 12.9805 55.3871 12.9805 55.3871C9.4222 53.3746 6.50553 48.2996 6.50553 44.1288V29.0788C6.50553 26.7747 8.92636 25.3163 10.9097 26.4538L31.8805 38.6163C32.7555 39.1705 33.3389 40.1622 33.3389 41.2413Z" fill="#7990FB"/>
            <path d="M36.6634 41.2413V61.133C36.6634 63.3496 38.9092 64.808 40.8926 63.8455C46.9009 60.8996 57.0217 55.3871 57.0217 55.3871C60.5801 53.3746 63.4967 48.2996 63.4967 44.1288V29.0788C63.4967 26.7747 61.0759 25.3163 59.0926 26.4538L38.1217 38.6163C37.2467 39.1705 36.6634 40.1622 36.6634 41.2413Z" fill="#7990FB"/>
            </svg>
          </a>
        </div>
        <a href='/' style={{ textAlign: 'center', color: 'black', fontSize: '24px', fontFamily: 'Quicksand', fontWeight: 700, wordWrap: 'break-word', textDecoration:"none" }}>BluBox Logistics</a>
      </div>

      <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: '80px', display: 'flex' }}>
        <div style={{ textAlign: 'center', color: 'black', fontSize: '18px', fontFamily: 'Quicksand', fontWeight: 700, wordWrap: 'break-word' }}> <a style={{textDecoration:"none", color:"unset"}} href="">Home</a> </div>
        <div style={{ textAlign: 'center', color: 'black', fontSize: '18px', fontFamily: 'Quicksand', fontWeight: 400, wordWrap: 'break-word' }}> <a style={{textDecoration:"none", color:"unset"}} href="">About us</a></div>
        <div style={{ textAlign: 'center', color: 'black', fontSize: '18px', fontFamily: 'Quicksand', fontWeight: 400, wordWrap: 'break-word' }}> <a style={{textDecoration:"none", color:"unset"}} href="">Service</a></div>
        <div style={{ textAlign: 'center', color: 'black', fontSize: '18px', fontFamily: 'Quicksand', fontWeight: 400, wordWrap: 'break-word' }}> <a style={{textDecoration:"none", color:"unset"}} href="">Track</a></div>
        <div style={{ textAlign: 'center', color: 'black', fontSize: '18px', fontFamily: 'Quicksand', fontWeight: 400, wordWrap: 'break-word' }}> <a style={{textDecoration:"none", color:"unset"}} href="">Contact</a></div>
        <a href='/' style={{ textDecoration:"none", color:"unset", padding: '16px 30px', background: '#7990FB', borderRadius: '50px', border: '1px solid #848586', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '20px', display: 'flex' }}>
          <div style={{ textAlign: 'center', color: 'white', fontSize: '20px', fontFamily: 'Quicksand', fontWeight: 500, wordWrap: 'break-word' }}>Get Started</div>
        </a>
      </div>

    </div>
    </>
  )
}

export default Navbar
