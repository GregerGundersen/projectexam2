import React from "react";
import { FooterStyled, StyledFooterLogo } from "./Footer.styled";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Footer = () => {
  const [auth] = useContext(AuthContext);

  return (
    <FooterStyled>
      <StyledFooterLogo to="/" className="footer_logo">
        <h2>Holidaze</h2>
        <h3>Hotels & Vacations</h3>
      </StyledFooterLogo>
      <div className="footer_links">
        <div className="footer_links__contact">
          <h2>Contact Us</h2>
          <div className="footer_links__contact__socials">
            <BsFacebook size="1.5em" className="fb" />
            <BsInstagram size="1.5em" className="ig" />
            <BsTwitter size="1.5em" className="tw" />
          </div>
          <a href="mailto:mail@holidaze.com">mail@holidaze.com</a>
        </div>
        <div className="footer_links__helpful">
          <h2>Helpful Links</h2>
          <div className="footer_links__helpful__links">
            <Link to="/aboutus">About Us</Link>
            <Link to="contact">Contact</Link>
            <Link to={auth ? "/admin/" : "/login/"}>
              {auth ? "Admin" : "Log In"}
            </Link>
            <button>Book</button>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
