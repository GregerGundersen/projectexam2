import styled from "styled-components";
import { spacing, colors } from "../../App.styled";

export const StyledDetails = styled.div`
  margin: 0 ${spacing.space13};
  display: grid;
  grid-template-columns: 1fr 1fr;

  .hotel_image {
    width: 100%;
    height: 60vh;
    grid-column: 1/3;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .hotel_info {
    h2 {
      color: ${colors.green400};
      font-weight: 400;
      font-size: 2rem;
      margin: ${spacing.space3} 0 5px 0;
    }

    span {
      color: ${colors.green400};
      font-size: 0.9rem;
    }

    p {
      max-width: 50ch;
      margin-top: ${spacing.space2};
    }
  }

  button {
    background-color: ${colors.green400};
    color: white;
    width: 120px;
    height: 40px;
    border: none;
    margin-top: ${spacing.space3};
    justify-self: end;
    cursor: pointer;
  }

  /* Media queries */
  @media screen and (max-width: 750px) {
    margin: 0 ${spacing.space5};
    .hotel_info {
      grid-column: 1/3;
    }
    button {
      grid-column: 2/3;
    }
  }
`;
