import styled from "styled-components";
import { spacing, colors } from "../../App.styled";

export const StyledLogIn = styled.div`
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .login_container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    gap: ${spacing.space7};
    padding: ${spacing.space5};
    background-color: ${colors.light400};
    border-radius: 15px;
    transition: 0.25s;

    .message {
      width: 100%;
      text-align: center;
      color: white;
      padding: ${spacing.space1};
      transition: 1s;
      grid-column: 1 / span 2;
    }

    .error {
      background-color: red;
    }

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

        input,
        textarea {
          border-radius: 5px;
          border: 1px solid black;
          padding: 5px;
          resize: none;
        }

        input:focus,
        textarea:focus {
          outline: 1px solid ${colors.green400};
        }

        button {
          background-color: ${colors.green400};
          color: #fcfcfc;
          border: none;
          width: 50%;
          padding: ${spacing.space1};
          cursor: pointer;
          align-self: flex-end;
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
  @media screen and (max-width: 900px) {
    .login_container {
      grid-template-columns: repeat(1, 1fr);

      .message {
        grid-column: 1 / span 1;
      }
    }
  }
`;
