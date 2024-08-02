import NavGroup from "./MainLayout/NavGroup";
import { IoSearch, IoGridOutline, IoAlbumsOutline } from "react-icons/io5";
function Nav({ navClosed }) {
  return (
    <>
      <nav className={navClosed ? "close" : ""}>
        <div className="logo-details">
          <div className="logo-s"></div>
        </div>
        <div className="nav-search">
          <input type="text" placeholder="메뉴명을 입력하세요." />
          <i>
            <IoSearch />
          </i>
        </div>
        <ul className="nav-links">
          <NavGroup menuGroups={menuGroups} />
        </ul>
      </nav>
    </>
  );
}
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
export default Nav;
