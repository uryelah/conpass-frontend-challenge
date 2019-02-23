import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

function NavbarLinkRow() {
  return (
    <div>
      <Router>
        <Link to="/">Link</Link>
      </Router>
      <Router>
        <Link to="/">Link</Link>
      </Router>
      <Router>
        <Link to="/">Link</Link>
      </Router>
    </div>
  );
}

export default NavbarLinkRow;
