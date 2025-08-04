import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center">
      {i18n.language === "en" && (
        <button
          className="px-2 py-1 rounded text-slate-100 bg-physioBlue"
          onClick={() => changeLanguage("fr")}
        >
          FR
        </button>
      )}
      {i18n.language === "fr" && (
        <button
          className="px-2 py-1 rounded text-slate-100 bg-physioBlue"
          onClick={() => changeLanguage("en")}
        >
          EN
        </button>
      )}
    </div>
  );
};

export default LanguageSwitcher;
