import React from 'react';
import './footer1.css';

export default function Footer1() {
    return (
        <div className='footer1'>
            <div className='f1top'>
                <div className='f1card'>
                    <div className='f1img'><img src='https://raw.githubusercontent.com/amitjakhu/dripicons/b8b7035c6c0f34035b0a78af4b393a3fd8628c38/SVG/phone.svg'></img></div>
                    <div className='f1head'>CALL US</div>
                    <div className='f1desc'>PT (+351) 729 133 194<br/>AU (+18) 833 841 442</div>
                </div>
                <div className='f1card'>
                    <div className='f1img'><img src='https://raw.githubusercontent.com/amitjakhu/dripicons/b8b7035c6c0f34035b0a78af4b393a3fd8628c38/SVG/mail.svg'></img></div>
                    <div className='f1head'>EMAIL US</div>
                    <div className='f1desc'>marketing@example.com<br/>hello@example.com</div>
                </div>
                <div className='f1card'>
                    <div className='f1img'><img src='https://raw.githubusercontent.com/amitjakhu/dripicons/b8b7035c6c0f34035b0a78af4b393a3fd8628c38/SVG/location.svg'></img></div>
                    <div className='f1head'>OUR HOME</div>
                    <div className='f1desc'>PO Box 16122 Collins Street West<br/>Victoria 8007 Australia</div>
                </div>
            </div>
            <div className='f1bottom'>INSTAGRAM @UPPER</div>
        </div>
    )
}
