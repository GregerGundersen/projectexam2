import React, { useState } from "react";
import { StyledContact } from "./Contact.styled";
import { BsFillBugFill, BsLightbulb } from "react-icons/bs";
import { MdFeedback } from "react-icons/md";
import axios from "axios";
import { apiUrl, apiFeedbacks } from "../../utilities/api";

const Contact = () => {
  const [feedbackType, setFeedbackType] = useState("feedback");
  const feedbackTypeHandler = (event) => {
    if (event.target.className === "button__bug") {
      setFeedbackType("bug");
      console.log(feedbackType);
    } else if (event.target.className === "button__idea") {
      setFeedbackType("idea");
      console.log(feedbackType);
    } else if (event.target.className === "button__feedback") {
      setFeedbackType("feedback");
      console.log(feedbackType);
    }
  };

  const formHandler = async (event) => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    const options = {
      data: {
        name: name,
        email: email,
        feedback: message,
        feedback_type: feedbackType,
      },
    };

    const responseData = await axios.post(apiUrl + apiFeedbacks, options);
    console.log(responseData);
  };

  return (
    <StyledContact>
      <h2>What's on your mind?</h2>
      <div className="feedback_category">
        <button className="button__bug" onClick={feedbackTypeHandler}>
          <BsFillBugFill id="bug" />
        </button>
        <button className="button__idea" onClick={feedbackTypeHandler}>
          <BsLightbulb id="idea" />
        </button>
        <button className="button__feedback" onClick={feedbackTypeHandler}>
          <MdFeedback id="feedback" />
        </button>
      </div>
      <div className="feedback_message">
        <form onSubmit={formHandler}>
          <input type="text" placeholder="Full name" id="name" />
          <input type="e-mail" placeholder="E-Mail" id="email" />
          <input type="text" placeholder="Your message" id="message" />
          <button id="submit">Submit</button>
        </form>
      </div>
    </StyledContact>
  );
};

export default Contact;
