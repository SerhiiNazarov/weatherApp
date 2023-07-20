const defaultLocation = {
  lat: 49.4285,
  lng: 32.0621,
};

export const getBrowserLocation = () => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude: lat, longitude: lon } = pos.coords;
          resolve({ lat, lon });
        },
        () => {
          reject(defaultLocation);
        }
      );
    } else {
      reject(defaultLocation);
    }
  });
};
