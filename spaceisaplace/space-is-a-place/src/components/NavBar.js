import React from "react";
// Only import Link when you need to navigate to internal routes
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="logo">
        {/* Internal link */}
        <Link className="nav-link" to="/">
          Pearl
        </Link>
      </div>
      <div className="nav-links">
        <div className="nav-item">
          {/* Internal link */}
          <Link className="nav-link" to="/test1">
            Draw Here!
          </Link>
        </div>
        <div className="nav-item">
          {/* External link */}
          <a 
            className="nav-link" 
            href="https://www.bristolmuseums.org.uk/wp/wp-content/uploads/2020/08/BD12665-Gallery-Guide-Feb-2020-D3.pdf"
            target="_blank" // This will open the link in a new tab
            rel="noopener noreferrer" // Security feature for opening links in a new tab
          >
            Gallery Guide PDF
          </a>
        </div>
        <div className="nav-item">
          {/* External link */}
          <a 
            className="nav-link2" 
            href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__ZutpINUMjFLUkdQSVc4R1pIUjZHVlk2WVJMNjJFQS4u"
            target="_blank" // This will open the link in a new tab
            rel="noopener noreferrer" // Security feature for opening links in a new tab
>
            FEEDBACK! 
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
