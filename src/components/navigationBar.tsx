import React, { useRef } from "react";
import { Link } from "react-router-dom";
import protocolIntro from "../i18n/fr/protocols/protocolIntro.json";
import logo from "../assets/logo.png";

interface LinksList {
  name: string;
  link: string;
}

export const NavigationBar = () => {
  const hiddenButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const createVerticalMenu = (name: LinksList, itemsList: LinksList[]) => {
    const handleItemClick = () => {
      if (hiddenButtonRef.current) {
        hiddenButtonRef.current.focus();
      }
    };

    return (
      <li className="dropdown dropdown-hover">
        <Link to={name.link}>
          <div
            tabIndex={0}
            role="button"
            className="md:text-lg text-slate-400"
            onClick={handleItemClick}
          >
            {name.name}
          </div>
        </Link>
        <ul
          tabIndex={0}
          className="cursor-pointer dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          ref={dropdownRef}
        >
          {itemsList.map((item) => (
            <li key={item.link} onClick={handleItemClick}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </li>
    );
  };

  return (
    <div className="sticky top-0 left-0 z-20">
      <div className="flex items-center justify-center w-full bg-navBlack navbar">
        <div className="flex navbar-center">
          <div className="hidden md:flex">
            <Link to="/">
              <img src={logo} width={80} alt="Logo" />
            </Link>
          </div>
          <ul className="px-1 menu menu-horizontal">
            {createVerticalMenu({ name: "Théorie", link: "/theorie" }, [
              {
                name: "Terminologie et conventions",
                link: "/theorie/terminologie",
              },
              {
                name: "Principes physiques",
                link: "/theorie/principes-physiques",
              },
              {
                name: "La technique",
                link: "/theorie/technique",
              },
              {
                name: "Avantages et limites",
                link: "/theorie/avantages",
              },
            ])}
            {createVerticalMenu(
              { name: "Protocoles", link: "/protocoles" },
              protocolIntro.sections.map((section) => {
                return {
                  name: section.title,
                  link: "/protocoles#" + section.id,
                };
              })
            )}
          </ul>
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
