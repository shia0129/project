import React, { useState, useEffect, useRef } from "react";
import {
  IoNotificationsOutline,
  IoMenu,
  IoSettingsOutline,
} from "react-icons/io5";
import Notification from "./MainLayout/Notification";
import Settings from "./MainLayout/Settings";

function Header({ navClosed, toggleNav }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const ctrlRef = useRef(null);

  const toggleMenu = (menuId) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
  };

  const handleClickOutside = (event) => {
    if (ctrlRef.current && !ctrlRef.current.contains(event.target)) {
      setActiveMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <header>
        <div>
          <i
            className={navClosed ? "side_on bx-menu" : "bx-menu"}
            onClick={toggleNav}
          >
            <IoMenu />
          </i>

          <h1>사용자</h1>
        </div>
        <div className="ctrl" ref={ctrlRef}>
          <div>
            <i
              className={activeMenu === "notifications" ? "on" : ""}
              onClick={() => toggleMenu("notifications")}
            >
              <IoNotificationsOutline />
            </i>
            <span className="num">100</span>
            <Notification isMenuOpen={activeMenu === "notifications"} />
          </div>
          <div>
            <i
              className={activeMenu === "settings" ? "on" : ""}
              onClick={() => toggleMenu("settings")}
            >
              <IoSettingsOutline />
            </i>
            <Settings isMenuOpen={activeMenu === "settings"} />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
