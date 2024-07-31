import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoChevronDown, IoGridOutline, IoAlbumsOutline } from "react-icons/io5";

const NavGroup = () => {
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

  const renderMenuItems = (items) =>
    items.map((item, index) => (
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
    ));

  return (
    <>
      {menuGroups.map((menu, idx) => (
        <ul key={idx}>
          <span>{menu[0].title}</span>
          {renderMenuItems(menu.slice(1))}
        </ul>
      ))}
    </>
  );
};
const menuGroups = [
  [
    {
      title: "제목1",
    },
    {
      title: "Dashboard",
      icon: <IoGridOutline />,
      path: "/",
    },
    {
      title: "Category",
      icon: <IoAlbumsOutline />,
      subMenu: [
        { title: "JavaScript", path: "/article" },
        { title: "Test2", path: "/article/test2" },
        { title: "Test3", path: "/article/test3" },
        { title: "Test4", path: "/article/test4" },
      ],
    },
  ],
  [
    {
      title: "제목2",
    },
    {
      title: "Dashboard2",
      icon: <IoGridOutline />,
      path: "/",
    },
    {
      title: "Test",
      icon: <IoAlbumsOutline />,
      subMenu: [
        { title: "JavaScript", path: "/article" },
        { title: "Test2", path: "/article/test2" },
        { title: "Test3", path: "/article/test3" },
        { title: "Test4", path: "/article/test4" },
      ],
    },
  ],
  // 추가적인 menuItems 배열을 여기에 추가
];
export default NavGroup;
