import styled from "styled-components";

export const BookingStyled = styled.div`
  width: 30%;
  max-height: 30%;
  background-color: white;
  margin: 0 30% 10% 0;
  /* position: absolute;
  top: 30%;
  right: 50%; */
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  /* Media queries */
  @media screen and (max-width: 1200px) {
    width: 80%;
    margin: 0 5% 5% 0;
  }
  @media screen and (max-width: 670px) {
    width: 100%;
    margin: 0;
  }
`;
