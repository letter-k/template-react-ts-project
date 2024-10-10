import { useTranslation } from "react-i18next";
import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "@/assets/vite.svg";
import "./App.scss";

export default function App() {
  const { t, i18n } = useTranslation();
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {t("countMessage", { count })}
        </button>
        <button
          onClick={() =>
            i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")
          }
        >
          {i18n.language === "en" ? "Switch to Russian" : "Switch to English"}
        </button>
        <p dangerouslySetInnerHTML={{ __html: t("editCode") }} />
      </div>
      <p className="read-the-docs">{t("readDocs")}</p>
    </>
  );
}
