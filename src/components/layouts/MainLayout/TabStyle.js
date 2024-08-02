import React, { useState, useRef, useEffect } from "react";

function TabStyle({ tabStyles, tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [tabStyle, setTabStyle] = useState({});
  const tabRef = useRef(null);

  useEffect(() => {
    const activeTabElement = tabRef.current.querySelector(".active");
    if (activeTabElement) {
      setTabStyle({
        left: activeTabElement.offsetLeft,
        width: activeTabElement.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div className={`${tabStyles}`}>
      <div className="tabs" ref={tabRef}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`tab-${tab.id}`}
            className={`tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </div>
        ))}
        <div className="tab-slider" style={tabStyle}></div>
      </div>
      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane ${activeTab === tab.id ? "active" : ""}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabStyle;
