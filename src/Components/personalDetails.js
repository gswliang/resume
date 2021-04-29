import "../CSS/PersonalDetails.css";
import Grace from "../IMG/Grace.jpg";
import gmail from "../IMG/gmail.svg";
import phone from "../IMG/phone.svg";

const PersonalDetails = ({ cName, eName, email, contact, jobTitle }) => {
  return (
    <div>
      <div className="personal">
        <img src={Grace} alt="Grace" className=" photo" />
        <div className="personal__item">
          <div className="personal__item--cName">{cName}</div>
          <div className="personal__item--eName">{eName}</div>
          <div className="personal__item--jobTitle">{jobTitle}</div>
        </div>
        <div className="contact">
          <img src={gmail} alt="gmail icon" className="contact--iconGmail" />
          <div className="contact--email">{email}</div>
          <img src={phone} alt="phone icon" className="contact--iconPhone" />
          <div className="contact--phone"> {contact}</div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
