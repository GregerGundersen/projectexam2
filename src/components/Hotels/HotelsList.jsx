import React from "react";
import { useQuery } from "react-query";
import { apiUrl, apiHotels } from "../../utilities/api";
import { StyledHotelsList } from "./HotelsList.styled";
import { Link } from "react-router-dom";
// import { BiCheckbox } from "react-icons/bi";

const HotelsList = () => {
  const { isLoading, error, data } = useQuery("data", () =>
    fetch(apiUrl + apiHotels).then((res) => res.json())
  );

  //   console.log(data.data);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <StyledHotelsList>
      <div className="hotels_filters">
        <div>
          <h3>Location</h3>
          <div className="hotels_filters__location">
            <input type="checkbox" id="sentrum" name="sentrum" />
            <label for="sentrum">Bergen Sentrum</label>
          </div>
          <div className="hotels_filters__location">
            <input type="checkbox" id="årstad" name="årstad" />
            <label for="årstad">Årstad</label>
          </div>
          <div className="hotels_filters__location">
            <input type="checkbox" id="sted" name="sted" />
            <label for="sted">Location</label>
          </div>
        </div>

        <div>
          <h3>Accommodation</h3>
          <div className="hotels_filters__accommodation">
            <input type="checkbox" id="hotel" name="hotel" />
            <label for="hotel">Hotel</label>
          </div>
          <div className="hotels_filters__accommodation">
            <input type="checkbox" id="b&b" name="b&b" />
            <label for="b&b">B&B</label>
          </div>
          <div className="hotels_filters__accommodation">
            <input type="checkbox" id="apartment" name="apartment" />
            <label for="apartment">Apartment</label>
          </div>
          <div className="hotels_filters__accommodation">
            <input type="checkbox" id="hostel" name="hostel" />
            <label for="hostel">Hostel</label>
          </div>
        </div>
      </div>
      <div className="hotels">
        {data.data.map((hotel, idx) => {
          return (
            <div className="hotel">
              <div className="hotel_image"></div>
              <div className="hotel_info">
                <h2>{hotel.attributes.name}</h2>
                <p class="hotel_info__location">{hotel.attributes.location}</p>
                <p>{hotel.attributes.description}</p>
              </div>
              <Link to="/hotel">See more</Link>
            </div>
          );
        })}
      </div>
    </StyledHotelsList>
  );
};

export default HotelsList;
