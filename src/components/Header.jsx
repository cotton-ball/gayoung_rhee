import React from "react";
import { Link } from "react-router-dom";

import "./header.modules.css";

function Header() {
  return (
    <header className="header">
      <Link className="home-link" to="/">
        <img src="/logo.png" alt="logo" className="header-logo" />
      </Link>
      <div className="link-box">
        <Link className="dogica" to="/About">about</Link>
        <Link className="dogica" to="/Works">works</Link>
        <Link className="dogica" to="/Text">text</Link>
      </div>
    </header>
  );
}

export default Header;
