
import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link className="nav-link" to="/">
            Pearl
        </Link>
      </div>
      <div className="nav-links">
        <div className="nav-item">
          <Link className="nav-link" to="/test1">
            Draw Here!
          </Link>
        </div>
        <div className="nav-item">
          {/* <Link className="nav-link" to="/canvas">
            Another!
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
