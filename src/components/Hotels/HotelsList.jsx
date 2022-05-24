import React from "react";
import { useQuery } from "react-query";
import { apiUrl, apiHotels } from "../../utilities/api";
import { StyledHotelsList } from "./HotelsList.styled";
import { Link } from "react-router-dom";
import spinner from "../../media/Spinner-1s-200px.svg";
// import { BiCheckbox } from "react-icons/bi";
const qs = require("qs");

const HotelsList = () => {
  // Set pagination settings for hotel list fetch
  const paginationQuery = qs.stringify(
    {
      pagination: {
        page: 1,
        pageSize: 5,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  // Fetch hotels
  const { isLoading, error, data } = useQuery("data", () =>
    fetch(apiUrl + apiHotels + "?" + paginationQuery).then((res) => res.json())
  );

  // Set all usual content with loading indicator
  if (isLoading)
    return (
      <StyledHotelsList>
        <div className="hotels_filters">
          <div>
            <h3>Location</h3>
            <div className="hotels_filters__location">
              <input type="checkbox" id="sentrum" name="sentrum" />
              <label htmlFor="sentrum">Bergen Sentrum</label>
            </div>
            <div className="hotels_filters__location">
              <input type="checkbox" id="årstad" name="årstad" />
              <label htmlFor="årstad">Årstad</label>
            </div>
            <div className="hotels_filters__location">
              <input type="checkbox" id="sted" name="sted" />
              <label htmlFor="sted">Location</label>
            </div>
          </div>

          <div>
            <h3>Accommodation</h3>
            <div className="hotels_filters__accommodation">
              <input type="checkbox" id="hotel" name="hotel" />
              <label htmlFor="hotel">Hotel</label>
            </div>
            <div className="hotels_filters__accommodation">
              <input type="checkbox" id="b&b" name="b&b" />
              <label htmlFor="b&b">B&B</label>
            </div>
            <div className="hotels_filters__accommodation">
              <input type="checkbox" id="apartment" name="apartment" />
              <label htmlFor="apartment">Apartment</label>
            </div>
            <div className="hotels_filters__accommodation">
              <input type="checkbox" id="hostel" name="hostel" />
              <label htmlFor="hostel">Hostel</label>
            </div>
          </div>
          {/* <label for="results">Results per page</label>
          <input type="range" min="3" max="15" id="results" name="results" /> */}
        </div>
        <div className="temporary_centered">
          <img src={spinner} alt="A spinning loading indicator" />
        </div>
      </StyledHotelsList>
    );

  // Set error message if fetch fails
  if (error)
    return (
      <StyledHotelsList>
        <div className="hotels_filters">
          <div>
            <h3>Location</h3>
            <div className="hotels_filters__location">
              <input type="checkbox" id="sentrum" name="sentrum" />
              <label htmlFor="sentrum">Bergen Sentrum</label>
            </div>
            <div className="hotels_filters__location">
              <input type="checkbox" id="årstad" name="årstad" />
              <label htmlFor="årstad">Årstad</label>
            </div>
            <div className="hotels_filters__location">
              <input type="checkbox" id="sted" name="sted" />
              <label htmlFor="sted">Location</label>
            </div>
          </div>

          <div>
            <h3>Accommodation</h3>
            <div className="hotels_filters__accommodation">
              <input type="checkbox" id="hotel" name="hotel" />
              <label htmlFor="hotel">Hotel</label>
            </div>
            <div className="hotels_filters__accommodation">
              <input type="checkbox" id="b&b" name="b&b" />
              <label htmlFor="b&b">B&B</label>
            </div>
            <div className="hotels_filters__accommodation">
              <input type="checkbox" id="apartment" name="apartment" />
              <label htmlFor="apartment">Apartment</label>
            </div>
            <div className="hotels_filters__accommodation">
              <input type="checkbox" id="hostel" name="hostel" />
              <label htmlFor="hostel">Hostel</label>
            </div>
          </div>
        </div>
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
      <div className="hotels_filters">
        <div>
          <h3>Location</h3>
          <div className="hotels_filters__location">
            <input type="checkbox" id="sentrum" name="sentrum" />
            <label htmlFor="sentrum">Bergen Sentrum</label>
          </div>
          <div className="hotels_filters__location">
            <input type="checkbox" id="årstad" name="årstad" />
            <label htmlFor="årstad">Årstad</label>
          </div>
          <div className="hotels_filters__location">
            <input type="checkbox" id="sted" name="sted" />
            <label htmlFor="sted">Location</label>
          </div>
        </div>

        <div>
          <h3>Accommodation</h3>
          <div className="hotels_filters__accommodation">
            <input type="checkbox" id="hotel" name="hotel" />
            <label htmlFor="hotel">Hotel</label>
          </div>
          <div className="hotels_filters__accommodation">
            <input type="checkbox" id="b&b" name="b&b" />
            <label htmlFor="b&b">B&B</label>
          </div>
          <div className="hotels_filters__accommodation">
            <input type="checkbox" id="apartment" name="apartment" />
            <label htmlFor="apartment">Apartment</label>
          </div>
          <div className="hotels_filters__accommodation">
            <input type="checkbox" id="hostel" name="hostel" />
            <label htmlFor="hostel">Hostel</label>
          </div>
        </div>
      </div>
      <div className="hotels">
        {data.data.map((hotel, idx) => {
          return (
            <div key={idx} className="hotel">
              <div className="hotel_image"></div>
              <div className="hotel_info">
                <h2>{hotel.attributes.name}</h2>
                <p className="hotel_info__location">
                  {hotel.attributes.location}
                </p>
                <p>{hotel.attributes.description}</p>
              </div>
              <Link to={`/hotel?id=${hotel.id}`}>See more</Link>
            </div>
          );
        })}
      </div>
    </StyledHotelsList>
  );
};

export default HotelsList;
