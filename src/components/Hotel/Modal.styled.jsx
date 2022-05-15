import styled from "styled-components";
import { spacing } from "../../App.styled";

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
    width: 20%;
    min-height: 30%;
    background: white;
    z-index: 10;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: ${spacing.space4};

    h2 {
      margin-bottom: ${spacing.space2};
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
      }
    }
  }
`;
