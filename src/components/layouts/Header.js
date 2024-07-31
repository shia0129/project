import React, { useState } from "react";
import {
  IoNotificationsOutline,
  IoMenu,
  IoSettingsOutline,
} from "react-icons/io5";
import Notification from "./MainLayout/Notification";

function Header({ navClosed, toggleNav }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
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
        <div className="ctrl">
          <div>
            <i className={isMenuOpen ? "on" : ""} onClick={toggleMenu}>
              <IoNotificationsOutline />
            </i>
            <Notification isMenuOpen={isMenuOpen} />
            <span className="num">100</span>
          </div>
          <div>
            <i>
              <IoSettingsOutline />
            </i>
            <div style={{ display: "none" }} className="list">
              <input id="check" type="checkbox" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
