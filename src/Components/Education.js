import "../CSS/style.css";
import "../CSS/Education.css";
import willow from "../IMG/willowridge.png";
import ncnu from "../IMG/ncnu.png";

const Education = () => {
  const details = [
    {
      period: "1999-2004",
      school: "Willowridge High School",
      detail: "高中",
      img: willow,
    },
    {
      period: "2017-2021",
      school: "國立暨南大學",
      detail: "資訊工程學系",
      img: ncnu,
    },
  ];

  const renderList = () => {
    const detail = details.map((detail) => {
      return (
        <div className="edu" key={detail.school}>
          <img
            src={detail.img}
            alt="college_logo"
            className="education__image"
          />
          <div className="education__items" key={detail.school}>
            <div className="education__period">{detail.period}</div>
            <div className="education__school">{detail.school}</div>
            <div className="education__detail">{detail.detail}</div>
          </div>
        </div>
      );
    });

    return detail;
  };

  return (
    <div>
      <div className="title_title">Education</div>
      <div className="education__container">{renderList()}</div>
    </div>
  );
};

export default Education;
