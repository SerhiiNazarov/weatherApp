import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCurrentWeather,
  addCityWeather,
  deleteCard,
  changeUnits,
  addCityList,
} from "./weatherOperations";

const initialState = {
  weather: [],
  error: null,
};

const weatherSlice = createSlice({
  name: "weathers",
  initialState,
  extraReducers: {
    [fetchCurrentWeather.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        weather: [...state.weather, payload],
      };
    },
    [fetchCurrentWeather.pending]: (state) => {
      return {
        ...state,
        error: null,
      };
    },
    [fetchCurrentWeather.rejected]: (state, { payload }) => {
      return {
        ...state,
        error: payload,
      };
    },
    [addCityWeather.pending]: (state) => {
      return {
        ...state,
        error: null,
      };
    },
    [addCityWeather.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        weather: [...state.weather, payload],
      };
    },
    [addCityWeather.rejected]: (state, { payload }) => {
      console.log(payload);
      return {
        ...state,
        error: payload,
      };
    },
    [deleteCard.pending]: (state) => {
      return {
        ...state,
        error: null,
      };
    },
    [deleteCard.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        weather: state.weather.filter((item) => item.id !== payload),
      };
    },
    [deleteCard.rejected]: (state, { payload }) => {
      return {
        ...state,
        error: payload,
      };
    },
    [changeUnits.pending]: (state) => {
      return {
        ...state,
        error: null,
      };
    },
    [changeUnits.fulfilled]: (state, { payload }) => {
      let index = state.weather.findIndex((el) => el.id === payload.id);

      const newArr = [...state.weather];

      newArr.splice(index, 1, payload);

      return {
        ...state,
        weather: newArr,
      };
    },
    [changeUnits.rejected]: (state, { payload }) => {
      return {
        ...state,
        error: payload,
      };
    },
    [addCityList.pending]: (state) => {
      return {
        ...state,
        error: null,
      };
    },
    [addCityList.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        weather: payload,
      };
    },
    [addCityList.rejected]: (state, { payload }) => {
      return {
        ...state,
        error: payload,
      };
    },
  },
});

export const weatherReducer = weatherSlice.reducer;
