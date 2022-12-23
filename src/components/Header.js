import { Link } from "react-router-dom";
import "../styles/Header.css";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import header_logo from "../assets/header_logo.png";
import { toEnglish, toKannada } from "./store/langSlice";
import { useDispatch, useSelector } from "react-redux";

import English from "../English.json";
import Kannada from "../Kannada.json";

function Header(props) {
  // const curLang= useSelector(state=>state.language);
  const dispatch = useDispatch();

  const curLang = useSelector((state) => state.language.webLanguage);
  const [Lang, setLang] = useState(English);

  useEffect(() => {
    if (curLang === "english") setLang(English);
    else if (curLang === "kannada") setLang(Kannada);
  }, [curLang]);

  const [click, setClick] = useState(false);

  const handleClick = (arg) => {
    if (arg === "english") props.langfunc("english");
    else if (arg === "kannada") props.langfunc("kannada");
  };

  return (
    <div className="header">
      <div className="header-main">
        <div className="header-left">
          <img src={header_logo} alt="header_logo" className="header_logo" />
        </div>
        <div className="header-center">
          <ul className="menu-list">
            <li>
              <Link to="/">{Lang.navbar.home} </Link>
            </li>

            <li>
              <Link to="/About">{Lang.navbar.about} </Link>
            </li>

            <li>
              <Link to="/Press">{Lang.navbar.press} </Link>
            </li>

            <li>
              <Link to="/Gallery">{Lang.navbar.gallery} </Link>
            </li>

            <li>
              <Link to="/Initiatives">{Lang.navbar.initiatives}</Link>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <Link to="/Touch">
            <button>{Lang.navbar.getInTouch}</button>
          </Link>
          <button onClick={() => dispatch(toEnglish())}>English</button>
          <button onClick={() => dispatch(toKannada())}>Kannada</button>
        </div>
      </div>
      <button onClick={handleClick} className="mobile-btn">
        {click ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  );
}

export default Header;
