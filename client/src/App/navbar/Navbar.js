import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import SiteLogo from "../../public/logo.png";

import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

const SocialIcons = [
  {
    id: 1,
    icon: <BsGithub size={25} />,
    url: "https://github.com/lukeshinn",
  },
  {
    id: 2,
    icon: <BsLinkedin size={25} />,
    url: "https://www.linkedin.com/in/luke-shinn-baa8a066/",
  },
  {
    id: 3,
    icon: <BsInstagram size={25} />,
    url: "https://www.instagram.com/shinn_bone1/",
  },
];

// const MenuItems = [
//   {
//     path: "/",
//     title: "Home",
//   },
//   {
//     path: "/about",
//     title: "About",
//   },
//   {
//     path: "/todolist",
//     title: "TodoList",
//   },
//   {
//     path: "/graphql",
//     title: "GraphQL",
//   },
//   {
//     path: "/api",
//     title: "API",
//   },
// ];

const NavBar = () => {
  // const listMenuItems = MenuItems.map((menuItem, index) => (
  //   <Link key={index} to={menuItem.path} class="navbar-item">
  //     {menuItem.title}
  //   </Link>
  // ));

  const socialMedia = SocialIcons.map((socialIcon, index) => (
    <a
      key={socialIcon.id}
      href={socialIcon.url}
      target="_blank"
      rel="noreferrer"
    >
      {socialIcon.icon}
    </a>
  ));

  return (
    <header className="navbar" role="navigation">
      <img className="site-logo" src={SiteLogo} alt={"Luke Shinn Logo"} />
      <div className="flex">
        <ThemeToggle />
        <div className="social-media">{socialMedia}</div>
      </div>
    </header>
  );
};

export default NavBar;
