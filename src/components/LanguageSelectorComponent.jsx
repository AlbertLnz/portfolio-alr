import { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelectorComponent = () => {
  const [, i18n] = useTranslation();
  const [mainLanguage, setMainLanguage] = useState("EN");

  const handleSwap = () => {
    switch (mainLanguage) {
      case "EN":
        setMainLanguage("ES");
        i18n.changeLanguage("es");
        break;
      case "ES":
        setMainLanguage("CA");
        i18n.changeLanguage("ca");
        break;
      case "CA":
        setMainLanguage("EN");
        i18n.changeLanguage("en");
        break;
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex-grow rounded-lg bg-[#171719] flex items-center justify-center">
        <button onClick={handleSwap}>
          <p className="items-center font-bold text-4xl p-3">{mainLanguage}</p>
        </button>
      </div>
    </div>
  );
};

export default LanguageSelectorComponent;
