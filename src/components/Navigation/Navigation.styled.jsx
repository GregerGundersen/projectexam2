import styled from "styled-components";
import { colors, spacing } from "../../App.styled";
import { Link } from "react-router-dom";

export const NavigationStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.space2};

  .navigation_left__name {
    color: ${colors.green600};
    font-weight: 300;
    font-size: 40px;
  }
  .navigation_left__title {
    color: ${colors.dark400};
    font-weight: 200;
    font-size: 20px;
  }
`;

export const LinkStyled = styled(Link)`
  color: ${colors.dark600};
  font-size: 18px;
  font-weight: 300;
  padding: ${spacing.space1} ${spacing.space2};
  text-decoration: none;
`;
