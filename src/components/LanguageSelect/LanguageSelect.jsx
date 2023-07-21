import React, { useState, useEffect } from "react";
import i18n from "i18next";

import { Container, Select, Option, Icon } from "./LanguageSelect.js";

const LanguageSelect = () => {
  const [language, setLanguage] = useState("en");
  const localValue = JSON.parse(window.localStorage.getItem("currentLanguage"));

  useEffect(() => {
    if (localValue !== null) {
      setLanguage(localValue);
      i18n.changeLanguage(localValue);
    }
  }, [localValue]);

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
    setLanguage(e.target.value);
    window.localStorage.setItem(
      "currentLanguage",
      JSON.stringify(e.target.value)
    );
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
