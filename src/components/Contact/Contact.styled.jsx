import styled from "styled-components";
import { colors, spacing } from "../../App.styled";

export const StyledContact = styled.div`
  min-width: 40%;
  max-width: 60%;
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
  }

  .feedback_message {
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
        "message message"
        "button button";

      button {
        grid-area: button;
        width: 6rem;
        height: 3rem;
        border: none;
        background-color: ${colors.green400};
        color: white;
        justify-self: end;
        cursor: pointer;
        margin-bottom: ${spacing.space2};
      }
    }
  }
  .message {
    width: 100%;
    text-align: center;
    color: white;
    padding: ${spacing.space1};
    transition: 1s;
  }

  .error {
    background-color: red;
  }

  .success {
    background-color: green;
  }

  @media screen and (max-width: 900px) {
    padding: ${spacing.space3} ${spacing.space5};
    min-width: 60%;
    max-width: 80%;

    .feedback_category {
      gap: ${spacing.space4};
    }

    .feedback_message {
      form {
        grid-template-areas:
          "name"
          "email"
          "message"
          "button";
      }
    }
  }
`;
