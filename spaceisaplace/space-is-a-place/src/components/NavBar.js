import React from "react";
// Only import Link when you need to navigate to internal routes
import { Link } from "react-router-dom";

const navStyle = {
  marginRight: '20px',
  display: 'inline-block'
};

const navBarStyle = {
  textAlign: 'center'
};

const NavBar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link className="nav-link" to="/" style={navStyle}>
          Home
        </Link>
      </div>
      <div className="nav-links" style={navBarStyle}>
        <div className="nav-item" style={navStyle}>
          <Link className="nav-link" to="/test1">
            Draw Here!
          </Link>
        </div>
        <div className="nav-item" style={navStyle}>
          <a className="nav-link" href="https://www.bristolmuseums.org.uk/wp/wp-content/uploads/2020/08/BD12665-Gallery-Guide-Feb-2020-D3.pdf" target="_blank" rel="noopener noreferrer">
            Gallery Guide PDF
          </a>
        </div>
        <div className="nav-item">
          <a className="nav-link2" href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__ZutpINUMjFLUkdQSVc4R1pIUjZHVlk2WVJMNjJFQS4u" target="_blank" rel="noopener noreferrer">
            FEEDBACK!
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

