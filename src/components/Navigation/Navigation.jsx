import React, { useState } from "react";
import { NavigationStyled } from "./Navigation.styled";
import { LinkStyled } from "./Navigation.styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import { StyledHeaderLink } from "./Navigation.styled";

const Navigation = () => {
  // Mobile navigation toggler
  const [isOpen, setIsOpen] = useState(false);
  const isOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  const getWindowSize = () => {
    setIsOpen(window.innerWidth < 820);
  };

  window.addEventListener("resize", getWindowSize);

  // Get location/path for navigation styling
  const { pathname } = useLocation();

  return (
    <NavigationStyled>
      <StyledHeaderLink to="/" className="navigation_left">
        <h1 className="navigation_left__name">Holidaze</h1>
        <h3 className="navigation_left__title">Hotels & Vacations</h3>
      </StyledHeaderLink>
      <div className="mobile_nav">
        <GiHamburgerMenu onClick={isOpenHandler} />
      </div>
      {/* <nav className="mobile_links"></nav> */}
      <nav className={isOpen ? "navigation_mobile" : "navigation_right"}>
        <LinkStyled
          className={
            pathname === "/"
              ? "navigaiton_right__link active"
              : "navigaiton_right__link"
          }
          to="/"
        >
          Home
        </LinkStyled>
        <LinkStyled
          className={
            pathname === "/hotels"
              ? "navigaiton_right__link active"
              : "navigaiton_right__link"
          }
          to="/hotels"
        >
          Hotels
        </LinkStyled>
        <LinkStyled
          className={
            pathname === "/contact"
              ? "navigaiton_right__link active"
              : "navigaiton_right__link"
          }
          to="/contact"
        >
          Contact Us
        </LinkStyled>
      </nav>
    </NavigationStyled>
  );
};

export default Navigation;
