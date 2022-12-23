import "../styles/About.css";
import gallaryPic from "../assets/gallaryPic.JPG";
import i18n from 'i18next'

import { useTranslation } from "react-i18next";
import { initReactI18next } from "react-i18next";
i18n.use(initReactI18next).init({
  resources:{
    translation:{
      "title":"About Dr.Suraj Revanna",

    },
    kn:{
      translation:{
        "title":"ಡಾ .ಸೂರಜ್ ರೇವಣ್ಣ  ಅವರ ಬಗ್ಗೆ",

      } 
    }
  },
  lng:"en",
  fallbackLng:"en",
  interpolation:{
    escapeValue:false
  }

})

function About() {
  const{t}=useTranslation();

  return (
    <div className="about-main">
      <div className="about-text">
        <h1>
          {t('title')}
          {/* <b>A</b>bout Dr.Suraj Revan<b id="last-word">na</b> */}
        </h1>
        <h1 className="kannada">
          {/* <b>ಡಾ .</b>ಸೂರಜ್ ರೇವಣ್ಣ ಅವರ<b id="last-word">ಬಗ್ಗೆ</b> */}
        </h1>

        <p>
          Dr. Suraj Revanna is a member of the Karnataka Legislative Assembly,
          representing the Holenarasipura constituency in Hassan district. He
          was elected as the constituency's MP on November 19, 2019. His
          political party is the Janata Dal (Secular), and he is the eighth
          member of the H.D Devegowda family to enter politics.
          <ul>
            <li> Education</li>
            <p>
              He received his postgraduate degrees from Rajiv Gandhi University
              of Health Science in MBBS and MS (General Surgery) (May 2015)
              (Bangalore)
            </p>
            <li>Family</li>
            <p>
              Dr Suraj Revanna is the grandson of JD (Secular) Supremo and
              former Prime Minister of India H. D. Deve Gowda. He is son of
              Bhavani Revanna who was the member of the Hassan Zilla Panchayat,
              and HD Revanna who was former Minister for Public Works Department
              in Karnataka state. He is married to Sagarika Ramesh.
            </p>
            <p>
              Former Chief Minister of Karnataka, H. D. Kumaraswamy is his uncle
              and Suraj's younger brother Prajwal Revanna is the member of the
              17th Lok Sabha from Hassan Constituency
            </p>
            <li>Political career </li>
            <p>
              Suraj Revanna's victory in the elections to the Karnataka
              Legislative Council has set a new milestone in electoral politics.
              The JD(S) first family now has a presence in all four Houses of
              the legislature.
            </p>
          </ul>
        </p>
        <div className="kannada">
          <p>
            ಡಾ. ಸೂರಜ್ ರೇವಣ್ಣ ಅವರು ಹಾಸನ ಜಿಲ್ಲೆಯ ಹೊಳೆನರಸೀಪುರ ಕ್ಷೇತ್ರವನ್ನು
            ಪ್ರತಿನಿಧಿಸುವ ಕರ್ನಾಟಕ ವಿಧಾನಸಭೆಯ ಸದಸ್ಯರಾಗಿದ್ದಾರೆ. ನವೆಂಬರ್ ೧೯, ೨೦೧೯
            ರಂದು ಅವರು ಕ್ಷೇತ್ರದ ಸಂಸದರಾಗಿ ಆಯ್ಕೆಯಾದರು. ಅವರ ರಾಜಕೀಯ ಪಕ್ಷ ಜನತಾ ದಳ
            (ಜಾತ್ಯತೀತ), ಮತ್ತು ಅವರು ಎಚ್‌ಡಿ ದೇವೇಗೌಡ ಕುಟುಂಬದ ಎಂಟನೇ ಸದಸ್ಯರಾಗಿ ರಾಜಕೀಯ
            ಪ್ರವೇಶಿಸಿದ್ದಾರೆ.
            <ul>
              <li>ಶಿಕ್ಷಣ</li>
              <p>
                ಅವರು ರಾಜೀವ್ ಗಾಂಧಿ ಆರೋಗ್ಯ ವಿಜ್ಞಾನ ವಿಶ್ವವಿದ್ಯಾಲಯದಿಂದ MBBS
                (ಎಂಬಿಬಿಎಸ್)ಮತ್ತು(ಎಂ.ಎಸ್) MS (ಜನರಲ್ ಸರ್ಜರಿ) ನಲ್ಲಿ ತಮ್ಮ
                ಸ್ನಾತಕೋತ್ತರ ಪದವಿಗಳನ್ನು ಪಡೆದರು (ಮೇ ೨೦೧೫)(ಬೆಂಗಳೂರು)
              </p>
              <li>ಕುಟುಂಬ</li>
              <p>
                ಡಾ ಸೂರಜ್ ರೇವಣ್ಣ ಅವರು ಜೆಡಿ (ಜಾತ್ಯತೀತ) ಸುಪ್ರಿಮೋ ಮತ್ತು ಭಾರತದ ಮಾಜಿ
                ಪ್ರಧಾನಿ ಎಚ್.ಡಿ. ದೇವೇಗೌಡರ ಮೊಮ್ಮಗ. ಅವರು ಹಾಸನ ಜಿಲ್ಲಾ ಪಂಚಾಯತ್
                ಸದಸ್ಯರಾಗಿದ್ದ ಭವಾನಿ ರೇವಣ್ಣ ಮತ್ತು ಕರ್ನಾಟಕ ರಾಜ್ಯದ ಲೋಕೋಪಯೋಗಿ ಇಲಾಖೆ
                ಮಾಜಿ ಸಚಿವರಾಗಿದ್ದ ಹೆಚ್.ಡಿ.ರೇವಣ್ಣ ಅವರ ಪುತ್ರ. ಸಾಗರಿಕಾ ರಮೇಶ್ ಅವರನ್ನು
                ಮದುವೆಯಾಗಿದ್ದಾರೆ ಕರ್ನಾಟಕದ ಮಾಜಿ ಮುಖ್ಯಮಂತ್ರಿ, ಎಚ್.ಡಿ.ಕುಮಾರಸ್ವಾಮಿ
                ಅವರ ಚಿಕ್ಕಪ್ಪ ಮತ್ತು ಸೂರಜ್ ಅವರ ಕಿರಿಯ ಸಹೋದರ ಪ್ರಜ್ವಲ್ ರೇವಣ್ಣ ಅವರು
                ಹಾಸನ ಕ್ಷೇತ್ರದಿಂದ ೧೭ ನೇ ಲೋಕಸಭೆಯ ಸದಸ್ಯರಾಗಿದ್ದಾರೆ.
              </p>
              <li>ರಾಜಕೀಯ ವೃತ್ತಿಜೀವನ</li>
              <p>
                ಕರ್ನಾಟಕ ವಿಧಾನ ಪರಿಷತ್ತಿಗೆ ನಡೆದ ಚುನಾವಣೆಯಲ್ಲಿ ಸೂರಜ್ ರೇವಣ್ಣ ಅವರ
                ಗೆಲುವು ಚುನಾವಣಾ ರಾಜಕೀಯದಲ್ಲಿ ಹೊಸ ಮೈಲಿಗಲ್ಲು ಸ್ಥಾಪಿಸಿದೆ. ವಿಧಾನಮಂಡಲದ
                ನಾಲ್ಕೂ ಸದನಗಳಲ್ಲಿ ಜೆಡಿಎಸ್‌ನ ಮೊದಲ ಕುಟುಂಬ ಈಗ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ.
              </p>
            </ul>
          </p>
        </div>
      </div>
      <div className="about-img">
        <img src={gallaryPic} alt="front1" id="about-photo" />
      </div>
    </div>
  );
}
export default About;
