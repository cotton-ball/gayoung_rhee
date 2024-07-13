import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./header.modules.css";

function Header() {

  const location = useLocation();
  console.log(location.pathname);

  return (
    <header className="header">
      <Link className="home-link" to="/">
        <img src="/logo.png" alt="logo" className="header-logo" />
      </Link>
      <div className="link-box">
        <Link className={`dogica ${location.pathname === "/About" ? "link-active" : null}`} to="/About">about</Link>
        <Link className={`dogica ${location.pathname === "/Works" ? "link-active" : null}`} to="/Works">works</Link>
        <Link className={`dogica ${location.pathname === "/Text" ? "link-active" : null}`} to="/Text">text</Link>
      </div>
    </header>
  );
}

export default Header;
