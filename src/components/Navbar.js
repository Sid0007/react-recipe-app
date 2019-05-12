import React from "react";
import logo from "../images/logor.svg";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-sm 
      navbar-light bg-light"
    >
      <Link to="/" className="navbar-band">
        <img src={logo} alt="logo" style={{maxHeight:"20px"}} />
        <span>RoopaDecor</span>
      </Link>
      <div className="collapse navbar-collapse show ml-sm-5">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/events">
              Events
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
