import styled from "styled-components";
import { spacing, colors, fonts } from "../../App.styled";

export const StyledHotelsList = styled.div`
  margin: 10vh ${spacing.space13};
  display: flex;
  justify-content: center;
  gap: ${spacing.space13};

  /* Error and loading styles */
  @keyframes slideUp {
    0% {
      transform: translateY(10%);
      opacity: 0;
      scale: 0.75;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
      scale: 1;
    }
  }
  .temporary_centered {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    width: 50vw;

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

  /* Filter styles */
  .hotels_filters {
    h3 {
      color: ${colors.green400};
      font-weight: 300;
      margin: 15px 0 5px 0;
    }

    .hotels_filters__location,
    .hotels_filters__accommodation {
      display: flex;
      margin: 8px 0;
      gap: 10px;

      label {
        font-family: ${fonts.Raleway};
        font-size: 16px;
      }
    }
  }

  /* Hotel list styles */
  .hotels {
    max-width: 50vw;

    .hotel {
      display: flex;
      justify-content: space-between;
      gap: ${spacing.space4};
      margin: ${spacing.space4} 0;
      padding: ${spacing.space2};
      transition: 0.2s ease-in-out;

      &:hover {
        border-left: 2px solid ${colors.green400};
      }
    }

    .hotel_image {
      width: 100px;
      height: 100px;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    .hotel_info {
      width: 80%;

      h2 {
        color: ${colors.green400};
        font-weight: 300;
      }

      .hotel_info__location {
        color: ${colors.green400};
        font-family: ${fonts.Raleway};
        font-weight: 300;
        font-size: 14px;
        margin: 5px 0 10px 0;
      }
    }
  }
`;
