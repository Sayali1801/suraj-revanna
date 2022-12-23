import { Link } from "react-router-dom";
import "../styles/Header.css";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import header_logo from "../assets/header_logo.png";

function Header() {
  const [click, setClick] = useState(false);
  function handleClick() {
    setClick(!click);
  }
  return (
    <div className="header">
      <div className="header-main">
        <div className="header-left">
          <img src={header_logo} alt="header_logo" className="header_logo" />
        </div>
        <div className="header-center">
          <ul className="menu-list">
            <Link to="/">
              {/* <li>{language.navbar.home}</li> */}
              <li>Home</li>
            </Link>
            <Link to="/About">
              {/* <li>{language.navbar.about} </li> */}
              <li>About</li>
            </Link>
            <Link to="/Press">
              {/* <li>{language.navbar.press} </li> */}
              <li>Press</li>
            </Link>
            <Link to="/Gallery">
              {/* <li>{language.navbar.gallery} </li> */}
              <li>Gallery</li>
            </Link>
            <Link to="/Initiatives">
              {/* <li>{language.navbar.initiatives}</li> */}
              <li>Initiatives</li>
            </Link>
            <div className="header-right">
              <Link to="/Touch">
                <li>
                  <button>Get In Touch</button>
                </li>
              </Link>
            </div>
          </ul>
        </div>
      </div>
      <button onClick={handleClick} className="mobile-btn">
        {click ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  );
}

export default Header;
