import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCityWeather } from "../../redux/weather/weatherOperations";
import { useJsApiLoader } from "@react-google-maps/api";
import usePlacesAutocomplete from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { useTranslation } from "react-i18next";
import { Wraper, Input, Suggestions, Item, Btn } from "./Autocomlete.styled";

const API_KEY = process.env.REACT_APP_API_KEY;
const libraries = ["places"];

const Autocomlete = () => {
  const [selectCity, setSelectCity] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries,
  });

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    init,
    clearSuggestions,
  } = usePlacesAutocomplete({
    initOnMount: false,
    debounce: 500,
  });
  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const onClickAddBtn = () => {
    if (value !== "") {
      dispatch(addCityWeather({ value }));
    }
    setSelectCity(false);
    setValue("");
  };

  const handleSelect =
    ({ description }) =>
    () => {
      setValue(description, false);
      clearSuggestions();
      setSelectCity(true);
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <Item key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </Item>
      );
    });

  useEffect(() => {
    if (isLoaded) {
      init();
    }
  }, [isLoaded, init]);

  return (
    <Wraper ref={ref}>
      <Input
        type="text"
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder={t("search")}
      />
      {status === "OK" && <Suggestions>{renderSuggestions()}</Suggestions>}
      <Btn type="button" onClick={onClickAddBtn}>
        {t("add")}
      </Btn>
    </Wraper>
  );
};

export { Autocomlete };
