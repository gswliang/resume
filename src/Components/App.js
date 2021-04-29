import React from "react";
import PersonalDetails from "./personalDetails";
import Description from "./Description";
import Experience from "./Experience";
import "../CSS/style.css";

const App = () => {
  return (
    <div className="main">
      <PersonalDetails />
      <Description />
      <Experience />
    </div>
  );
};

export default App;
