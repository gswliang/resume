import "../CSS/PersonalDetails.css";
import Grace from "../IMG/Grace.jpg";
import gmail from "../IMG/mail.png";
import phone from "../IMG/phone.png";
import github from "../IMG/GitHub-Mark.png";

const PersonalDetails = () => {
  const cName = "梁淑文";
  const eName = "(Grace)";
  const email = " gswliang@gmail.com";
  const jobTitle = "前端工程師";
  const contact = "0968 649 865";
  const Github = "github.com/gswliang";

  const renderList = () => {
    return (
      <div className="personal__container">
        <img src={Grace} alt="Grace" className="personal__photo" />
        <div className="personal__detail">
          <div className="personal__item">
            <div className="personal__item--cName">{cName}</div>
            <div className="personal__item--eName">{eName}</div>
            <div className="personal__item--jobTitle">{jobTitle}</div>
          </div>
          <div className="contact">
            <div className="contact__email">
              <img
                src={gmail}
                alt="gmail icon"
                className="contact--iconGmail"
              />
              <a href={`mailto:${email}`} className="contact__email">
                {email}
              </a>
            </div>
            <div className="contact__phone">
              <img
                src={phone}
                alt="phone icon"
                className="contact--iconPhone"
              />
              <p>{contact}</p>
            </div>
            <div className="contact__github">
              <img
                src={github}
                alt="github-mark"
                className="social__github--img"
              />
              <a
                href="https://www.github.com/gswliang"
                className="social__github"
                target="_blank"
                rel="noreferrer"
              >
                {Github}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <div>{renderList()}</div>;
};

export default PersonalDetails;
