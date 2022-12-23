import { useEffect, useState } from "react";
import anna from "../assets/anna.png";
import "../styles/Home.css";
import About from "../components/About";
import Press from "./Press";
import Gallery from "./Gallery";
import Initiatives from "./Initiatives";
import GetTouch from "./GetTouch";
import Footer from "./Footer";
import English from "../English.json";
import Kannada from "../Kannada.json";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";

function Home() {
  const curLang= useSelector(state=>state.language.webLanguage);
  console.log(curLang)
  const [pageLang, setPageLang] = useState(English)
  
  useEffect(() => {
    AOS.init({ duration: 3000 });

    if (curLang === "english") setPageLang(English)
    else if (curLang === "kannada") setPageLang(Kannada)
    
  }, [curLang]);

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
        console.log("off");
      }
    });
  }, []);

  return (
    <div>
      <div className="wrapper">
        <div className="Home-main">
          <div className="icons-slideBar">
            <ul className="sider">
              <a
                href="https://twitter.com/Dr_Surajrevanna"
                target="_blank"
                rel="noreferrer"
              >
                <li className="icon" id="twitter">
                  <FaTwitter />
                </li>
              </a>
              <a
                href="https://www.instagram.com/dr.surajrevanna_official/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="icon" id="insta">
                  <FaInstagram />
                </li>
              </a>
              <a
                href="https://www.facebook.com/dr.surajrevanna.official/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="icon" id="facebook">
                  <FaFacebook />
                </li>
              </a>

              <li id="line">
                <hr />
              </li>
              <li id="social_name">{pageLang.home_component.socials}</li>
            </ul>
          </div>
        </div>
        <div className="revanna-profile" data-aos="zoom-in">
          <section className="revanna-profile-text">
            <h1 id="name">
              {pageLang.home_component.name}
            </h1>
            <h6 id="MLC">{pageLang.home_component.role}</h6>
          </section>
          <img src={anna} alt="suraj revanna" />
        </div>
      </div>

      {/* sections */}
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
