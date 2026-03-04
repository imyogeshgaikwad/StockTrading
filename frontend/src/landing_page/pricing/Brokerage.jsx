import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-5">
          <a href="" style={{ textDecoration: "none" }}>
            {" "}
            <h3 className="fs-5">Brokerage Calculator</h3>
          </a>
               <ul className="text-muted " style={{textAlign:"left", lineHeight:"2.5"}}>
            <li>Stock brokers can accept securities as margin from clients only by way of pledge in the depository system w.e.f. September 1, 2020.</li>

<li>Update your mobile number & e-mail ID with your stock broker/depository participant and receive OTP directly from depository on your email id and/or mobile number to create pledge.</li>

<li>Pay 20% upfront margin of the transaction value to trade in cash market segment.</li>

<li>Investors may please refer to the Exchange's Frequently Asked Questions (FAQs) issued vide notice no. 20200731-7 (BSE) and circular no. NSE/INSP/45191 (NSE) dated July 31, 2020 and 20200831-45 (BSE) and NSE/INSP/45534 (NSE) dated August 31, 2020 and other guidelines issued from time to time in this regard.</li>

<li>Check your Securities/MF/Bonds in the consolidated account statement issued by NSDL/CDSL every month.</li>
          </ul>
        </div>

        <div className="col-4 p-5">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of Charges</h3>{" "}
          </a>
     
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
