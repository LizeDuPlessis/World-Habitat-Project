import React from "react";

function CapitalCityWeather({ capitalCityWeather, country }) {
  return (
    <>
      <div
        className={`w-100 border-black border-solid border-2 rounded-lg mx-1.5 my-5 text-center  ${
          capitalCityWeather?.main?.temp >= 30
            ? "bg-red-700"
            : capitalCityWeather?.main?.temp >= 20
            ? "bg-red-500"
            : capitalCityWeather?.main?.temp >= 10
            ? "bg-blue-600"
            : capitalCityWeather?.main?.temp >= 5
            ? "bg-blue-300"
            : "bg-blue-100"
        }`}
      >
        <h1 className="text-center">
          Weather in <span>{country[0].capital[0]}</span>
        </h1>
        <ul className="flex flex-wrap justify-center mr-10">
          <li className="flex flex-col bg-white p-4 m-4 rounded shadow">
            Main{" "}
            <span className="text-4xl font-bold">
              {Math.round(capitalCityWeather?.main?.temp)}
              <span>ºC</span>
            </span>
          </li>
          <li className="flex flex-col bg-white p-4 m-4 rounded shadow">
            Feels like{" "}
            <span className="text-4xl font-bold">
              {Math.round(capitalCityWeather?.main?.feels_like)}
              <span>ºC</span>
            </span>
          </li>
          <li className="flex flex-col bg-white p-4 m-4 rounded shadow">
            Low{" "}
            <span className="text-4xl font-bold">
              {Math.round(capitalCityWeather?.main?.temp_min)}
              <span>ºC</span>
            </span>
          </li>
          <li className="flex flex-col bg-white p-4 m-4 rounded shadow">
            High{" "}
            <span className="text-4xl font-bold">
              {Math.round(capitalCityWeather?.main?.temp_max)}
              <span>ºC</span>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default CapitalCityWeather;
