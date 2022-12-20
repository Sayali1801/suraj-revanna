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
import { useState,useEffect } from "react";

function Home() {

  // const [color, setColor]=useState()
  // const [position, setPosition]=useState()
  useEffect(() => {
    let hom = document.querySelector(".Home-main");
    window.addEventListener("scroll", () => {
      let header = document.querySelector(".header-main");
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        hom.scrollHeight
      ) {
        header.classList.add("darkbg2");
        // setColor(true);
        // setPosition('position:fixed')
        console.log("yes");
      } else {
        header.classList.remove("darkbg2");
        // setColor(false);
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
            <li className="icon" id="twi">
              <FaTwitter />
            </li>
            <li className="icon">
              <FaInstagram />
            </li>
            <li className="icon">
              <FaFacebook />
            </li>
            <li id="line">
              <hr />
            </li>
            <li id="social_name">SOCIALS</li>
          </ul>
        </div>
      </div>
      <div className="revanna-profile">
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
