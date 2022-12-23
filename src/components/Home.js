import anna from "../assets/anna.png";
import "../styles/Home.css";
import About from "../components/About";
import Press from "./Press";
import Gallery from "./Gallery";
import Initiatives from "./Initiatives";
import GetTouch from "./GetTouch";
import Footer from "./Footer";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import {useEffect } from "react";
// import English from '../components/English.json';
import i18n from 'i18next'

import { useTranslation } from "react-i18next";
import { initReactI18next } from "react-i18next";
// import Kanada from '../components/Kannada.json';
import AOS from "aos";
import 'aos/dist/aos.css';
i18n.use(initReactI18next).init({
  resources:{
    translation:{
      "socials":"SOCIALS ",
      "name":"Dr. Suraj Revanna",
      "role":"MLC Hassan District"
    },
    kn:{
      translation:{
        "socials":"ಸೊಷಿಯಲ್ಸ್ ",
        "name":"ಡಾ.ಸೂರಜ್ ರೇವಣ್ಣ",
        "role":"ವಿಧಾನ  ಪರಿಷತ್ ಶಾಸಕರು , ಹಾಸನ "
      } 
    }
  },
  lng:"en",
  fallbackLng:"en",
  interpolation:{
    escapeValue:false
  }

})
function Home() {
  // const[lang, setLang]=useState("english");
  // let language = require("../components/Kannada.json");

  // if (lang === "english") {
  //   language = English;
  // } else {
  //   language = Kanada;
  // }
const{t}=useTranslation();
// function changeLanguage(para){
//   return(()=>{
//     i18n.changeLanguage(para)
//   })
//   }
  


  useEffect(()=>{
    AOS.init({duration:3000})
  },[])
  useEffect(() => {
    let hom = document.querySelector(".Home-main");
    window.addEventListener("scroll", () => {
      let header = document.querySelector(".header-main");
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        hom.scrollHeight
      ) {
        header.classList.add("darkbg2");
        console.log("yes");
      } else {
        header.classList.remove("darkbg2");
        console.log("off")

      }
    });
  }, []);
  return (
    <div>
    <div className="wrapper">
      <div className="Home-main">
        <div className="icons-slideBar">
          <ul className="sider">
          <a href="https://twitter.com/Dr_Surajrevanna" target="_blank" rel="noreferrer">
            <li className="icon" id="twitter">
               <FaTwitter />
            </li>
            </a>
            <a href="https://www.instagram.com/dr.surajrevanna_official/" target="_blank" rel="noreferrer">
            <li className="icon" id="insta"><FaInstagram /></li>
            </a>
            <a href="https://www.facebook.com/dr.surajrevanna.official/" target="_blank" rel="noreferrer">
            <li className="icon" id="facebook">
            <FaFacebook />            
            </li>
            </a>

            <li id="line">
              <hr />
            </li>
            {/* <li id="social_name">SOCIALS</li> */}
          <li>{t('socials')}</li>
          </ul>
        </div>
      </div>
      <div className="revanna-profile" data-aos="zoom-in">
        <section className="revanna-profile-text">
          <h1 id="name">
            Dr.Suraj <br /> Revanna
          </h1>
          <h6 id="MLC">MLC Hassan District</h6>
        </section>
        <img src={anna} alt="suraj revanna" />
      </div>
      </div>
      <About />
      <Press />
      <Gallery />
      <Initiatives />
      <GetTouch />
      <Footer />
    </div>
  );
}
export default Home;
