import React from "react";
import { useQuery } from "react-query";
import { apiUrl, apiHotels } from "../../utilities/api";
import { StyledHotelsList } from "./HotelsList.styled";
import { StyledHotelLink } from "./HotelsList.styled";
import spinner from "../../media/Spinner-1s-200px.svg";

const HotelsList = () => {
  // Fetch hotels
  const { isLoading, error, data } = useQuery("hotels", () =>
    fetch(apiUrl + apiHotels).then((res) => res.json())
  );

  // Set all usual content with loading indicator
  if (isLoading)
    return (
      <StyledHotelsList>
        <div className="temporary_centered">
          <img src={spinner} alt="A spinning loading indicator" />
        </div>
      </StyledHotelsList>
    );

  // Set error message if fetch fails
  if (error)
    return (
      <StyledHotelsList>
        <div className="temporary_centered" id="error">
          <p>
            An error has occurred, please try again later or contact support.
          </p>
          <p>{error.message}</p>
        </div>
      </StyledHotelsList>
    );

  return (
    <StyledHotelsList>
      <div className="hotels">
        {data.data.map((hotel, idx) => {
          return (
            <div key={idx} className="hotel">
              <div className="hotel_image">
                <img src={hotel.attributes.imgsrc} alt="Hotel exterior" />
              </div>
              <div className="hotel_info">
                <h2>{hotel.attributes.name}</h2>
                <p className="hotel_info__location">
                  {hotel.attributes.location}
                </p>
                <p>{hotel.attributes.description}</p>
              </div>
              <StyledHotelLink to={`/hotel?id=${hotel.id}`}>
                <button>See more</button>
              </StyledHotelLink>
            </div>
          );
        })}
        <div></div>
      </div>
    </StyledHotelsList>
  );
};

export default HotelsList;
