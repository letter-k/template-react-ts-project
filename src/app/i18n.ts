import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const repoName = import.meta.env.REPO_NAME
  ? `/${import.meta.env.REPO_NAME}/`
  : "/";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    backend: {
      loadPath: `${repoName}locales/{{lng}}/translation.json`,
    },
  });

export default i18n;
