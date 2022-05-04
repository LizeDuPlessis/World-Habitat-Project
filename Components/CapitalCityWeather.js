import React from "react";

function CapitalCityWeather({ capitalCityWeather }) {
  return (
    <div>
      {" "}
      <h1>Details</h1>
      {capitalCityWeather?.main?.temp}
    </div>
  );
}

export default CapitalCityWeather;
