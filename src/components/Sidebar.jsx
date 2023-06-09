import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GiEarthAmerica } from "react-icons/gi";
import { IoLogoGameControllerA } from "react-icons/io";
import { FaHackerrank } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-sky-500/100";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dart:text-white text-slate-900"
            >
              <IoLogoGameControllerA />
              <span>App title</span>
            </Link>

            <div>
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </div>
          </div>
          <div className="mt-5">
            <NavLink
              to="/"
              key="Home"
              onClick={handleCloseSideBar}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <GiEarthAmerica />
              <span>Explore</span>
            </NavLink>

            <NavLink
              to="/setting"
              key="Setting"
              onClick={handleCloseSideBar}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <FaHackerrank />
              <span>Setting</span>
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
