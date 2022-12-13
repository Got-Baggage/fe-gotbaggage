import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-container">
      <Link className="nav-link" to="/">
        <img
          className="nav-logo"
          src="/images/baggageLogo.png"
          alt="suitcase logo"
        />
      </Link>
      <div className="questions-container"></div>
    </div>
  );
}

export default Nav;
