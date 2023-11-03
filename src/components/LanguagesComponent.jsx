import { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguagesComponent = () => {
  const [t] = useTranslation("global");
  const [languageSelected, setLanguageSelected] = useState("EN");
  const [languageLevel, setLanguageLevel] = useState("B2");

  const handleLanguageSelected = (language) => {
    setLanguageSelected(language);
    setLanguageLevel(language === "EN" ? "B2" : "NV");
  };

  return (
    <div className="h-full flex flex-col items-center">
      <h3 className="flex self-start pl-1 text-2xl pb-1 font-extrabold dark:bg-[#010101]">
        {t("languagesSection.title")}
      </h3>
      <div className="flex-grow flex flex-col rounded-lg bg-[#f6f7f9] dark:bg-[#171719] text-center w-full">
        <div className="grid grid-cols-3">
          <button
            className={`text-xs py-0.5 ${
              languageSelected === "CA"
                ? "font-bold underline underline-offset-1"
                : ""
            }`}
            onClick={() => handleLanguageSelected("CA")}
          >
            CA
          </button>
          <button
            className={`text-xs py-0.5 ${
              languageSelected === "EN"
                ? "font-bold underline underline-offset-1"
                : ""
            }`}
            onClick={() => handleLanguageSelected("EN")}
          >
            EN
          </button>
          <button
            className={`text-xs py-0.5 ${
              languageSelected === "ES"
                ? "font-bold underline underline-offset-1"
                : ""
            }`}
            onClick={() => handleLanguageSelected("ES")}
          >
            ES
          </button>
        </div>
        <p className="flex-grow flex justify-center items-center text-6xl font-extrabold pb-1 rounded-b-lg">
          {languageLevel}
        </p>
      </div>
    </div>
  );
};

export default LanguagesComponent;
