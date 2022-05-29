import styled from "styled-components";
import { spacing, colors } from "../../App.styled";

export const InfoStyled = styled.div`
  margin: 25vh ${spacing.space13};
  h1,
  h2,
  h3 {
    font-weight: 300;
  }

  .info__title {
    text-align: center;
    margin-top: ${spacing.space13};
    margin-bottom: ${spacing.space6};
  }
  .info_section__enjoy {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: ${spacing.space8};

    .imagecont,
    .text {
      padding-left: 10%;
    }
  }

  .info_section__hotel {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .imagecont {
      padding-right: 10%;
    }

    .text {
      padding-right: 10%;
    }

    .text {
      justify-self: end;
    }
  }

  .imagecont {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .text {
    align-self: flex-end;
    max-width: 60%;

    hr {
      color: ${colors.green600};
      margin: ${spacing.space2} 0;
    }

    p {
      font-size: 16px;
    }
  }

  /* Media queries */
  @media screen and (max-width: 900px) {
    margin: 25vh ${spacing.space7};
    .info_section__enjoy {
      grid-template-columns: repeat(1, 1fr);

      .text,
      .imagecont {
        padding-left: 0;
      }
    }

    .info_section__hotel {
      grid-template-columns: repeat(1, 1fr);

      .imagecont {
        grid-row: 1;
      }

      .text {
        justify-self: start;
        padding: 0;
      }
    }

    .text {
      margin-top: ${spacing.space5};
    }
  }
`;
