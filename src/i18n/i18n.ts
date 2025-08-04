import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import all translation files
import navigationFR from "./fr/navigation.json";
import navigationEN from "./en/navigation.json";
import protocolIntroFR from "./fr/protocols/protocolIntro.json";
import protocolIntroEN from "./en/protocols/protocolIntro.json";
import theorieFR from "./fr/theorie/theorie.json";
import theorieEN from "./en/theorie/theorie.json";
import protocolSectionsFR from "./fr/protocols/sections.json";
import protocolSectionsEN from "./en/protocols/sections.json";

const resources = {
  fr: {
    navigation: navigationFR,
    protocolIntro: protocolIntroFR,
    theorie: theorieFR,
    protocolSections: protocolSectionsFR,
  },
  en: {
    navigation: navigationEN,
    protocolIntro: protocolIntroEN,
    theorie: theorieEN,
    protocolSections: protocolSectionsEN,
  },
};

// Helper function to determine if a language code is French
const isFrenchLanguage = (langCode: string) => {
  return langCode.toLowerCase().startsWith("fr");
};

// Helper function to determine if a language code is English
const isEnglishLanguage = (langCode: string) => {
  return langCode.toLowerCase().startsWith("en");
};

// Custom language detector
const customLanguageDetector = {
  name: "custom",
  lookup() {
    // Get browser language
    const browserLang = navigator.language;

    // Check if it's French or English
    if (isFrenchLanguage(browserLang)) return "fr";
    if (isEnglishLanguage(browserLang)) return "en";

    // For all other languages, default to French (as per requirements)
    return "fr";
  },
  cacheUserLanguage(lng: string) {
    localStorage.setItem("i18nextLng", lng);
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "fr",
    supportedLngs: ["fr", "en"],
    defaultNS: "navigation",
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["custom", "querystring", "localStorage", "navigator", "htmlTag"],
      lookupQuerystring: "lng",
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage"],
    },
  });

// Add custom detector
i18n.services.languageDetector.addDetector(customLanguageDetector);

// Force language detection on init
i18n.services.languageDetector.detect();

export default i18n;
