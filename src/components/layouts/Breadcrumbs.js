import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { RiFullscreenFill, RiFullscreenExitFill } from "react-icons/ri";

function findPath(menuGroups, path) {
  // console.log(menuGroups);
  for (let group of menuGroups) {
    // console.log(group);
    for (let item of group) {
      if (item.path === path) {
        // console.log(group[0]);

        return [group[0], item];
      }
      if (item.subMenu) {
        for (let subItem of item.subMenu) {
          if (subItem.path === path) {
            return [group[0], item, subItem];
          }
        }
      }
    }
  }
  return [];
}

function Breadcrumbs({ toggleFullscreen, isFullscreen, menuGroups }) {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const paths = findPath(menuGroups, location.pathname);
    setBreadcrumbs(paths);
  }, [location, menuGroups]);

  return (
    <>
      <div className="breadcrumb">
        <h1>
          {breadcrumbs.length ? breadcrumbs[breadcrumbs.length - 1].title : ""}
        </h1>
        <div>
          <ol className="breadcrumb-item">
            {breadcrumbs.map((crumb, index) => (
              <li
                key={index}
                className={index === breadcrumbs.length - 1 ? "title" : ""}
              >
                {crumb.title}
                <span></span>
              </li>
            ))}
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
