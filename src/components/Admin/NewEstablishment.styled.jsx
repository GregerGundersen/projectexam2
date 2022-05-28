import styled from "styled-components";
import { spacing, colors } from "../../App.styled";

export const StyledNewEstablishment = styled.div`
  min-width: 80%;
  padding: ${spacing.space2};
  background-color: ${colors.light400};
  grid-column: 1 / span 1;

  h2 {
    font-weight: 400;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: ${spacing.space1};
    padding: ${spacing.space2} ${spacing.space2} ${spacing.space2} 0;

    input,
    textarea {
      border-radius: 5px;
      border: 1px solid black;
      padding: 5px;
      resize: none;

      &:focus {
        outline: 1px solid ${colors.green400};
      }
    }

    button {
      width: 6rem;
      height: 3rem;
      border: none;
      background-color: ${colors.green400};
      color: white;
      align-self: end;
      cursor: pointer;
    }

    .success {
      color: green;
    }

    .error {
      color: red;
    }
  }
`;
