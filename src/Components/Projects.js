import "../CSS/Projects.css";
import "../CSS/style.css";
import videoSearch from "../IMG/video_search.png";
import weather from "../IMG/weather.png";
import naviBar from "../IMG/naviBar.png";
import resume from "../IMG/resume.png";

const Projects = () => {
  const items = [
    {
      title: "Video Search",
      description: "使用React串接Youtube API，使用者可自由搜尋Youtube影片。",
      image: videoSearch,
      link: "https://videosearchgrace.netlify.app/",
    },
    {
      title: "The Weather App",
      description:
        "使用者可輸入任何地名，由串接好的Api取得目前位置的天氣資訊。",
      image: weather,
      link: "https://weatherarduii.netlify.app/",
    },
    {
      title: "The Navi Bar",
      description:
        "使用React練習實作Router功能，並且做了一些小功能,例如:翻譯、Wikipedia搜尋...等等。",
      image: naviBar,
      link: "https://navibar.netlify.app/",
    },
    {
      title: "My Resume",
      description: "個人履歷網站",
      image: resume,
      link: "https://graceresume.netlify.app/",
    },
  ];

  const renderList = () => {
    const newList = items.map((item) => {
      return (
        <div className="project__items" key={item.title}>
          <div className="project__title">{item.title}</div>
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="project__link"
          >
            <img
              src={item.image}
              alt="project_image"
              className="project_image"
            />
          </a>
          <div className="project__description">{item.description}</div>
        </div>
      );
    });

    return newList;
  };

  renderList();

  return (
    <div>
      <div className="title_title">Projects</div>
      <div className="project__container">{renderList()}</div>
    </div>
  );
};

export default Projects;
