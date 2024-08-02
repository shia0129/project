import { RiFullscreenFill, RiFullscreenExitFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs({ toggleFullscreen, isFullscreen, pathTitles }) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <>
      <div className="breadcrumb">
        <h1>메뉴관리</h1>
        <div>
          <ol className="breadcrumb-item">
            <li>메뉴관리1</li>
            <li>/</li>
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;
              const title = pathTitles[to] || value; // 매핑된 제목 사용

              return isLast ? (
                <li className="breadcrumb-item active" key={to}>
                  {title}
                </li>
              ) : (
                <li className="breadcrumb-item" key={to}>
                  <Link to={to}>{title}</Link>
                </li>
              );
            })}
            <li className="title">메뉴관리</li>
          </ol>
          <span className="screen" onClick={toggleFullscreen}>
            {isFullscreen ? <RiFullscreenExitFill /> : <RiFullscreenFill />}
          </span>
        </div>
      </div>
    </>
  );
}

export default Breadcrumbs;
