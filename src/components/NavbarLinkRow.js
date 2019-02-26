import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

function NavbarLinkRow() {
  return (
    <div id="navbar-links">
      <div className="link">
        <Router>
          <Link to="/">Link fake 1</Link>
        </Router>
      </div>
      <div className="link">
        <Router>
          <Link to="/">Link fake 2</Link>
        </Router>
      </div>
      <div className="link">
        <Router>
          <Link to="/">Link fake 3</Link>
        </Router>
      </div>
      <div className="link">
        <Router>
          <Link to="/">Link fake 4</Link>
        </Router>
      </div>
    </div>
  );
}

export default NavbarLinkRow;
