import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/layouts/Nav";
import Header from "./components/layouts/Header";
import Section from "./components/layouts/Section";
import Article from "./components/layouts/Article";
import Breadcrumbs from "./components/layouts/Breadcrumbs";
import EmptyPage from "./components/layouts/EmptyPage";
import { IoGridOutline, IoAlbumsOutline } from "react-icons/io5";

const menuGroups = [
  [
    {
      title: "시스템 설정",
    },
    {
      title: "알람 메일 설정",
      icon: <IoGridOutline />,
      path: "/",
      element: <Section />,
    },
    {
      title: "CDS 환경 설정",
      path: "/cds-env",
      element: <Article />,
    },
    {
      title: "솔루션 환경 설정",
      path: "/solution-env",
      element: <Article />,
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
        {
          title: "관리자 관리",
          icon: <IoGridOutline />,
          path: "/article",
          element: <Section />,
        },
        {
          title: "관리자 접속 이력",
          path: "/article/test2",
          element: <Article />,
        },
        {
          title: "관리자 차단 해지",
          path: "/article/test3",
          element: <Article />,
        },
      ],
    },
    {
      title: "관리자 감사",
      icon: <IoAlbumsOutline />,
      subMenu: [
        {
          title: "사용자 정책 변경 이력",
          path: "/test4",
          element: <Section />,
        },
        {
          title: "CDS 정책 변경이력",
          path: "/test5",
          element: <Article />,
        },
      ],
    },
  ],
];

function generateRoutes(menuGroups) {
  const routes = [];

  menuGroups.forEach((group) => {
    group.forEach((item) => {
      if (item.path) {
        routes.push(
          <Route key={item.path} path={item.path} element={item.element} />
        );
      }

      if (item.subMenu) {
        item.subMenu.forEach((subItem) => {
          if (subItem.path) {
            routes.push(
              <Route
                key={subItem.path}
                path={subItem.path}
                element={subItem.element}
              />
            );
          }
        });
      }
    });
  });

  return routes;
}

function App() {
  const [navClosed, setNavClosed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleNav = () => {
    setNavClosed(!navClosed);
  };

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div className={`wrap ${isFullscreen ? "fullscreen" : ""}`}>
          <Nav navClosed={navClosed} menuGroups={menuGroups} />
          <main>
            <Header navClosed={navClosed} toggleNav={toggleNav} />
            <section>
              <Breadcrumbs
                toggleFullscreen={toggleFullscreen}
                isFullscreen={isFullscreen}
                menuGroups={menuGroups}
              />
              <Routes>
                {generateRoutes(menuGroups)}
                <Route path="*" element={<EmptyPage />} />
              </Routes>
            </section>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
