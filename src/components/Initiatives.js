import "../styles/Initiatives2.css";
import Initiatives1 from "../assets/initiatives1.png";
import Initiatives2 from "../assets/initiatives2.png";
function Initiatives() {
  return (
    <div className="Initiatives-main">
      <h1 className="title">
        <b id="first-word">In</b>itiativ<b id="last-word">es</b>
      </h1>
      <div className="Initives-top">
        <img src={Initiatives1} alt="top-carasoul" id="left-carasoul" />
        <p id="top-text">
          <h1>Lorem ipsum</h1>
          Dr. Suraj Revanna Cup 3.0 Trophy Launching Program organized by Suraj
          Revanna "Sports" and "Culture Association" at Lalitha Mahal premises,
          Mysore was discussed at length in the meeting.
          Talents sports academy, specialized in all games, helps in inducing,
          improvising and intelligently driving the passion towards game. With
          the involvement shown by students, participants and players, Talents
          sports academy transforms people to excel in their fields. Be it
          involved in sports, We at talent sports take the utmost care to bring
          out the best in people. We provide the best in class infrastructure,
          highly standardized guidelines and flexible timing for the courses we
          involved in sports, We at talent sports take the utmost care to bring
          out the best in people. We provide the best in class infrastructure,
          highly standardized guidelines and flexible timing for the courses we

        </p>
      </div>
      <div className="Initives-bottom">
        <p id="bottom-text">
          <h1>Lorem ipsum</h1>
          Talents sports academy, specialized in all games, helps in inducing,
          improvising and intelligently driving the passion towards game. With
          the involvement shown by students, participants and players, Talents
          sports academy transforms people to excel in their fields. Be it
          motivating a toddler towards sports or helping an elderly to get
          involved in sports, We at talent sports take the utmost care to bring
          out the best in people. We provide the best in class infrastructure,
          highly standardized guidelines and flexible timing for the courses we
          offer. We know this is passion for you and so we ensure your personal
          interests are respected by the sporting community across the city.
        </p>
        <img src={Initiatives2} alt="bottom-carasoul" id="right-carasoul" />

      </div>
    </div>
  );
}
export default Initiatives;
