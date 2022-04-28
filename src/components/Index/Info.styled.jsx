import styled from "styled-components";
import { spacing, fonts } from "../../App.styled";

export const InfoStyled = styled.div`
  margin: 0 ${spacing.space13};
  h1,
  h2,
  h3 {
    font-family: ${fonts.Alice};
  }

  .imagecont {
    width: 40vw;
    height: 40vw;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .info__title {
      text-align: center;
      margin-top: ${spacing.space13};
      margin-bottom: ${spacing.space6};
    }

    .info_section__enjoy {
      display: flex;
      justify-content: space-around;
    }
  }

  .info_section__hotel {
    display: flex;
    justify-content: space-around;
  }
`;
