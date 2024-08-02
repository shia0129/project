import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/layouts/Nav";
import Header from "./components/layouts/Header";
import Section from "./components/layouts/Section";
import Article from "./components/layouts/Article";
import Breadcrumbs from "./components/layouts/Breadcrumbs";

import EmptyPage from "./components/layouts/EmptyPage";

function App() {
  const [navClosed, setNavClosed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleNav = () => {
    setNavClosed(!navClosed);
  };

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };
  const pathTitles = {
    "/": "알람 메일 설정",
    "/cds-env": "CDS 환경 설정",
    "/solution-env": "솔루션 환경 설정",
    "/article": "관리자 관리",
    "/article/test2": "관리자 접속 이력",
    "/article/test3": "사용자 정책 변경 이력",
    "/article/test4": "CDS 정책 변경이력",
  };
  return (
    <div className="App">
      <BrowserRouter>
        <div className={`wrap ${isFullscreen ? "fullscreen" : ""}`}>
          <Nav navClosed={navClosed} />
          <main>
            <Header navClosed={navClosed} toggleNav={toggleNav} />
            <section>
              <Breadcrumbs
                pathTitles={pathTitles}
                toggleFullscreen={toggleFullscreen}
                isFullscreen={isFullscreen}
              />
              <Routes>
                <Route path="/" element={<Section />} />
                <Route path="/article" element={<Article />} />
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
