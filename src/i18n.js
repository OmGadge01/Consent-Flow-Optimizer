import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const res = {
  en: { translation: { "Consent Dashboard": "Consent Dashboard" } },
  hi: { translation: { "Consent Dashboard": "सहमति डैशबोर्ड" } },
};
i18n
  .use(initReactI18next)
  .init({
    resources: res,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
export default i18n;
