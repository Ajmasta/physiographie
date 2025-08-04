import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

interface LinksList {
  name: string;
  link: string;
}

interface Section {
  title: string;
  id: string;
}

// Map English paths to French paths
const pathMap: { [key: string]: string } = {
  "/theory": "/theorie",
  "/theory/terminology": "/theorie/terminologie",
  "/theory/physical-principles": "/theorie/principes-physiques",
  "/theory/technique": "/theorie/technique",
  "/theory/advantages": "/theorie/avantages",
  "/protocols": "/protocoles",
};

// Map English section IDs to French section IDs
const sectionIdMap: { [key: string]: string } = {
  shoulder: "epaule",
  elbow: "coude",
  wrist: "poignet",
  diaphragm: "diaphragme",
  trunk: "tronc",
  hip: "hanche",
  thighandknee: "cuisseetgenou",
  ankleandfeet: "chevilleEtPied",
};

export const NavigationBar = () => {
  const hiddenButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const { t, i18n } = useTranslation();
  const { t: tProtocols } = useTranslation("protocolIntro");

  const getFrenchSectionId = (id: string) => {
    return i18n.language === "en" ? sectionIdMap[id] || id : id;
  };

  const getFrenchPath = (path: string) => {
    return i18n.language === "en" ? pathMap[path] || path : path;
  };

  const createVerticalMenu = (section: "theory" | "protocols") => {
    const handleItemClick = () => {
      if (hiddenButtonRef.current) {
        hiddenButtonRef.current.focus();
      }
    };

    const getTheoryItems = () => {
      const items = t(`${section}.items`, {
        returnObjects: true,
        defaultValue: [],
      }) as LinksList[];
      return Array.isArray(items) ? items : [];
    };

    const getProtocolSections = () => {
      const sections = tProtocols("sections", {
        returnObjects: true,
        defaultValue: [],
      }) as Section[];
      return Array.isArray(sections) ? sections : [];
    };

    return (
      <li className="dropdown dropdown-hover">
        <Link to={getFrenchPath(t(`${section}.link`))}>
          <div
            tabIndex={0}
            role="button"
            className="md:text-lg text-slate-400"
            onClick={handleItemClick}
          >
            {t(`${section}.name`)}
          </div>
        </Link>
        <ul
          tabIndex={0}
          className="cursor-pointer dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          ref={dropdownRef}
        >
          {section === "theory"
            ? getTheoryItems().map((item: LinksList) => (
                <li key={item.link} onClick={handleItemClick}>
                  <Link to={getFrenchPath(item.link)}>{item.name}</Link>
                </li>
              ))
            : getProtocolSections().map((section) => (
                <li key={section.id} onClick={handleItemClick}>
                  <Link to={`/protocoles#${getFrenchSectionId(section.id)}`}>
                    {section.title}
                  </Link>
                </li>
              ))}
        </ul>
      </li>
    );
  };

  return (
    <div className="sticky top-0 left-0 z-20">
      <div className="flex items-center justify-between w-full bg-navBlack navbar">
        <div className="flex w-0 navbar-start"></div>
        <div className="flex navbar-center">
          <div className="hidden md:flex">
            <Link to="/">
              <img src={logo} width={80} alt="Logo" />
            </Link>
          </div>
          <ul className="px-1 menu menu-horizontal">
            {createVerticalMenu("theory")}
            {createVerticalMenu("protocols")}
          </ul>
        </div>
        <div className="pr-4">
          <LanguageSwitcher />
        </div>
      </div>
      <div className="w-full h-4 bg-physioBlue"></div>
      {/* Hidden button for shifting focus */}
      <button
        ref={hiddenButtonRef}
        style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
      />
    </div>
  );
};
