import React from 'react';
import './footer2.css';
import logo from '../images/logoKoral.png'

export default function Footer2() {
    return (
        <div className='footer2'>
            <div style={{textAlign: 'center',marginTop: '30px'}}>Something went wrong. Please re-authorize Instagram on Appearance {'>'} Koral Options {'>'} Social Networks {'>'} Instagram and clicking on Authorize Instagram.</div>
            <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center'}} ><img src={logo}></img><br/>
            <div className='social'>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/facebook-f.png"/>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png"/>
            <img src="https://img.icons8.com/material-outlined/24/000000/instagram-new--v1.png"/>
            <img src="https://img.icons8.com/material-outlined/24/000000/pinterest--v1.png"/>
            <img src="https://img.icons8.com/ios/24/000000/globe--v1.png"/></div>
            <div>Koral © 2021 by Upper</div></div>
        </div>
    )
}
