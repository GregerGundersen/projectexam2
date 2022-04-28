import React from "react";
import { NavigationStyled } from "./Navigation.styled";
import { LinkStyled } from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavigationStyled>
      <div className="navigation_left">
        <h1 className="navigation_left__name">Holidaze</h1>
        <h3 className="navigation_left__title">Hotels & Vacations</h3>
      </div>
      <nav className="navigation_right">
        <LinkStyled className="navigaiton_right__link" to="/">
          Home
        </LinkStyled>
        <LinkStyled className="navigaiton_right__link" to="/contact">
          Contact Us
        </LinkStyled>
        <LinkStyled className="navigaiton_right__link" to="/about">
          About
        </LinkStyled>
      </nav>
    </NavigationStyled>
  );
};

export default Navigation;
