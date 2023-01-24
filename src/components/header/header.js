import React from "react";
import './header.scss';
import { Link } from "react-router-dom";
import headerLogo from '../../assets/logo.PNG';
import NavBar from "../navbar/navbar";
function Header() {
  return (
    <header className="header container-fluid">
      <div className="header-left col-md-3">
        <Link to="/" className="header-left-brandLink">
          <img
         
            src={headerLogo}
            alt="Header Logo"
            className="header-left-brandlogo"
          />
        </Link>
      </div>
      <div className="header-right col-md-9">
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
