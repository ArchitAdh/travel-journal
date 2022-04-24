import React from "react";
import icon from "../img/path.png";
const LocationCard = (props) => {
  return (
    <div className="location-card">
      <div className="location-container">
        <img
          className="location-img"
          src={props.img}
          alt="location of destination"
        />
        <div className="location-details">
          <div className="location-landmark">
            <img src={icon} alt="location icon" className="location-icon" />
            <p className="location-country">{props.country}</p>
            <a className="location-url" href={`${props.googleMapsUrl}`}>
              View on Google Maps
            </a>
          </div>
          <h2 className="location-title">{props.title}</h2>
          <p className="date">{props.date}</p>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
