import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">

          <div className="col">
            <img 
              src="../media/logo.svg" 
              style={{ width: "50%" }} 
              alt="Zerodha logo"
            />
            <p>© 2010 - 2026, Zerodha Broking Ltd. All rights reserved</p>
          </div>

          <div className="col text-muted">
            <p>Account</p>
            <Link to="#">Open demat account</Link><br />
            <Link to="#">Minor demat account</Link><br />
            <Link to="#">NRI demat account</Link><br />
            <Link to="#">Commodity</Link><br />
            <Link to="#">Dematerialisation</Link><br />
            <Link to="#">Fund transfer</Link><br />
            <Link to="#">MTF</Link><br />
            <Link to="#">Referral program</Link><br />
          </div>

          <div className="col">
            <p>Support</p>
            <Link to="#">Contact us</Link><br />
            <Link to="#">Support portal</Link><br />
            <Link to="#">How to file a complaint?</Link><br />
            <Link to="#">Status of your complaints</Link><br />
            <Link to="#">Bulletin</Link><br />
            <Link to="#">Circular</Link><br />
            <Link to="#">Z-Connect blog</Link><br />
            <Link to="#">Downloads</Link><br />
          </div>

          <div className="col">
            <p>Company</p>
            <Link to="#">About</Link><br />
            <Link to="#">Philosophy</Link><br />
            <Link to="#">Press & media</Link><br />
            <Link to="#">Careers</Link><br />
            <Link to="#">Zerodha Cares (CSR)</Link><br />
            <Link to="#">Zerodha.tech</Link><br />
            <Link to="#">Open source</Link><br />
          </div>

          <div className="col">
            <p>Quick links</p>
            <Link to="#">Upcoming IPOs</Link><br />
            <Link to="#">Brokerage charges</Link><br />
            <Link to="#">Market holidays</Link><br />
            <Link to="#">Economic calendar</Link><br />
            <Link to="#">Calculators</Link><br />
            <Link to="#">Markets</Link><br />
            <Link to="#">Sectors</Link><br />
          </div>

        </div>

        <div className="mt-5 text-small text-muted" style={{ fontSize: "14px" }}>
          <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
        </div>

        <div className="links mt-3">
          <Link to="#">NSE</Link> |{" "}
          <Link to="#">BSE</Link> |{" "}
          <Link to="#">MCX</Link> |{" "}
          <Link to="#">Terms & conditions</Link> |{" "}
          <Link to="#">Privacy policy</Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;