import React from "react";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

const SocialIcons = [
  {
    icon: <BsGithub size={25} />,
    url: "https://github.com/lukeshinn",
  },
  {
    icon: <BsLinkedin size={25} />,
    url: "https://www.linkedin.com/in/luke-shinn-baa8a066/",
  },
  {
    icon: <BsInstagram size={25} />,
    url: "https://www.instagram.com/shinn_bone1/",
  },
];

const Footer = () => {
  const socialMedia = SocialIcons.map((socialIcon, index) => (
    <a href={socialIcon.url} target="_blank" rel="noreferrer">
      {socialIcon.icon}
    </a>
  ));
  return (
    <footer>
      <h2 class="subtitle">© 2023 Luke Shinn </h2>
      <div class="social-media">{socialMedia}</div>
    </footer>
  );
};

export default Footer;
