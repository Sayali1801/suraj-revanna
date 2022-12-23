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
      <h1 className="kannada">
        <b id="first-letter">ನ್ಯೂ</b><b id="last-word">ಸ್</b>
      </h1>
      <p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.agna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.
      </p>
      <p className="kannada">
      ಎಕ್ಸೆಪ್ಟಿಯರ್ ಸಿಂಟ್ ಒಕೆಕಾಟ್ ಕ್ಯುಪಿಡಾಟ್ ನಾನ್ ಪ್ರೊಡೆಡೆಂಟ್, ಕಲ್ಪಾ ಕ್ವಿ
         ಅಫಿಷಿಯಾ ಡೆಸೆರಂಟ್ ಮೊಲಿಟ್ ಅನಿಮ್ ಐಡಿ ಎಸ್ಟ್ ಲೇಬರ್.ಆಗ್ನಾ ಅಲಿಕ್ವಾ. ಇದು ಎನಿಮ್ ಜಾಹೀರಾತು
         ಮಿನಿಮ್ ವೆನಿಯಮ್, ಕ್ವಿಸ್ ನಾಸ್ಟ್ರುಡ್ ಎಕ್ಸರ್ಸಿಟೇಶನ್ ಉಲ್ಲಮ್ಕೊ ಲೇಬರಿಸ್ ನಿಸಿ ಯುಟ್ ಅಲಿಕ್ವಿಪ್
         ಮಾಜಿ ಕಮೊಡೊ ಪರಿಣಾಮ.
      </p>
      <div className="img-main">
        <span>
          <img src={touch_poster} alt="news-1" className="news-1" />
          <a
            href="https://www.youtube.com/embed/vn-r45PzRFQ"
            target="_blank"
            rel="noreferrer"
          >
            <p>
              Dr.Suraj Revanna Cup 3.0 Trophy Launch Event on 6th December 2022
            </p>
            <p className="kannada">ಮೈಸೂರಿನಲ್ಲಿ ಡಾ.ಸೂರಜ್ ರೇವಣ್ಣ ಕಪ್ 3.0  </p>
          </a>
        </span>

        <span>
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
            {/* <p className="kannada">ರಾಜಕೀಯದ ಮೊದಲ ಕುಟುಂಬ: ಪ್ರತಿ ಸದನದಲ್ಲಿ ಜೆಡಿಎಸ್‌ನ ಅಸ್ತಿತ್ವವಿದೆ
               ಕರ್ನಾಟಕ, ಭಾರತ</p> */}
          </a>
        </span>
    {/* {btn && <></> } */}
        <div className="read-more-btn">
          <p onClick={extra}>Read More ︾</p>
        </div>
        <span className="extra-news">
          <img src={news3} alt="news-1" className="news-3" />
          <a
            href="https://www.thehindu.com/news/national/karnataka/suraj-revanna-files-papers/article37586519.ece"
            target="_blank"
            rel="noreferrer"
          >
            <p>Dr.Suraj Revanna files papers</p>
            <p className="kannada">ಡಾ.ಸೂರಜ್ ರೇವಣ್ಣ ದಾಖಲೆಗಳನ್ನು ಸಲ್ಲಿಸಿದರು</p>
          </a>
        </span>
        <span className="extra-news">
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
            <p className="kannada">ಹಾಸನದಲ್ಲಿ ೧೦೦೦ ಮತಗಳಿಂದ ಡಾ.ಸೂರಜ್ ರೇವಣ್ಣ ಗೆಲುವು | ಕರ್ನಾಟಕ
               ವಿಧಾನ ಪರಿಷತ್ ಶಾಸಕರು ಚುನಾವಣಾ ಫಲಿತಾಂಶಗಳು ೨೦೨೧</p>
          </a>
        </span>
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
            <p className="kannada">ಮಾಜಿ ಪ್ರಧಾನಿ ದೇವೇಗೌಡರ ಮೊಮ್ಮಗ ಸೂರಜ್ ರೇವಣ್ಣ ರಾಜಕೀಯಕ್ಕೆ ಎಂಟ್ರಿ!
            ವಿಧಾನ  ಪರಿಷತ್ ಶಾಸಕರು  ಚುನಾವಣೆಗೆ ನಾಮನಿರ್ದೇಶನ</p>
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
            <p className="kannada">
            ನಿಂದ ಎಂಎಲ್‌ಸಿ ಅಭ್ಯರ್ಥಿಯಾಗಿ ಡಾ. ಸೂರಜ್ ರೇವಣ್ಣ ಅವರನ್ನು ಕುಮಾರಸ್ವಾಮಿ ಘೋಷಿಸಿದರು
               ಹಾಸನ
            </p>
          </a>
        </span>
      </div>
    </div>
  );
}
export default Press;
