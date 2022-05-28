import styled from "styled-components";
import { spacing, colors, fonts } from "../../App.styled";
import { Link } from "react-router-dom";

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
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      gap: ${spacing.space3};
      margin: ${spacing.space4} 0;
      padding: ${spacing.space2};
      transition: 0.2s ease-in-out;

      &:hover {
        border-left: 2px solid ${colors.green400};
      }
    }

    .hotel_image {
      width: 100%;
      margin: auto;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    .hotel_info {
      width: 100%;

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
  @media screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin: 10vh ${spacing.space7};

    .hotels_filters {
      display: flex;
      margin: auto;
      gap: ${spacing.space4};
    }

    .hotels {
      max-width: 100%;

      .hotel {
        grid-template-columns: repeat(1, 1fr);

        .hotel_image {
          height: 200px;
        }
      }
    }
  }
`;

export const StyledHotelLink = styled(Link)`
  align-self: end;
  justify-self: end;

  button {
    background-color: ${colors.green400};
    padding: ${spacing.space1} ${spacing.space2};
    border: none;
    cursor: pointer;
    color: white;
    width: 15ch;
  }

  @media screen and (min-width: 1000px) {
    grid-column: 1 / span 2;
  }
`;
