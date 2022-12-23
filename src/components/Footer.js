import "../styles/Footer.css";
import header_logo from '../assets/header_logo.png';
import {FaFacebookF} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
function Footer() {
  return (
    <section>
      <div className="footer-main">
        <div className="footer-left">
          <img src={header_logo} alt="website logo" className="footer_logo"/>
        </div>
        <div className="footer-center">
          <ul className="center-list">
            <li>Copyright © <b>2022</b> Suraj Revanna</li>
            <li> All Rights Reserved.</li>
            <li>Terms and Conditions | Privacy Policy</li>
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
