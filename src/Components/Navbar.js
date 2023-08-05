import React from 'react';
import { Link } from 'react-router-dom';
import "../navbar.css";

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="navbar-brand">
            TravelMedia.in
          </Link>
        </div>
        <div className="navbar-center">
          <div className="nav-icons-wrapper">
            <div className="nav-icons-container">
              <Link to="/" className="nav-icon">
                <i className="fa fa-home"></i>
              </Link>
              <Link to="/" className="nav-icon">
                <i className="fa fa-bell"></i>
              </Link>
              <Link to="/" className="nav-icon">
                <i className="fa fa-save"></i>
              </Link>
              <Link to="/" className="nav-icon">
                <i className="fa fa-user"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
