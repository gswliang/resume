import "../CSS/Experience.css";
import "../CSS/style.css";
import working from "../IMG/working.svg";

const Experience = () => {
  const jobs = [
    {
      jobTitle: "韌體實習工程師",
      company: "樸緻股份有限公司",
      location: "台中, 台灣",
      period: "Apr 2020 ~ Feb 2021",
      description:
        "使用Nordic nRF 51822搭配感測器測水質，以不同的timer做控制，使用感測器電壓計算水質，並且將水質資料儲存到韌體的EEPROM，當晶片和手機連接時，再將資料傳送到手機端,由於MCU並沒有現實時間計算功能，我利用MCU和手機連接時取得目前時間，並且使用timer同步目前現實時間。",
    },
    {
      jobTitle: "Shop Owner",
      company: "Liquor Store",
      location: "Pretoria, South Africa",
      period: "Nov 2014 ~ May 2017",
      description: "",
    },

    {
      jobTitle: "Sales Manager",
      company: "Repo Wild 15 (pty) Ltd",
      location: "Pretoria, South Africa",
      period: "Mar 2004 ~ June 2014",
      description: "",
    },
  ];

  const renderList = () => {
    const newRender = jobs.map((job) => {
      return (
        <div className="experience" key={job.jobTitle}>
          <div className="experience__title">
            <img className="experience_icon" src={working} alt="work icon" />
            <div className="experience__jobtitle">{job.jobTitle} ·</div>
            <div className="experience__company">{job.company}</div>
          </div>
          <div className="period_location">
            <div className="experience__period">{job.period}</div>
            <div className="experience_location">{job.location}</div>
          </div>
          <div className="experience__description">{job.description}</div>
        </div>
      );
    });

    return newRender;
  };

  return (
    <div>
      <div className="title_title">Experience</div>
      <div>{renderList()}</div>
    </div>
  );
};

export default Experience;
