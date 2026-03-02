import React from "react";
import { Link } from "react-router-dom";

function Education() {
  return (
    <div className="container mt-3">
      <div className="row align-items-center">
        <div className="col-6">
          <img 
            style={{ width: "80%" }} 
            src="../media/education.svg" 
            alt="Education illustration" 
          />
        </div>

        <div className="col-6 mt-5">
          <h1 className="fs-2 mb-4">Free and open market education</h1>
          
          <p>
            Varsity, the largest online stock market education book in the world 
            covering everything from the basics to advanced trading.
          </p>
          <Link to="#" className="d-block mb-3">
            Varsity <i className="fa-solid fa-arrow-right-long"></i>
          </Link>

          <p>
            TradingQ&A, the most active trading and investment community in India 
            for all your market-related queries.
          </p>
          <Link to="#" className="d-block">
            TradingQ&A <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Education;