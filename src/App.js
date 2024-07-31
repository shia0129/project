import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/layouts/Nav";
import Header from "./components/layouts/Header";
import Section from "./components/layouts/Section";
import Article from "./components/layouts/Article";

import EmptyPage from "./components/layouts/EmptyPage";

function App() {
  const [navClosed, setNavClosed] = useState(false);

  const toggleNav = () => {
    setNavClosed(!navClosed);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div className="wrap">
          <Nav navClosed={navClosed} />
          <main>
            <Header navClosed={navClosed} toggleNav={toggleNav} />
            <Routes>
              <Route path="/" element={<Section />} />
              <Route path="/article" element={<Article />} />
              <Route path="*" element={<EmptyPage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
