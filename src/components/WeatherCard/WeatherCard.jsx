import React, { useEffect, useState } from "react";
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

const WeatherCard = ({ weatherData }) => {
  const [selectUnits, setSelectUnits] = useState("metric");
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const localValue = JSON.parse(window.localStorage.getItem("unitsList"));
  if (localValue === null) {
    window.localStorage.setItem(
      "unitsList",
      JSON.stringify({ [weatherData.id]: "metric" })
    );
  }

  useEffect(() => {
    setSelectUnits(localValue[weatherData.id]);
  }, [localValue, weatherData.id]);

  useEffect(() => {
    if (localValue !== null) {
      localValue[weatherData.id] = selectUnits;
      window.localStorage.setItem("unitsList", JSON.stringify(localValue));
    }
  }, [selectUnits, localValue, weatherData.id]);

  const onClickDeleteBtn = () => {
    dispatch(deleteCard(weatherData.id));
  };

  const handleUnitsChange = (e) => {
    const units = e.currentTarget.name;
    if (units !== selectUnits) {
      setSelectUnits(units);
      const value = weatherData.name;
      dispatch(changeUnits({ value, units }));
      localValue[weatherData.id] = units;
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
          <Description>{weatherData.weather[0].main}</Description>
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
