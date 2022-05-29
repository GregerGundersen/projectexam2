import React from "react";
import { StyledContact } from "./Contact.styled";
import axios from "axios";
import { apiUrl, apiFeedbacks } from "../../utilities/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contact } from "../../utilities/schemas";
import { useMutation } from "react-query";

const Contact = () => {
  const addFeedback = (feedback) => {
    return axios.post(apiUrl + apiFeedbacks, feedback);
  };

  const useAddFeedbackData = () => {
    return useMutation(addFeedback);
  };

  const { mutate, isSuccess, isError } = useAddFeedbackData();

  const onSubmit = (formData) => {
    const options = {
      data: {
        name: formData.name,
        email: formData.email,
        feedback: formData.message,
      },
    };
    mutate(options);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contact),
  });

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
          <textarea
            type="text"
            placeholder="Your message"
            id="message"
            rows="7"
            {...register("message")}
          />
          {errors.message && <span>{errors.message.message}</span>}
          <button id="submit">Submit</button>
        </form>
        <div
          className={
            isSuccess ? "message success" : isError ? "message error" : null
          }
        >
          {isSuccess ? "Feedback sent" : isError ? "An error occured" : null}
        </div>
      </div>
    </StyledContact>
  );
};

export default Contact;
