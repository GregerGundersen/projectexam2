import React from "react";
import { StyledModal } from "./Modal.styled";
import { apiUrl, apiBookings } from "../../utilities/api";
import axios from "axios";

const Modal = ({ setIsOpen }) => {
  const handleBooking = async (event) => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    const options = {
      data: {
        name: name,
        email: email,
        bookingrequest: message,
      },
    };
    const responseData = await axios.post(apiUrl + apiBookings, options);
    setIsOpen(false);
    console.log(responseData);
  };

  return (
    <StyledModal>
      <div
        className="modal_background"
        onClick={() => {
          setIsOpen(false);
        }}
      ></div>
      <div className="modal">
        <h2>Booking</h2>
        <form onSubmit={handleBooking}>
          <input type="text" id="name" name="name" placeholder="Full name" />
          <input type="email" id="email" name="email" placeholder="E-Mail" />
          <textarea
            id="message"
            name="message"
            placeholder="What type of room are you looking for?"
            rows="7"
          />
          <button>Book</button>
        </form>
      </div>
    </StyledModal>
  );
};

export default Modal;
