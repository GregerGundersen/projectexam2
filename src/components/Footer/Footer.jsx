import React from "react";
import { FooterStyled } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer_logo">
        <h2>Holidaze</h2>
        <h3>Hotels & Vacations</h3>
      </div>
      <div className="footer_links">
        <div className="footer_links__contact">
          <h2>Contact Us</h2>
          <div className="footer_links__contact socials">
            <i>Facebook Logo HERE</i>
            <i>IG Logo HERE</i>
            <i>TWITTER Logo HERE</i>
          </div>
          <a>mail@holidaze.com</a>
        </div>
        <div className="footer_links__helpful">
          <h2>Helpful Links</h2>
          <a>About Us</a>
          <a>Contact</a>
          <button>Book</button>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
