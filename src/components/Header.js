import { Link } from "react-router-dom";
import "../styles/Header.css";
import {FaBars} from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa';
import { useState} from "react";
import header_logo from '../assets/header_logo.png'
function Header() {

  const[click, setClick]=useState(false);
  const handleClick = ()=>{
    setClick(!click)
  }
  return (
    <div className="header">
    <div className="header-main">

      <div className="header-left">
        <img src={header_logo} alt="header_logo" className="header_logo"/>
      </div>
      <div className="header-center">
        <ul className="menu-list">
          <Link to="/">
            <li>Home </li>
          </Link>
          <Link to="/About">
            <li>About </li>
          </Link>
          <Link to="/Press">
            <li>Press </li>
          </Link>
          <Link to="/Gallery">
            <li>Gallery </li>
          </Link>
          <Link to="/Initiatives">
            <li>Initiatives </li>
          </Link>
        </ul>
      </div>
      <div className="header-right">
        <Link to="/Touch">
          <button>Get In Touch</button>
        </Link>
        <select className="langauge-drop">
          <option>English</option>
          <option>Kanadda</option>
        </select>
        <section className="header-icons" onClick={handleClick}>
          <p className={click ? <FaBars/> : <FaTimes/>} />
        </section>
      </div>
    </div>
</div>
  );
}
export default Header;
