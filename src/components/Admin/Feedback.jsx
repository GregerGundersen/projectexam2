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
  const { isLoading, error, data } = useQuery("data", () =>
    axios
      .get(apiUrl + apiFeedbacks, {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      })
      .then((res) => res.data.data)
  );

  if (isLoading) {
    return (
      <StyledFeedback>
        <img src={spinner} alt="Loading indicator" />
      </StyledFeedback>
    );
  }

  if (error) {
    return (
      <StyledFeedback>
        <p>{error.message}</p>
      </StyledFeedback>
    );
  }
  return <StyledFeedback>Feedback</StyledFeedback>;
};

export default Feedback;
