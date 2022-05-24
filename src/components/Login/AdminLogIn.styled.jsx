import styled from "styled-components";
import { spacing, colors } from "../../App.styled";

export const StyledLogIn = styled.div`
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .login_container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${spacing.space4};
    min-width: 40vw;
    min-height: 30vh;
    background-color: #fcfcfc;
    border-radius: 15px;
    transition: 0.25s;

    &:focus-within {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transform: scale(1.025);
    }

    .login_form {
      h1 {
        color: ${colors.green600};
        margin-bottom: ${spacing.space4};
      }
      form {
        display: flex;
        flex-direction: column;
        gap: ${spacing.space1};

        button {
          background-color: ${colors.green400};
          color: #fcfcfc;
          border: none;
          width: 50%;
          padding: ${spacing.space1};
          cursor: pointer;
        }
      }
    }
    .login_info {
      h2 {
        font-size: 1.3rem;
        font-weight: 500;
      }
      ul {
        list-style: none;

        li {
          padding: 8px 0;
          svg {
            color: ${colors.green400};
          }
        }
      }
    }
  }
`;
