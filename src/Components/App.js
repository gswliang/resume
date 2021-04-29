import React from "react";
import PersonalDetails from "./personalDetails";
import Description from "./Description";
import Experience from "./Experience";
import Education from "./Education";
import "../CSS/style.css";

const App = () => {
  return (
    <div className="main">
      <PersonalDetails />
      <Description />
      <Experience />
      <Education />
    </div>
  );
};

export default App;
