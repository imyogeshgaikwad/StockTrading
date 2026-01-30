import React from 'react';

function Pricing() {
    return ( 
       <div className='container p-5'>
        <div className='row'>
            <div className='col-4'>
                <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                  <a href=''> See pricing <i class="fa-solid fa-arrow-right-long"></i> </a>
            </div>
            <div className='col-3'></div>
            <div className='col-5'>
                <div className='row text-center'>
                    <div className='col p-2'>
                        <img className='mb-3' src='..\media\pricing-eq.svg'></img>
                        <br/>
                        <p>Free account opening</p>
                    </div><div className='col p-2'>
                        <img className='mb-3' src='..\media\pricing-eq.svg'></img>
                        <br/>
                        <p>Free equity delivery
and direct mutual funds</p>
                    </div><div className='col p-2'>
                        <img className='mb-3' src='..\media\pricing-eq.svg'></img>
                        <br/>
                        <p>Intraday and
F&O</p>
                    </div>
                    <div className='col'></div>
                </div>
            </div>

        </div>
       </div>
     );
}

export default Pricing;