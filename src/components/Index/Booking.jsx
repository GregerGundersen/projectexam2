import React from "react";
import { BookingStyled } from "./Booking.styled";
import Typeahead from "./Typeahead";

const Booking = () => {
  return (
    <BookingStyled>
      <Typeahead />
    </BookingStyled>
  );
};

export default Booking;
