import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { apiUrl, apiHotels } from "../../utilities/api";
import { useQuery } from "react-query";
import spinner from "../../media/Spinner-1s-200px.svg";
import { StyledDetails } from "./Details.styled";
import Modal from "./Modal";

const Details = () => {
  const id = new URLSearchParams(useLocation().search).get("id");
  const [isOpen, setIsOpen] = useState(false);

  // Fetch hotel
  const { isLoading, error, data } = useQuery("data", () =>
    fetch(apiUrl + apiHotels + `/${id}`).then((res) => res.json())
  );

  if (isLoading) {
    return (
      <div>
        <img src={spinner} alt="A spinning loading indicator" />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>An error has occurred, please try again later or contact support.</p>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <StyledDetails>
      <div className="hotel_image"></div>
      <div className="hotel_info">
        <h2>{data.data.attributes.name}</h2>
        <span>{data.data.attributes.location}</span>
        <p>{data.data.attributes.description}</p>
      </div>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Book
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </StyledDetails>
  );
};

export default Details;
