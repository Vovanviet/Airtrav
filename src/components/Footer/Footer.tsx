import ArrowIcon from "src/components/Icons/ArrowIcon";
import LogoIcon from "src/components/Icons/LogoIcon";
import "./Footer.scss";
import { Link } from "react-router-dom";
import SocialIcon from "src/components/Icons/SocialIcon";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <div className="logo">
            <LogoIcon></LogoIcon>
            <div className="logo-name">Airtrav</div>
          </div>
          <div className="subcribe-button">
            <p>Similarly, a loan taken out to buy a car may be secured by the car. The duration of the loan.</p>
            <div className="search-button">
              <input
                type="text"
                placeholder="Enter your email"
              />
              <ArrowIcon></ArrowIcon>
            </div>
          </div>
        </div>
        <div className="footer-services">
          <div className="footer-services-heading">Services</div>
          <div className="footer-services-list-item">
            <Link
              className="footer-services-item"
              to="/"
            >
              Trip Planner
            </Link>
            <Link
              className="footer-services-item"
              to="/"
            >
              Tour Planning
            </Link>
            <Link
              className="footer-services-item"
              to="/"
            >
              Tour Guide
            </Link>
            <Link
              className="footer-services-item"
              to="/"
            >
              Tour Package
            </Link>
            <Link
              className="footer-services-item"
              to="/"
            >
              Tour advice
            </Link>
          </div>
        </div>
        <div className="footer-services">
          <div className="footer-services-heading">Support</div>
          <div className="footer-services-list-item">
            <Link
              className="footer-services-item"
              to="/"
            >
              Account
            </Link>
            <Link
              className="footer-services-item"
              to="/"
            >
              Legal
            </Link>
            <Link
              className="footer-services-item"
              to="/"
            >
              Contact
            </Link>
            <Link
              className="footer-services-item"
              to="/"
            >
              Terms & Condition
            </Link>
            <Link
              className="footer-services-item"
              to="/"
            >
              Privacy & Policy
            </Link>
          </div>
        </div>
        <div className="footer-services">
          <div className="footer-services-heading">Business</div>
          <div className="footer-services-list-item">
            <Link
              className="footer-services-item"
              to="/"
            >
              Success
            </Link>
            <Link
              className="footer-services-item"
              to="/"
            >
              About Locato
            </Link>
            <Link
              className="footer-services-item"
              to="/"
            >
              Blog
            </Link>
            <Link
              className="footer-services-item"
              to="/"
            >
              Information
            </Link>
            <Link
              className="footer-services-item"
              to="/"
            >
              Travel Guide
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="coppyright">Copyright© 2021 UIHUT LLC. All rights reserved</div>
        <SocialIcon></SocialIcon>
      </div>
    </div>
  );
};

export default Footer;
