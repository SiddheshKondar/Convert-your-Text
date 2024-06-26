import React from "react";
import { Link } from "react-router-dom";

export default function (props) {
  return (
    <>
<nav className={`navbar navbar-expand-lg navbar-${/*props.mode==="light"?"secondary":*/"dark"} bg-${/*props.mode==="light"?"secondary":*/"dark"}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">About </a>
        </li> */}
        
      </ul>
      <div className={`form-check form-switch text-${props.mode === "light"? "dark":"light"}`}>
  <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" style={{color:"white"}} htmlFor="flexSwitchCheckDefault">{props.switchbtn} </label>
</div>



    </div>
  </div>
</nav>


      
    </>
  );
}
