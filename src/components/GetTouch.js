import "../styles/GetTouch.css";
import contact from "../assets/contact.JPG";
import English from "../English.json";
import Kannada from "../Kannada.json";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function GetTouch() {
  const curLang= useSelector(state=>state.language.webLanguage);
  const [Lang,setLang]=useState(English);

  useEffect(()=>{
    if (curLang === "english") setLang(English)
    else if (curLang === "kannada") setLang(Kannada)
  },[curLang])

  return (
    <div >
      <div className="Get-touch-main">
        <h1 className="touch-main-heading">
        {Lang.GetTouch_component.title}
          {/* <b id="first-letter">G</b>et In Tou<b id="last-letter">ch</b> */}
        </h1>
        <div className="Get-touch-form">
          <img src={contact} alt="touch-form" className="touch-form-photo" />
          <form className="touch-form">
            <input type="text" placeholder={Lang.GetTouch_component.name}/> <br />
            <input type="text" placeholder={Lang.GetTouch_component.email} /> <br />
            <input
              type="number"
              placeholder={Lang.GetTouch_component.number}
            />{" "}
            <br />
            <input type="text" placeholder={Lang.GetTouch_component.message} />
            <br />
            <p></p>
            <button className="submit-btn">
            {Lang.GetTouch_component.submit}<b>→</b>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default GetTouch;
