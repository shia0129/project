import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";

const NavGroup = ({ menuItems }) => {
  console.log(menuItems[0].title);
  const [activeMenus, setActiveMenus] = useState([]);
  const [activeSubMenuIndex, setActiveSubMenuIndex] = useState({});

  const toggleMenu = (index) => {
    setActiveMenus((prevState) =>
      prevState.includes(index)
        ? prevState.filter((i) => i !== index)
        : [...prevState, index]
    );
  };

  const handleSubMenuClick = (menuIndex, subIndex) => {
    setActiveMenus([menuIndex]);
    setActiveSubMenuIndex({ [menuIndex]: subIndex });
  };

  return (
    <ul className="nav-links">
      <span>{menuItems.title}1111</span>
      {menuItems.map((item, index) => (
        <>
          {!item.subMenu ? (
            <li
              key={index}
              className={`menu-item ${
                activeMenus.includes(index) ? "active showMenu" : ""
              }`}
              onClick={() => handleSubMenuClick(index)}
            >
              <div onClick={() => toggleMenu(index)}>
                <NavLink to={item.path}>
                  <span className="title">
                    <i>{item.icon}</i>
                    <span className="link_name">{item.title}</span>
                  </span>
                </NavLink>
              </div>
            </li>
          ) : (
            <li
              key={index}
              className={`menu-item ${
                activeMenus.includes(index) ? "active showMenu" : ""
              }`}
            >
              <div onClick={() => toggleMenu(index)}>
                <span className="title">
                  <i>{item.icon}</i>
                  <span className="link_name">{item.title}</span>
                </span>
                <i className="arrow">
                  <IoChevronDown />
                </i>
              </div>
              {item.subMenu && (
                <ul className="sub-menu blank">
                  {/* <li className="link_name">{item.title}</li> 서브 타이틀*/}
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <NavLink
                        id={subIndex}
                        to={subItem.path}
                        className={
                          activeSubMenuIndex[index] === subIndex ? "on" : ""
                        }
                        onClick={() => handleSubMenuClick(index, subIndex)}
                      >
                        {subItem.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )}
        </>
      ))}
    </ul>
  );
};

export default NavGroup;
