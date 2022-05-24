import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl, apiHotels } from "../../utilities/api";
import { StyledTypeahead, StyledLink } from "./Typeahead.styled";

const Typeahead = () => {
  const [hotels, setHotels] = useState([]); //Stores list of hotels fetched from api.
  const [text, setText] = useState(""); // Stores input from user.
  const [suggestions, setSuggestions] = useState([]); // Stores matches.

  // Fetches all hotels from api
  useEffect(() => {
    const loadHotels = async () => {
      const response = await axios.get(apiUrl + apiHotels);
      setHotels(response.data.data);
    };
    loadHotels();
  }, []);

  // Filters hotels and returns matches to user input. RegEx rule: Case insensitive
  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = hotels.filter((hotel) => {
        const regex = new RegExp(`${text}`, "gi");
        return hotel.attributes.name.match(regex);
      });
    }
    console.log(matches);
    setSuggestions(matches);
    setText(text);
  };

  return (
    <StyledTypeahead>
      <h2>Discover you next adventure</h2>
      <input
        type="text"
        placeholder="Search hotels..."
        value={text}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
      <ul className="typeahead_suggestion__list">
        {suggestions &&
          suggestions.map((suggestion, idx) => {
            console.log(suggestion);
            return (
              <li>
                <StyledLink to={`/hotel?id=${suggestion.id}`} key={idx}>
                  {suggestion.attributes.name}
                </StyledLink>
              </li>
            );
          })}
      </ul>
    </StyledTypeahead>
  );
};

export default Typeahead;
