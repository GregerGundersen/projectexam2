import styled from "styled-components";
import { colors, spacing } from "../../App.styled";
import { Link } from "react-router-dom";

export const NavigationStyled = styled.div`
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  justify-items: center;
  align-items: center;
  margin: ${spacing.space2} ${spacing.space13};

  .active {
    text-decoration: underline;
    text-decoration-color: ${colors.green400};
  }

  .navigation_right {
    grid-column: 2 / span 1;
  }

  /* Media queries */
  @media screen and (max-width: 820px) {
    margin: ${spacing.space2} ${spacing.space6};

    .navigation_left__name {
      font-size: 28px;
    }
    .navigation_left__title {
      font-size: 14px;
    }

    .navigation_right {
      display: none;
    }

    .navigation_mobile {
      grid-column: 1 / span 2;
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-top: 5%;
      gap: 1rem;
    }

    .mobile_nav {
      padding: 1rem;
      cursor: pointer;
      grid-column: 2 / span 1;

      svg {
        font-size: 2rem;
      }
    }
  }

  @media screen and (min-width: 820px) {
    .mobile_nav {
      display: none;
    }
  }
`;

export const LinkStyled = styled(Link)`
  color: ${colors.dark600};
  font-size: 18px;
  font-weight: 300;
  padding: ${spacing.space1} ${spacing.space2};
  text-decoration: none;
`;

export const StyledHeaderLink = styled(Link)`
  grid-column: 1 / span 1;
  text-decoration: none;

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
