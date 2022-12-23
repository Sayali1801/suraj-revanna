import "../styles/About.css";
import gallaryPic from "../assets/gallaryPic.JPG";
import English from "../English.json";
import Kannada from "../Kannada.json";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function About() {
  const curLang= useSelector(state=>state.language.webLanguage);
  const [Lang,setLang]=useState(English);

  useEffect(()=>{
    if (curLang === "english") setLang(English)
    else if (curLang === "kannada") setLang(Kannada)
  },[curLang])
  
  return (
    <div className="about-main">
      <div className="about-text">
        <h1>
        {Lang.about_component.title}
        </h1>

        <p>
          {Lang.about_component.info}
          <ul>
            <li> {Lang.about_component.education}</li>
            <p>
            {Lang.about_component.educationDetail}
            </p>
            <li>{Lang.about_component.family}</li>
            <p>
            {Lang.about_component.familyDetails}
            </p>
            <li>{Lang.about_component.politicalCarrier} </li>
            <p>
            {Lang.about_component.politicalDetails}
            </p>
          </ul>
        </p>
      </div>
      <div className="about-img">
        <img src={gallaryPic} alt="front1" id="about-photo" />
      </div>
    </div>
  );
}
export default About;
