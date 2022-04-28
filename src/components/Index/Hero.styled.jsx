import styled from "styled-components";
import { colors, fonts, spacing } from "../../App.styled";

export const HeroStyled = styled.header`
  width: 100vw;
  height: calc(100vh - ${spacing.space3});

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
