import React from "react";
import hero from "../../media/hotel_header.jpg";
import { HeroStyled } from "./Hero.styled";
import Booking from "./Booking";

const Hero = () => {
  return (
    <HeroStyled>
      <img src={hero} alt="Hotel pool with blue water and shining sun" />
      <Booking />
    </HeroStyled>
  );
};

export default Hero;
