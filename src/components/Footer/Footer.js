import React from "react";
import { GitHub, Twitter } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <p>
          {" "}
          © Treasure 2022. All rights reserved. Site - Managed by Naman Jain .
        </p>

        <a
          href="https://github.com/Nmnjainsite"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub></GitHub>
        </a>

        <a
          href="https://twitter.com/NamanJa83726591"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter></Twitter>
        </a>
        <a
          href="https://www.linkedin.com/in/naman-jain-97382b231/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn></LinkedIn>
        </a>
        <a
          href="https://www.instagram.com/namanjain_321/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram></Instagram>
        </a>
      </footer>
    </>
  );
};

export default Footer;
