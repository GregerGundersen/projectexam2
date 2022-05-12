import React from "react";
import { StyledContact } from "./Contact.styled";
import { BsFillBugFill, BsLightbulb } from "react-icons/bs";
import { MdFeedback } from "react-icons/md";

const Contact = () => {
  return (
    <StyledContact>
      <h2>What's on your mind?</h2>
      <div className="feedback_category">
        <button>
          <BsFillBugFill id="bug" />
        </button>
        <button>
          <BsLightbulb id="idea" />
        </button>
        <button>
          <MdFeedback id="feedback" />
        </button>
      </div>
      <div className="feedback_message">
        <form>
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
