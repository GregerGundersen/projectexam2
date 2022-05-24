import styled from "styled-components";
import hero from "../../media/hotel_header.jpg";

export const HeroStyled = styled.header`
  width: 100%;
  height: 70vh;
  position: relative;
  background-image: url(${hero});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
