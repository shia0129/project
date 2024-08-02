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
    },
    {
      title: "CDS 환경 설정",
      icon: <IoGridOutline />,
      path: "/cds-env",
    },
    {
      title: "솔루션 환경 설정",
      icon: <IoGridOutline />,
      path: "/solution-env",
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
        { title: "관리자 차단 해지", path: "/article/test3" },
      ],
    },
    {
      title: "관리자 감사",
      icon: <IoAlbumsOutline />,
      subMenu: [
        { title: "사용자 정책 변경 이력", path: "/section/test4" },
        { title: "CDS 정책 변경이력", path: "/section/test5" },
      ],
    },
  ],
  // 추가적인 menuItems 배열을 여기에 추가
];

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
                // pathTitles={pathTitles}
                toggleFullscreen={toggleFullscreen}
                isFullscreen={isFullscreen}
                menuGroups={menuGroups}
              />
              <Routes>
                <Route path="/" element={<Section />} />
                <Route path="/cds-env" element={<Article />} />
                <Route path="/solution-env" element={<Section />} />
                <Route path="/article" element={<Article />} />
                <Route path="/article/test2" element={<Article />} />
                <Route path="/article/test3" element={<Article />} />
                <Route path="/section/test4" element={<Section />} />
                <Route path="/section/test5" element={<Section />} />
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
