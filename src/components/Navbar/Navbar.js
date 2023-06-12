import React from "react";
import "./Navbar.sass";
import { Nav } from "react-bootstrap";

function Navbar() {
  return (
    <Nav className="Navbar">
      <Nav.Item>
        <Nav.Link href="statement">Table of request</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="map">Map</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
