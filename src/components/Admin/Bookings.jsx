import React from "react";
import { BookingStyled } from "./Bookings.styled";
import { apiUrl, apiBookings } from "../../utilities/api";
import { useQuery } from "react-query";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import spinner from "../../media/Spinner-1s-200px.svg";

const Bookings = () => {
  const [auth] = useContext(AuthContext);

  // Fetch bookings
  const { isLoading, error, data } = useQuery("bookings", () =>
    axios
      .get(apiUrl + apiBookings, {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      })
      .then((res) => res.data.data)
  );

  if (isLoading) {
    return (
      <BookingStyled>
        <img src={spinner} alt="Loading indicator" />
      </BookingStyled>
    );
  }

  if (error) {
    return (
      <BookingStyled>
        <p>{error.message}</p>
      </BookingStyled>
    );
  }

  return (
    <BookingStyled>
      <h2>Bookings</h2>
      <div className="bookings_container">
        {data.map((booking, idx) => {
          // console.log(booking.attributes.bookingrequest);
          return (
            <div key={idx} className="booking_container__item">
              <div className="booking_container__flex">
                <h3>{booking.attributes.name}</h3>
                <p>{booking.attributes.email}</p>
              </div>
              <p>{booking.attributes.bookingrequest}</p>
            </div>
          );
        })}
      </div>
    </BookingStyled>
  );
};

export default Bookings;
