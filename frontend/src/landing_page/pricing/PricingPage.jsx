import React from 'react';
import Hero from "../home/Hero"
import Brokerage from './Brokerage';
import OpenAccount from '../OpenAccount';

function PricingPage() {
    return (  
        <div>
            <Hero/>
            <OpenAccount/>
            <Brokerage/>
            <Team/>
        </div>
    );
}

export default PricingPage