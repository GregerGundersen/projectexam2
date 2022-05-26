import styled from "styled-components";
import { colors, spacing } from "../../App.styled";

export const BookingStyled = styled.div`
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

  .bookings_container {
    overflow: scroll;
    max-height: 80vh;

    .booking_container__item {
      border-bottom: 1px solid ${colors.green400};
      margin: ${spacing.space2} 0;
      padding: ${spacing.space1} ${spacing.space1} ${spacing.space1} 0;

      .booking_container__flex {
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
