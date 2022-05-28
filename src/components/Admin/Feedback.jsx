import React from "react";
import { StyledFeedback } from "./Feedback.styled";
import { apiUrl, apiFeedbacks } from "../../utilities/api";
import { useQuery } from "react-query";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import spinner from "../../media/Spinner-1s-200px.svg";

const Feedback = () => {
  const [auth, setAuth] = useContext(AuthContext);

  // Fetch feedback
  const {
    isLoading: isLoadingFeedback,
    error: errorFeedback,
    data: dataFeedback,
  } = useQuery("feedbacks", () =>
    axios
      .get(apiUrl + apiFeedbacks, {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      })
      .then((res) => res.data.data)
  );

  if (isLoadingFeedback) {
    return (
      <StyledFeedback>
        <h2>Feedback</h2>
        <div className="temporary_centered">
          <img src={spinner} alt="Loading indicator" />
        </div>
      </StyledFeedback>
    );
  }

  if (errorFeedback) {
    return (
      <StyledFeedback>
        <h2>Feedback</h2>
        <div className="temporary_centered" id="error">
          <p>
            An error has occurred, please try again later or contact support.
          </p>
          <p>{errorFeedback.message}</p>
        </div>
      </StyledFeedback>
    );
  }
  return (
    <StyledFeedback>
      <h2>Feedback</h2>
      <div className="feedback_container">
        {dataFeedback.map((feedback, idx) => {
          return (
            <div key={idx} className="feedback_container__item">
              <div className="feedback_container__flex">
                <h3>{feedback.attributes.name}</h3>
                <p>{feedback.attributes.email}</p>
              </div>
              <p>{feedback.attributes.feedback}</p>
            </div>
          );
        })}
      </div>
    </StyledFeedback>
  );
};

export default Feedback;
