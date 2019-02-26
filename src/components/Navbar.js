import React from "react";
import Logo from "./Logo";
import NavbarLinkRow from "./NavbarLinkRow";

function Navbar() {
  return (
    <div id="navbar" style={{ boxShadow: "0 2px 0 0 var(--conpass-glacier)" }}>
      <Logo />
      <NavbarLinkRow />
    </div>
  );
}

export default Navbar;
