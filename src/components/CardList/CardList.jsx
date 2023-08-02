import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { getWeatherData } from "../../redux/weather/weatherSelectors";

import { Wraper } from "./CardList.styled";
import { WeatherCard } from "../WeatherCard";

const CardList = () => {
  const weather = useSelector(getWeatherData);

  useEffect(() => {
    if (weather.length !== 0) {
      window.localStorage.setItem("weatherList", JSON.stringify(weather));
    }
  }, [weather]);

  return (
    <>
      <Wraper>
        {weather ? (
          weather.map((item) => (
            <WeatherCard key={item.id} weatherData={item} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Wraper>
    </>
  );
};

export { CardList };
