import React, { useState, useRef, useEffect } from "react";

const tabs = [
  { id: 1, title: "Tab 1", content: "This is the content of Tab 1." },
  { id: 2, title: "Tab 2", content: "This is the content of Tab 2. " },
  { id: 3, title: "Tab 3", content: "This is the content of Tab 3." },
];

function TabStyle({ tabStyles }) {
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
