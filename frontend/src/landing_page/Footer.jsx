import React from 'react';

function Footer() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <img src='../media/logo.svg' style={{width:"50%"}}></img>
                </div>
                <div className='col'>
                    <p>Account</p>
                <a href=''>Open demat account</a>    
                <a href=''>Minor demat account</a>    
                <a href=''> NRI demat account</a>   
                <a href=''> Commodity</a>   
                <a href=''> Dematerialisation</a>   
                <a href=''> Fund transfer</a>   
                <a href=''> MTF</a>   
                <a href=''> Referral program</a>   
                </div>
                <div className='col'>
                    <p>Support</p>
                </div>
                <div className='col'>
                    <p>Compeny</p>
                </div>
                <div className='col'>
                    <p>Quick links</p>
                </div>

            </div>
        </div>
     );
}

export default Footer;
