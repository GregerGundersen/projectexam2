import styled from "styled-components";
import { colors, spacing } from "../../App.styled";

export const StyledContact = styled.div`
  width: 40vw;
  min-height: 60vh;
  margin: 10vh auto;
  padding: ${spacing.space7} ${spacing.space10};
  background-color: ${colors.light400};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  gap: ${spacing.space4};
  transition: 0.25s;

  &:focus-within {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transform: scale(1.025);
  }

  h2 {
    font-weight: 300;
  }

  .feedback_category {
    display: flex;
    /* justify-content: space-between; */
    gap: ${spacing.space7};

    button {
      background: none;
      border: 1px solid black;
      border-radius: 5px;
      padding: ${spacing.space1};

      &:hover {
        cursor: pointer;
      }

      * {
        font-size: 2rem;
      }
    }

    #bug {
      color: #bb1e1e;
    }

    #idea {
      color: #e9c60f;
    }

    #feedback {
      color: #474141;
    }
  }

  .feedback_message {
    input {
      border-radius: 5px;
      border: 1px solid black;
      padding: 5px;
    }

    input:focus {
      outline: 1px solid ${colors.green400};
      /* outline-offset: 12px; */
    }

    #email {
      grid-area: email;
    }

    #name {
      grid-area: name;
    }

    #message {
      grid-area: message;
      min-height: 10vh;
    }

    form {
      display: grid;
      gap: 10px;
      grid-template-areas:
        "name email"
        "message message";
    }
  }
`;
