import React from "react";
import "./App.css";
import LocationCard from "./components/LocationCard";
import data from "./data";
const App = () => {
  const locationData = data.map((item) => {
    return (
      <LocationCard
        id={item.title}
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
        <h1>my travel journal.</h1>
      </header>
      {locationData}
    </div>
  );
};

export default App;
