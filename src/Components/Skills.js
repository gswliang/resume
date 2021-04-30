import "../CSS/style.css";
import "../CSS/Skills.css";
import python from "../IMG/python.png";
import c from "../IMG/cNew.png";
import JavaScript from "../IMG/javascript.png";
import html from "../IMG/html.png";
import css from "../IMG/css.png";
import reactIMG from "../IMG/react.png";
import reduxIMG from "../IMG/redux.png";
import arduino from "../IMG/arduino.png";

const Skills = () => {
  const skills = [
    {
      lang: "JavaScript",
      IMG: JavaScript,
    },
    {
      lang: "HTML",
      IMG: html,
    },
    {
      lang: "CSS",
      IMG: css,
    },
    {
      lang: "React",
      IMG: reactIMG,
    },
    {
      lang: "Redux",
      IMG: reduxIMG,
    },

    {
      lang: "Python",
      IMG: python,
    },
    {
      lang: "C/C++",
      IMG: c,
    },
    {
      lang: "Arduino",
      IMG: arduino,
    },
  ];

  const renderList = () => {
    return skills.map((skill) => {
      return (
        <div className="skill__items" key={skill.lang}>
          <img
            src={skill.IMG}
            alt="skill logos"
            className={`skill__logo ${skill.lang}`}
          />
          <div className="skill__lang">{skill.lang}</div>
        </div>
      );
    });
  };

  return (
    <div>
      <div className="title_title">Skills</div>
      <div className="skill__container">{renderList()}</div>
    </div>
  );
};

export default Skills;
