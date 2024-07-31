import NavGroup from "./MainLayout/NavGroup";
import { IoSearch } from "react-icons/io5";
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
          <NavGroup />
        </ul>
      </nav>
    </>
  );
}

export default Nav;
