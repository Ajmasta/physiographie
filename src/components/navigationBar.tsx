import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export const NavigationBar = () => {
  const createVerticalMenu = (name: string, itemsList: string[]) => {
    return (
      <li className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="text-slate-400">
          {name}
        </div>
        <ul
          tabIndex={0}
          className=" cursor-pointer dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {itemsList.map((item) => (
            <li>
              <Link to="/protocols">{item}</Link>
            </li>
          ))}
        </ul>
      </li>
    );
  };
  return (
    <div className="sticky top-0 left-0 z-20">
      <div className=" bg-navBlack navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" cursor-pointer menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="text-gray-100">Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>test</a>
                  </li>
                  <li>
                    <a>test</a>
                  </li>
                  <li>
                    <a>test</a>
                  </li>
                  <li>
                    <a>test</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden navbar-center lg:flex">
          <img src={logo} width={80} />
          <ul className="px-1 menu menu-horizontal">
            {createVerticalMenu("Théorie", [
              "Terminologie et conventions",
              "Principes physiques",
              "La technique",
              "L'équipement",
            ])}

            {createVerticalMenu("Protocoles", ["Tronc", "Jambe"])}
            {createVerticalMenu("Formation", ["Tronc", "Jambe"])}
            {createVerticalMenu("Protocoles", ["Tronc", "Jambe"])}
            {createVerticalMenu("Pour en savoir plus", ["Tronc", "Jambe"])}
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
      <div className="w-full h-4 bg-physioBlue"></div>
    </div>
  );
};
