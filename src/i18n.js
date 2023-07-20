import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    supportedLngs: ["en", "ua", "he"],
    fallbackLng: "en",
    seveMissing: true,
    resources: {
      en: {
        translation: {
          add: "Add",
          search: "Search",
          feels_like: "Feels like",
          wind: "Wind",
          humidity: "Humidity",
          pressure: "Pressure",
          pa: "Pa",
          m_s: "m/s",
        },
      },
      ua: {
        translation: {
          add: "Додати",
          search: "Пошук",
          feels_like: "Відчувається як",
          wind: "Вітер",
          humidity: "Вологість",
          pressure: "Тиск",
          pa: "Па",
          m_s: "м/с",
        },
      },
      he: {
        translation: {
          add: "לְהוֹסִיף",
          search: "לחפש",
          feels_like: "מרגיש כמו",
          wind: "רוּחַ",
          humidity: "לחות",
          pressure: "לַחַץ",
          pa: "פסקל",
          m_s: "מ/שנייה",
        },
      },
    },
    detection: {
      order: [
        "localeStorage",
        "cookie",
        "htmlTag",
        "path",
        "subdomain",
        "queryString",
      ],
      cache: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
