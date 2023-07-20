import React from "react";
import DateObject from "react-date-object";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
ChartJS.defaults.font.size = 8;

const Graph = ({ data, temp }) => {
  const labelsData = data.map((item) =>
    new DateObject(item.dt_txt).format("MM.DD")
  );

  const isWarmWeather = (temp) => {
    return temp > 0 ? "#FFA25B" : "#5B8CFF";
  };

  const forecastData = {
    labels: labelsData,
    datasets: [
      {
        label: "forecast",
        backgroundColor: `${isWarmWeather(temp)}`,
        data: data.map((item) => item.main.temp),
        color: "red",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        stacked: true,
        grid: {
          display: true,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return <Line data={forecastData} options={options} width="320" />;
};

export { Graph };
