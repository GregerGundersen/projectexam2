import React from "react";
import door from "../../media/hotel_door.jpg";
import stairs from "../../media/hotel_stairs_luxurious.jpg";
import { InfoStyled } from "./Info.styled";

const Info = () => {
  return (
    <InfoStyled className="info">
      <h1 className="info__title">Stress-free booking</h1>
      <div className="info_section__enjoy">
        <div className="imagecont">
          <img src={door} alt="Hand opening door to hotel room" />
        </div>
        <div className="text">
          <h2>Enjoy your trip</h2>
          <hr />
          <p>
            Enjoy your trip without worrying while we take care of all the
            boring stuff like logistics, reservations, tickets and more.
          </p>
        </div>
      </div>
      <div className="info_section__hotel">
        <div className="text hotel">
          <h2>Get the hotel you deserve</h2>
          <hr />
          <p>
            Compare prices of all hotels in your destination to get the best
            deal without spending hours visiting different websites. It’s just a
            click away!
          </p>
        </div>
        <div className="imagecont">
          <img src={stairs} alt="Luxurious hotel lobby" />
        </div>
      </div>
    </InfoStyled>
  );
};

export default Info;
