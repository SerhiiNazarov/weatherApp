import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { CardList } from "./components/CardList";
import { Autocomlete } from "./components/Autocomlete";
import { Container } from "./components/Container";
import { LanguageSelect } from "./components/LanguageSelect";
import { getBrowserLocation } from "./utils/geo";
import { fetchCurrentWeather } from "./redux/weather/weatherOperations";
import { addCityList } from "./redux/weather/weatherOperations";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getBrowserLocation()
      .then((location) => {
        const localValue = JSON.parse(
          window.localStorage.getItem("currentLocation")
        );
        if (localValue === null && localValue !== location) {
          window.localStorage.setItem(
            "currentLocation",
            JSON.stringify(location)
          );
          dispatch(fetchCurrentWeather(location));
        }
      })
      .catch(() => {
        console.log("Error");
      });
  }, [dispatch]);

  const localValue = JSON.parse(window.localStorage.getItem("weatherList"));
  if (localValue !== null && localValue.length !== 0) {
    dispatch(addCityList(localValue));
  }

  return (
    <Container>
      <LanguageSelect />
      <Autocomlete />
      <CardList />
    </Container>
  );
};

export default App;
