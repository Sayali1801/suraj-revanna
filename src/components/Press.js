import "../styles/Press.css";
import InitiativesPhoto from "../assets/InitiativesPhoto.JPG";
import touch_poster from "../assets/touch-_poster.JPG";
import new2 from "../assets/new2.png";
import news3 from "../assets/news3.png";
import { useState } from "react";
function Press() {
  const [extra, setExtra] = useState("extra-news");
  function extraNews() {
    // setExtra(btn?<span/>:<span/>)
  }
  return (
    <div className="press-main">
      <h1>
        <b id="first-letter">N</b>ew<b id="last-word">s</b>
      </h1>
      <p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.agna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.
      </p>
      <div className="img-main">
        <div>
          <img src={touch_poster} alt="news-1" className="news-1" />
          <a
            href="https://www.youtube.com/embed/vn-r45PzRFQ"
            target="_blank"
            rel="noreferrer"
          >
            <p>
              Dr.Suraj Revanna Cup 3.0 Trophy Launch Event on 6th December 2022
            </p>
          </a>
        </div>

        <div>
          <img src={new2} alt="news-1" className="news-2" />
          <a
            href="https://www.thehindu.com/news/national/karnataka/first-family-of-politics-jds-has-a-presence-in-every-house-in-karnataka/article37958173.ece"
            target="_blank"
            rel="noreferrer"
          >
            <p>
              First family of politics: JD(S) has a presence in every House in
              Karnataka, India
            </p>
          </a>
        </div>

        <div className="read-more-btn">
          <p onClick={extra}>Read More ︾</p>
        </div>
        <div className="extra-news">
          <img src={news3} alt="news-1" className="news-3" />
          <a
            href="https://www.thehindu.com/news/national/karnataka/suraj-revanna-files-papers/article37586519.ece"
            target="_blank"
            rel="noreferrer"
          >
            <p>Dr.Suraj Revanna files papers</p>
          </a>
        </div>
        <div className="extra-news">
          <img src={InitiativesPhoto} alt="news-1" className="news-4" />
          <a
            href="https://www.youtube.com/embed/MLrRJVNPWxQ"
            target="_blank"
            rel="noreferrer"
          >
            <p>
              Dr. Suraj Revanna Wins from over 1000 votes In Hassan | karnataka
              MLC Election Results 2021
            </p>
          </a>
        </div>
        <span className="extra-news">
          <img src={InitiativesPhoto} alt="news-1" className="news-5" />
          <a
            href="https://www.newindianexpress.com/states/karnataka/2021/nov/19/ex-pm-devegowdas-grandson-suraj-revanna-enters-politics-files-nomination-for-mlc-election-2385699.html"
            target="_blank"
            rel="noreferrer"
          >
            <p>
              Ex-PM Devegowda's grandson Suraj Revanna enters politics, files
              nomination for MLC election
            </p>
          </a>
        </span>
        <span className="extra-news">
          <img src={InitiativesPhoto} alt="news-1" className="news-6" />
          <a
            href="https://www.daijiworld.com/news/newsDisplay?newsID=895283"
            target="_blank"
            rel="noreferrer"
          >
            <p>
              Kumaraswamy announces Dr. Suraj Revanna as MLC candidate from
              Hassan
            </p>
          </a>
        </span>
      </div>
    </div>
  );
}
export default Press;
