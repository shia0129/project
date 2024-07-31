import React from "react";
import TabStyle from "./MainLayout/TabStyle";

function Section() {
  return (
    <section>
      <TabStyle />
      <div style={{ marginTop: "20px" }}></div>
      <TabStyle tabStyles="tab-style2" />
      <div style={{ marginTop: "20px" }}></div>
      <TabStyle tabStyles="tab-style3" />
    </section>
  );
}

export default Section;
