import React, { useState, useEffect } from "react";
import i18n from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../redux/weather/weatherOperations";
import { getWeatherData } from "../../redux/weather/weatherSelectors";

import { Container, Select, Option, Icon } from "./LanguageSelect.js";

const LanguageSelect = () => {
  const [language, setLanguage] = useState("en");
  const dispatch = useDispatch();
  const weather = useSelector(getWeatherData);
  const localValue = JSON.parse(window.localStorage.getItem("currentLanguage"));

  useEffect(() => {
    if (localValue !== null) {
      setLanguage(localValue);
      i18n.changeLanguage(localValue);
    }
  }, [localValue]);

  const handleChangeLanguage = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    setLanguage(language);
    dispatch(changeLanguage({ weather, lang }));
    window.localStorage.setItem("currentLanguage", JSON.stringify(lang));
  };

  return (
    <Container>
      <Icon style={{ color: "#AFAFAF" }} />
      <Select value={language} onChange={handleChangeLanguage}>
        <Option value="en">EN</Option>
        <Option value="ua">UA</Option>
        <Option value="he">HE</Option>
      </Select>
    </Container>
  );
};

export { LanguageSelect };
