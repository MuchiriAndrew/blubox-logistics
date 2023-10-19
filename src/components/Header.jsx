import React from 'react'

function Header() {
  return (
    <>
    <div style={{width: '100%', background:"#FFFFFF",height:'898px', position: 'absolute', top:"150px", left:"0", display:"inline-flex", overflow:"hidden"}}>

    <div style={{width: 1104, height: 264, left: 678, top: 466, position: 'absolute', background: '#EDF0FF', borderRadius: 440}}></div>

    <img className='img-fluid' style={{width: 735, height: 532, left:608, top: 212, position: 'absolute'}} src="./assets/container.png"/>

    <div style={{left: "50px", top: '0px', position: 'absolute', textAlign: 'center', color: '#7990FB', fontSize: 250, fontFamily: 'Satoshi', fontWeight: '900', wordWrap: 'break-word'}}>LOGISTICS</div>

    <div style={{width: 488, left: 68, top: 492, position: 'absolute', color: '#292D32', fontSize: 20, fontFamily: 'Quicksand', fontWeight: '400', wordWrap: 'break-word'}}>The best ever support your logistics needs, we provide you with cutting edge logistics solution</div>

    <div style={{paddingLeft: 30, paddingRight: 30, paddingTop: 16, paddingBottom: 16, left: 68, top: 576, position: 'absolute', background: '#7990FB', boxShadow: '0px 2px 20px rgba(121, 144, 251, 0.25)', borderRadius: 50, border: '1px #848586 solid', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
        <div style={{textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Quicksand', fontWeight: '500', wordWrap: 'break-word'}}>Get Started</div>
    </div>

    <div style={{left: 257, top: 592, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 5, display: 'inline-flex'}}>
        <div style={{textAlign: 'center', color: '#7990FB', fontSize: 20, fontFamily: 'Quicksand', fontWeight: '500', wordWrap: 'break-word'}}>Learn more</div>
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.43 6.42999L20.5 12.5L14.43 18.57" stroke="#7990FB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.5 12.5H20.33" stroke="#7990FB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>



    <div style={{ paddingLeft: 53, paddingRight: 53, paddingTop: 36, paddingBottom: 36, left: 0, top: 746, position: 'absolute', background: '#181818', justifyContent: 'flex-start', alignItems: 'center', gap: 42, display: 'inline-flex'}}>
        <div style={{textAlign: 'center', color: '#FFD1FA', fontSize: 64, fontFamily: 'Quicksand', fontWeight: '700', wordWrap: 'break-word'}}>CARGO</div>

        <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 0L29.0912 18.121L48 23L29.0912 27.879L24 46L18.9088 27.879L0 23L18.9088 18.121L24 0Z" fill="white"/>
        </svg>

        <div style={{textAlign: 'center', color: '#FFAB53', fontSize: 64, fontFamily: 'Quicksand', fontWeight: '700', wordWrap: 'break-word'}}>TRACKING</div>

        <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 0L29.0912 18.121L48 23L29.0912 27.879L24 46L18.9088 27.879L0 23L18.9088 18.121L24 0Z" fill="white"/>
        </svg>

        <div style={{textAlign: 'center', color: 'white', fontSize: 64, fontFamily: 'Quicksand', fontWeight: '700', wordWrap: 'break-word'}}>LOGISTICS</div>

        <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 0L29.0912 18.121L48 23L29.0912 27.879L24 46L18.9088 27.879L0 23L18.9088 18.121L24 0Z" fill="white"/>
        </svg>

        <div style={{textAlign: 'center', color: '#B9C5FF', fontSize: 64, fontFamily: 'Quicksand', fontWeight: '700', wordWrap: 'break-word'}}>CUSTOM</div>

        <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 0L29.0912 18.121L48 23L29.0912 27.879L24 46L18.9088 27.879L0 23L18.9088 18.121L24 0Z" fill="white"/>
        </svg>
    </div>

    <div style={{width: 712, left: 68, top: 362, position: 'absolute', color: '#292D32', fontSize: 40, fontFamily: 'Quicksand', fontWeight: '700', wordWrap: 'break-word'}}>Efficient Logistics Solutions for Seamless Supply Chain Management</div>

</div>
    </>
  )
}

export default Header
