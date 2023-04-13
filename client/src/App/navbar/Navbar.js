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
    path: "/todolist",
    title: "TodoList",
  },
  {
    path: "/graphql",
    title: "GraphQL",
  },
  {
    path: "/api",
    title: "API",
  },
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
