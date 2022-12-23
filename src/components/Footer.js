import "../styles/Footer.css";
import header_logo from '../assets/header_logo.png';
import {FaFacebookF} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';

import English from "../English.json";
import Kannada from "../Kannada.json";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function Footer() {
  const curLang= useSelector(state=>state.language.webLanguage);
  const [Lang,setLang]=useState(English);

  useEffect(()=>{
    if (curLang === "english") setLang(English)
    else if (curLang === "kannada") setLang(Kannada)
  },[curLang])

  return (
    <section>
      <div className="footer-main">
        <div className="footer-left">
          <img src={header_logo} alt="website logo" className="footer_logo"/>
        </div>
        <div className="footer-center">
          <ul className="center-list">
            <li>{Lang.footer_component.copy}</li>
            <li>{Lang.footer_component.rights}</li>
            <li>{Lang.footer_component.terms}</li>
          </ul>
        </div>
        <div className="footer-right">
          <ul className="right-list">
          <a href="https://twitter.com/Dr_Surajrevanna" target="_blank" rel="noreferrer">

            <li id="twitter"><FaTwitter/></li>
            </a>
            <a href="https://www.instagram.com/dr.surajrevanna_official/"  rel="noreferrer"             target="_blank"
>

            <li id="insta"><FaInstagram/></li>
            </a>
            <a rel="noreferrer"
              href="https://www.facebook.com/dr.surajrevanna.official/"
              target="_blank"
            >

            <li id="facebook"><FaFacebookF/></li>
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Footer;
