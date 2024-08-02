import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";

const NavGroup = ({ menuGroups }) => {
  // 각 메뉴 그룹의 활성 상태를 관리하는 state
  const [activeMenus, setActiveMenus] = useState({});
  // 각 서브 메뉴의 활성 상태를 관리하는 state
  const [activeSubMenuIndex, setActiveSubMenuIndex] = useState({});

  // 메뉴 항목 클릭 시 활성화/비활성화 토글 함수
  const toggleMenu = (groupIndex, index) => {
    setActiveMenus((prevState) => {
      const currentGroupState = prevState[groupIndex] || [];
      return {
        ...prevState,
        [groupIndex]: currentGroupState.includes(index)
          ? currentGroupState.filter((i) => i !== index)
          : [...currentGroupState, index],
      };
    });
  };

  // 서브 메뉴 항목 클릭 시 활성화/비활성화 토글 함수
  const handleSubMenuClick = (groupIndex, menuIndex, subIndex) => {
    setActiveMenus({ [groupIndex]: [menuIndex] });
    setActiveSubMenuIndex({ [groupIndex]: { [menuIndex]: subIndex } });
  };

  // 각 메뉴 그룹을 렌더링하는 함수
  const renderMenuItems = (groupIndex, items) =>
    items.map((item, index) => (
      <>
        {!item.subMenu ? (
          /* 서브 메뉴가 없는 경우 */
          <li
            key={index}
            className={`menu-item ${
              (activeMenus[groupIndex] || []).includes(index)
                ? "active showMenu"
                : ""
            }`}
            onClick={() => handleSubMenuClick(groupIndex, index)}
          >
            <div onClick={() => toggleMenu(groupIndex, index)}>
              <NavLink to={item.path} id={groupIndex}>
                <span className="title">
                  <i>{item.icon}</i>
                  <span className="link_name">{item.title}</span>
                </span>
              </NavLink>
            </div>
          </li>
        ) : (
          /* 서브 메뉴가 있는 경우 */
          <li
            key={index}
            className={`menu-item ${
              (activeMenus[groupIndex] || []).includes(index)
                ? "active showMenu"
                : ""
            }`}
          >
            <div onClick={() => toggleMenu(groupIndex, index)}>
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
                <li key={index}>{item.title}</li>
                {item.subMenu.map((subItem, subIndex) => (
                  <>
                    <li key={subIndex}>
                      <NavLink
                        id={subIndex}
                        to={subItem.path}
                        className={
                          activeSubMenuIndex[groupIndex] &&
                          activeSubMenuIndex[groupIndex][index] === subIndex
                            ? "on"
                            : ""
                        }
                        onClick={() =>
                          handleSubMenuClick(groupIndex, index, subIndex)
                        }
                      >
                        <>{subItem.icon}</>
                        {subItem.title}
                      </NavLink>
                    </li>
                  </>
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
          {renderMenuItems(idx, menu.slice(1))}
        </ul>
      ))}
    </>
  );
};

export default NavGroup;
