export const useLocalStorage = (id) => {
  const localValue = JSON.parse(window.localStorage.getItem("unitsList"));
  if (localValue !== null) {
    const ArrLocal = Object.keys(localValue);
    const indexKey = ArrLocal.findIndex((el) => Number(el) === id);
    if (indexKey !== -1) {
      return localValue[id];
    } else {
      return "metric";
    }
  } else {
    return "metric";
  }
};
