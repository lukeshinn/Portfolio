import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import SiteLogo from "../../public/logo.png";

const NavBar = () => {
  return (
    <Navbar class="nav-bar">
      <Container>
        <Navbar.Brand href="#home">
          <img className="site-logo" src={SiteLogo} alt={"Luke Shinn Logo"} />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/list">
            List
          </Nav.Link>
          <ThemeToggle themes="light" />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;

// const NavBar = () => {
//   return (
//     <div class="nav-list">
//       <Link to={"./"}>
//         <button variant="raised">To Home</button>
//       </Link>
//       <Link to={"./list"}>
//         <button variant="raised">To List</button>
//       </Link>
//       <Link to={"./about"}>
//         <button variant="raised">To About</button>
//       </Link>
//     </div>
//   );
// };
