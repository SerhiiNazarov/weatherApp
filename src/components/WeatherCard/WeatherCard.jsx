import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Graph } from "../Graph";
import {
  Container,
  City,
  DateTxt,
  UpperSectionContainer,
  DescriptionContainer,
  Description,
  Icon,
  LowerSectionContainer,
  TempContainer,
  Degrees,
  DegreesContainer,
  DegBtnContainer,
  DegBtn,
  DegreePart,
  FeelsLike,
  MainContainer,
  MainText,
  MainValue,
  CloseBtn,
  GrafContainer,
} from "./WearherCard.styled";
import { isWarmWeather } from "../../utils/isWarmWeather";
import { CloseOutlined } from "@ant-design/icons";
import { deleteCard, changeUnits } from "../../redux/weather/weatherOperations";
import DateObject from "react-date-object";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "../../utils/useLocalStorage";

const WeatherCard = ({ weatherData }) => {
  const localValue = JSON.parse(window.localStorage.getItem("unitsList"));
  const id = weatherData.id;

  const [selectUnits, setSelectUnits] = useState(useLocalStorage(id));

  const dispatch = useDispatch();
  const { t } = useTranslation();

  if (localValue === null) {
    window.localStorage.setItem(
      "unitsList",
      JSON.stringify({ [id]: "metric" })
    );
  }

  if (localValue !== null) {
    const ArrLocal = Object.keys(localValue);
    const indexKey = ArrLocal.findIndex((el) => Number(el) === id);
    if (indexKey === -1) {
      localValue[id] = selectUnits;
      window.localStorage.setItem("unitsList", JSON.stringify(localValue));
    }
  }

  const onClickDeleteBtn = () => {
    dispatch(deleteCard(weatherData.id));
    delete localValue[weatherData.id];
    window.localStorage.setItem("unitsList", JSON.stringify(localValue));
  };

  const handleUnitsChange = (e) => {
    const units = e.currentTarget.name;
    if (units !== selectUnits) {
      localValue[id] = units;
      setSelectUnits(units);
      const value = weatherData.name;
      dispatch(changeUnits({ value, units }));
      window.localStorage.setItem("unitsList", JSON.stringify(localValue));
    }
  };

  return (
    <Container theme={isWarmWeather(weatherData.main.temp)}>
      <UpperSectionContainer>
        <div>
          <City>
            {weatherData.name}, {weatherData.sys.country}
          </City>
          <DateTxt>{new DateObject().format("ddd, DD MMMM, hh:mm")}</DateTxt>
        </div>
        <DescriptionContainer>
          <Icon
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <Description>{weatherData.weather[0].description}</Description>
        </DescriptionContainer>
        <CloseBtn type="button" onClick={onClickDeleteBtn}>
          <CloseOutlined />
        </CloseBtn>
      </UpperSectionContainer>

      <GrafContainer theme={isWarmWeather(weatherData.main.temp)}>
        <Graph data={weatherData.sliceList} temp={weatherData.main.temp} />
      </GrafContainer>

      <LowerSectionContainer>
        <TempContainer>
          <DegreesContainer>
            <Degrees>
              {weatherData.main.temp > 0 && "+"}
              {weatherData.main.temp.toFixed()}
            </Degrees>
            <DegBtnContainer>
              <DegBtn
                name="metric"
                type="button"
                onClick={handleUnitsChange}
                style={{
                  color: `${selectUnits === "metric" ? "#000000" : "#8D8D8D"}`,
                }}
              >
                &deg;C
              </DegBtn>
              <DegreePart />
              <DegBtn
                name="imperial"
                type="button"
                onClick={handleUnitsChange}
                style={{
                  color: `${
                    selectUnits === "imperial" ? "#000000" : "#8D8D8D"
                  }`,
                }}
              >
                &deg;F
              </DegBtn>
            </DegBtnContainer>
          </DegreesContainer>
          <FeelsLike>
            {t("feels_like")}: {weatherData.main.feels_like.toFixed()} &deg;
            {selectUnits === "metric" ? "C" : "F"}
          </FeelsLike>
        </TempContainer>

        <MainContainer>
          <MainText>
            {t("wind")}:{" "}
            <MainValue theme={isWarmWeather(weatherData.main.temp)}>
              {weatherData.wind.speed}
            </MainValue>{" "}
            {t("m_s")}
          </MainText>
          <MainText>
            {t("humidity")}:{" "}
            <MainValue theme={isWarmWeather(weatherData.main.temp)}>
              {weatherData.main.humidity}
            </MainValue>
            %
          </MainText>
          <MainText>
            {t("pressure")}:{" "}
            <MainValue theme={isWarmWeather(weatherData.main.temp)}>
              {weatherData.main.pressure}
            </MainValue>
            {t("pa")}
          </MainText>
        </MainContainer>
      </LowerSectionContainer>
    </Container>
  );
};

export { WeatherCard };
