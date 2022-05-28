import styled from "styled-components";
import { spacing, colors, fonts } from "../../App.styled";

export const StyledFeedback = styled.div`
  min-width: 40%;
  padding: ${spacing.space2};
  background-color: ${colors.light400};

  h2 {
    font-weight: 400;
  }

  img {
    width: 100px;
    height: 100px;
  }

  .temporary_centered {
    p {
      color: red;
      font-family: ${fonts.Raleway};
      margin: ${spacing.space1};
    }

    img {
      width: 100px;
      height: 100px;
    }
  }
  #error {
    animation: 0.35s ease-out 0s 1 slideUp;
  }

  .feedback_container {
    overflow: scroll;
    max-height: 80vh;

    .feedback_container__item {
      border-bottom: 1px solid ${colors.green400};
      margin: ${spacing.space2} 0;
      padding: ${spacing.space1} ${spacing.space1} ${spacing.space1} 0;

      .feedback_container__flex {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: ${spacing.space1};

        h3 {
          font-weight: 300;
        }

        p {
          color: ${colors.dark600};
        }
      }
    }
  }
`;
