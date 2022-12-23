import "../styles/Press.css";
import InitiativesPhoto from "../assets/InitiativesPhoto.JPG";
import touch_poster from "../assets/touch-_poster.JPG";
import new2 from "../assets/new2.png";
import news3 from "../assets/news3.png";
import English from "../English.json";
import Kannada from "../Kannada.json";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Press() {
  const curLang = useSelector((state) => state.language.webLanguage);
  const [Lang, setLang] = useState(English);

  useEffect(() => {
    if (curLang === "english") setLang(English);
    else if (curLang === "kannada") setLang(Kannada);
  }, [curLang]);

  return (
    <div className="press-main">
      <h1>
        {Lang.News_component.title}
        {/* <b id="first-letter">N</b>ew<b id="last-word">s</b> */}
      </h1>
      <p>{Lang.News_component.description}</p>
      <div className="img-main">
        <div>
          <img src={touch_poster} alt="news-1" className="news-1" />
          <a
            href="https://www.youtube.com/embed/vn-r45PzRFQ"
            target="_blank"
            rel="noreferrer"
          >
            <p>{Lang.News_component.first} </p>
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
            {Lang.News_component.second}
            </p>
          </a>
        </div>

        <div className="read-more-btn">
          <p>Read More ︾</p>
        </div>
        <div className="extra-news">
          <img src={news3} alt="news-1" className="news-3" />
          <a
            href="https://www.thehindu.com/news/national/karnataka/suraj-revanna-files-papers/article37586519.ece"
            target="_blank"
            rel="noreferrer"
          >
            <p>{Lang.News_component.third}</p>
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
            {Lang.News_component.fourth}
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
            {Lang.News_component.fifth}
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
            {Lang.News_component.sixth}
            </p>
          </a>
        </span>
      </div>
    </div>
  );
}
export default Press;
