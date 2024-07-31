import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

const tabData = [
  { label: "Tab 1", content: "This is the content of Tab 1." },
  { label: "Tab 2", content: "This is the content of Tab 2." },
  { label: "Tab 3", content: "This is the content of Tab 3." },
];

function Tabgroup() {
  return (
    <Tabs className="style1">
      <TabList>
        {tabData.map((tab, index) => (
          <Tab key={index}>{tab.label}</Tab>
        ))}
      </TabList>

      {tabData.map((tab, index) => (
        <TabPanel key={index}>
          <h2>{tab.label}</h2>
          <p>{tab.content}</p>
        </TabPanel>
      ))}
    </Tabs>
  );
}

export default Tabgroup;
