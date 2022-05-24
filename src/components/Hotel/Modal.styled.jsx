import styled from "styled-components";
import { spacing, colors } from "../../App.styled";

export const StyledModal = styled.div`
  .modal_background {
    backdrop-filter: blur(1px);
    width: 100vw;
    height: 100vh;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }

  /* Adds dark background to emphasize modal in FF as it does not support backdrop-filter */
  @-moz-document url-prefix() {
    .modal_background {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 30%;
    max-width: 80%;
    min-height: 30%;
    background: white;
    z-index: 10;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: ${spacing.space4};

    h2 {
      margin-bottom: ${spacing.space2};
      font-weight: 400;
    }

    form {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: ${spacing.space3};

      input,
      textarea {
        border-radius: 5px;
        padding: ${spacing.space1};
        border: 1px solid black;
        resize: none;
        max-width: 100%;

        &:focus {
          outline: 1px solid ${colors.green400};
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    .modal {
      form {
        display: flex;
        flex-direction: column;
      }
      min-width: 80%;
      max-width: 80%;
      padding: ${spacing.space1};
    }
  }
`;
