import axios from "axios";
const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const currentWeatherData = async ({
  lat,
  lon,
  units = "metric",
  lang = "en",
}) => {
  const { data } = await axios.get(
    `${BASE_URL}weather?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}&lang=${lang}`
  );

  const {
    data: { list },
  } = await axios.get(
    `${BASE_URL}forecast?q=${data.name}&units=${units}&appid=${API_KEY}`
  );

  let sliceList = list.slice(1, 9);

  return { ...data, sliceList };
};

export const weatherData = async ({ value, units = "metric", lang = "en" }) => {
  const { data } = await axios.get(
    `${BASE_URL}weather?q=${value}&units=${units}&appid=${API_KEY}`
  );

  const {
    data: { list },
  } = await axios.get(
    `${BASE_URL}forecast?q=${value}&units=${units}&appid=${API_KEY}&lang=${lang}`
  );

  let sliceList = list.slice(1, 9);

  return { ...data, sliceList };
};
