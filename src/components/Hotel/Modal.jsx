import React from "react";
import { StyledModal } from "./Modal.styled";
import { apiUrl, apiBookings } from "../../utilities/api";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { booking } from "../../utilities/schemas";

const Modal = ({ setIsOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(booking),
  });

  const onSubmit = async (formData) => {
    const options = {
      data: {
        name: formData.name,
        email: formData.email,
        bookingrequest: formData.bookingRequest,
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full name"
            {...register("name")}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-Mail"
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <textarea
            id="message"
            name="message"
            placeholder="What type of room are you looking for?"
            rows="7"
            {...register("bookingRequest")}
          />
          {errors.bookingRequest && (
            <span>{errors.bookingRequest.message}</span>
          )}
          <button>Book</button>
        </form>
      </div>
    </StyledModal>
  );
};

export default Modal;
