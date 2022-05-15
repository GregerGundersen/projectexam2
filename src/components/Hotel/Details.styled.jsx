import styled from "styled-components";
import { spacing, colors } from "../../App.styled";

export const StyledDetails = styled.div`
  margin: 0 ${spacing.space13};
  display: grid;
  grid-template-columns: 1fr 1fr;

  .hotel_image {
    width: 100%;
    height: 50vh;
    border: 1px solid red;
    grid-column: 1/3;
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
      width: 70%;
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
`;
