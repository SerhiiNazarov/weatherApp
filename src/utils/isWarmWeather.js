export const isWarmWeather = (temp) => {
  return {
    background: temp > 0 ? "#FFFAF1" : "#F1F2FF",
    color: temp > 0 ? "#FFA25B" : "#459DE9",
    bgGraph:
      temp > 0
        ? "transparent linear-gradient(180deg, #FFA25B 0%, #FFF4F4 100%) 0% 0% no-repeat padding-box"
        : "transparent linear-gradient(180deg, #5B8CFF 0%, #FFF4F4 100%) 0% 0% no-repeat padding-box",
  };
};
