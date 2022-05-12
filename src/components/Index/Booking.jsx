import React from "react";
import { BookingStyled } from "./Booking.styled";

const Booking = () => {
  return (
    <BookingStyled>
      <form>
        <div>
          <input type="text" placeholder="Destination" />
        </div>
        <div>
          <input type="text" placeholder="Check-In" />
        </div>
        <div>
          <input type="text" placeholder="Check-Out" />
        </div>
        <div>
          <input type="text" placeholder="Travellers" />
        </div>
      </form>
    </BookingStyled>
  );
};

export default Booking;
