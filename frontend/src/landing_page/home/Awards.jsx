import React from 'react';

export default function Awards () {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='../media/largestBroker.svg'></img>
                </div>
                <div className='col-6'>
                    <h1>Largest stock broker in India</h1>
                    <p>+2 million Zerodha clients contribute to over 15% of all volumes in India deily by trading and investing in : </p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                        <li><p>Future Options</p></li>
                        <li><p>Commodity derivatives </p></li>
                        <li><p>Currency derivatives</p></li>
                    </ul>
                                       </div>

                     <div className='col-6'>

                         <ul>
                        <li><p>Stocks and IPOs</p></li>
                        <li><p>Direct mutual fund </p></li>
                        <li><p>Bonds and Govt. securities </p></li>
                    </ul>
                    </div>
                                            <img src='../media/pressLogos.png'></img>

                    </div>
                    
                </div>

            </div>
        </div>
     );
}

