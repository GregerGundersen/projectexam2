import React, { useState } from "react";
import { StyledContact } from "./Contact.styled";
import { MdFeedback } from "react-icons/md";
import axios from "axios";
import { apiUrl, apiFeedbacks } from "../../utilities/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contact } from "../../utilities/schemas";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contact),
  });

  const onSubmit = async (formData) => {
    const options = {
      data: {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
    };
    const responseData = await axios.post(apiUrl + apiFeedbacks, options);
  };

  return (
    <StyledContact>
      <h2>What's on your mind?</h2>
      <div className="feedback_message">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Full name"
            id="name"
            {...register("name")}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <input
            type="e-mail"
            placeholder="E-Mail"
            id="email"
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <input
            type="text"
            placeholder="Your message"
            id="message"
            {...register("message")}
          />
          {errors.message && <span>{errors.message.message}</span>}
          <button id="submit">Submit</button>
        </form>
      </div>
    </StyledContact>
  );
};

export default Contact;
