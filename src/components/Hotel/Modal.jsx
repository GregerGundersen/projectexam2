import React from "react";
import { StyledModal } from "./Modal.styled";
import { useState } from "react";

const Modal = ({ setIsOpen }) => {
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
        {/* <button
          onClick={() => {
            setIsOpen(false);
          }}
        >
          x
        </button> */}
        <form>
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
