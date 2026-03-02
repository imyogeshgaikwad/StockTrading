import React from "react";
function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg border-bottom " style={{backgroundColor:"#FFF"}}>
        <div className="container p-1">
          <a className="navbar-brand" href="#">
            <img src="..\media\logo.svg" alt="Logo" style={{width:"50%"}}></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form className="navbar-nav ms-auto mb-2 mb-lg-0" role="search">
                <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Signup
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Support
                </a>
              </li>
              
            </ul>
             
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

