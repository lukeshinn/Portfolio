import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import SiteLogo from "../../public/logo.png";

const MenuItems = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/list",
    title: "List",
  },
  // {
  //   path: "/contact",
  //   title: "Contact",
  // },
];

const NavBar = () => {
  const listMenuItems = MenuItems.map((menuItem, index) => (
    <Link key={index} to={menuItem.path} class="navbar-item">
      {menuItem.title}
    </Link>
  ));

  return (
    <nav class="navbar" role="navigation">
      <img className="site-logo" src={SiteLogo} alt={"Luke Shinn Logo"} />
      <div class="flex">
        <ThemeToggle />
        {listMenuItems}
      </div>
    </nav>
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

// <Navbar class="nav-bar">
//   <Container>
//     <Navbar.Brand href="#home">
//       <img className="site-logo" src={SiteLogo} alt={"Luke Shinn Logo"} />
//     </Navbar.Brand>
//     <Nav className="me-auto">
//       <Nav.Link as={Link} to="/">
//         Home
//       </Nav.Link>
//       <Nav.Link as={Link} to="/about">
//         About
//       </Nav.Link>
//       <Nav.Link as={Link} to="/list">
//         List
//       </Nav.Link>
//       <ThemeToggle themes="light" />
//     </Nav>
//   </Container>
// </Navbar>
