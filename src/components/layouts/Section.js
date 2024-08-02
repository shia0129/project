import React from "react";
import TabStyle from "./MainLayout/TabStyle";

const tabs = [
  { id: 1, title: "Tab 1", content: "This is the content of Tab 1." },
  { id: 2, title: "Tab 2", content: "This is the content of Tab 2. " },
  { id: 3, title: "Tab 3", content: "This is the content of Tab 3." },
];
const tabs2 = [
  { id: 1, title: "Tab 2-1", content: "탭 예제 2번-1." },
  { id: 2, title: "Tab 2-2", content: "This is the content of Tab 2. " },
  { id: 3, title: "Tab 2-3", content: "This is the content of Tab 3." },
];
const tabs3 = [
  { id: 1, title: "Tab 3-1", content: "탭 예제 3번." },
  { id: 2, title: "Tab 3-2", content: "This is the content of Tab 2. " },
  { id: 3, title: "Tab 3-3", content: "This is the content of Tab 3." },
];

function Section() {
  return (
    <>
      <TabStyle tabs={tabs} />
      <div style={{ marginTop: "20px" }}></div>
      <TabStyle tabStyles="tab-style2" tabs={tabs2} />
      <div style={{ marginTop: "20px" }}></div>
      <TabStyle tabStyles="tab-style3" tabs={tabs3} />
    </>
  );
}

export default Section;
