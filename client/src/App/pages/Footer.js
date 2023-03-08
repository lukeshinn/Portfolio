import React from "react";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <p>© 2023 Luke Shinn </p>
      <div class="social-media">
        <BsGithub />
        <BsLinkedin />
        <BsInstagram />
      </div>
    </footer>
  );
};

export default Footer;
