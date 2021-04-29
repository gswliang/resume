import React from "react";
import PersonalDetails from "./personalDetails";
import Description from "./Description";
import "../CSS/style.css";

const App = () => {
  return (
    <div className="main">
      <PersonalDetails
        cName="梁淑文"
        eName="Grace Liang"
        email=" gswliang@gmail.com"
        jobTitle="前端工程師"
        contact="0968 649 865"
      />
      <Description />
    </div>
  );
};

export default App;
