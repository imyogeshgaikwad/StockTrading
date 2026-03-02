import React from 'react';
import { Link } from "react-router-dom";


function Pricing() {
    return ( 
       <div className='container p-5'>
        <div className='row'>
            <div className='col-4'>
                <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                  <Link to=''> See pricing <i className="fa-solid fa-arrow-right-long"></i> </Link>
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