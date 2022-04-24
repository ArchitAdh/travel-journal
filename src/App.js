import React from "react";
import "./App.css";
import LocationCard from "./components/LocationCard";
import data from "./data";
import logo from "./img/logo.png";
const App = () => {
  const locationData = data.map((item) => {
    return (
      <LocationCard
        key={item.title}
        country={item.location}
        title={item.title}
        img={item.imageUrl}
        description={item.description}
        googleMapsUrl={item.googleMapsUrl}
        date={item.startDate + "-" + item.endDate}
      />
    );
  });
  return (
    <div className="container">
      <header className="header">
        <img className="header-logo" src={logo} alt="logo" />
        <h1>my travel journal.</h1>
      </header>
      <div className="container-inner">{locationData}</div>
    </div>
  );
};

export default App;
