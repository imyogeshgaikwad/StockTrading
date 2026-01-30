import React from 'react';

function Education() {
    return ( 
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-6'>
                    <img style={{width:"80%"}} src='../media/education.svg'></img>

                </div>
                <div className='col-6 mt-5'> 
                    <h1 className='fs-2 mb-4'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href=''>Varsity <i class="fa-solid fa-arrow-right-long"></i> </a>
                     <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href=''>TradingQ&A  <i class="fa-solid fa-arrow-right-long"></i> </a>
                
                </div>

            </div>
        </div>
     );
}

export default Education;