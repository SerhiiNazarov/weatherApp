import { createAsyncThunk } from "@reduxjs/toolkit";
import { currentWeatherData, weatherData } from "../../api/weatherData";

export const fetchCurrentWeather = createAsyncThunk(
  "weathers/fetchCurrentWeather",
  async (params, { rejectWithValue }) => {
    try {
      const weather = await currentWeatherData(params);
      return weather;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addCityWeather = createAsyncThunk(
  "weathers/addCityWeather",
  async (value, { rejectWithValue }) => {
    try {
      const weather = await weatherData(value);
      return weather;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addCityList = createAsyncThunk(
  "weathers/addCityList",
  async (value, { rejectWithValue }) => {
    try {
      return value;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteCard = createAsyncThunk(
  "weathers/deleteCard",
  (id, { rejectWithValue }) => {
    try {
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const changeUnits = createAsyncThunk(
  "weathers/changeUnits",
  async (value, { rejectWithValue }) => {
    try {
      const weather = await weatherData(value);
      return weather;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
