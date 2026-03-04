import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="support">
      <div className="p-5 mt-5 mb-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>

      <div className=" row p-5 mx">
        <div className=" col-6  ">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg.how to activate F&O"></input>
          <a href="">1. Track account opening </a>
          <a href="">2. Track segment activation</a>
          <a href="">3. Intraday margins</a>
          <a href="">4. Kite user manual</a>
          <a href="">5. Learn how to create a ticket</a>
        </div>
        <div className=" col-6  ">
          <h1>Featured </h1>
          <ol>
            <li>
              <a href="">Surveillance measure on scrips - March 2026</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages and Square-off timings</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
