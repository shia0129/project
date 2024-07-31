import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoChevronDown, IoGridOutline, IoAlbumsOutline } from "react-icons/io5";

const NavGroup = () => {
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
              <NavLink to={item.path}>
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
                <li>{item.title}</li>
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

const menuGroups = [
  [
    {
      title: "시스템 설정",
    },
    {
      title: "알람 메일 설정",
      icon: <IoGridOutline />,
      path: "/",
    },
    {
      title: "CDS 환경 설정",
      path: "/",
    },
    {
      title: "솔루션 환경 설정",
      path: "/",
    },
  ],
  [
    {
      title: "관리자",
    },
    {
      title: "관리자 정보 관리",
      icon: <IoAlbumsOutline />,
      subMenu: [
        { title: "관리자 관리", icon: <IoGridOutline />, path: "/article" },
        { title: "관리자 접속 이력", path: "/article/test2" },
        { title: "관리자 차단 해지", path: "/article/test2" },
      ],
    },
    {
      title: "관리자 감사",
      icon: <IoAlbumsOutline />,
      subMenu: [
        { title: "사용자 정책 변경 이력", path: "/article/test3" },
        { title: "CDS 정책 변경이력", path: "/article/test4" },
      ],
    },
  ],
  // 추가적인 menuItems 배열을 여기에 추가
];

export default NavGroup;
