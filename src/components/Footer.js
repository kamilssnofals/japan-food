import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a a href="https://vk.com/feed">
          <InstagramIcon />
        </a>
        <Link to="https://twitter.com/">
          <TwitterIcon />
        </Link>
        <Link to="https://facebook.com/">
          <FacebookIcon />
        </Link>
        <Link to="https://www.linkedin.com/">
          <LinkedInIcon />
        </Link>
      </div>
      <p> &copy; 2022 yukisushi.com</p>
    </div>
  );
}

export default Footer;
