import "../styles/GetTouch.css";
import contact from "../assets/contact.JPG";
function GetTouch() {
  return (
    <div >
      <div className="Get-touch-main">
        <h1 className="touch-main-heading">
          <b id="first-letter">G</b>et In Tou<b id="last-letter">ch</b>
        </h1>
        <div className="Get-touch-form">
          <img src={contact} alt="touch-form" className="touch-form-photo" />
          <form className="touch-form">
            <input type="text" placeholder="Hey, Tell your name" /> <br />
            <input type="text" placeholder="Whta's your mail is?" /> <br />
            <input
              type="number"
              placeholder="Your Number?"
            />{" "}
            <br />
            <input type="text" placeholder="Message" />
            <br />
            <p></p>
            <button className="submit-btn">
              Submit <b>→</b>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default GetTouch;
