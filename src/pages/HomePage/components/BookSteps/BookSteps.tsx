import HappyMan from "src/assets/medium-shot-happy-man-smiling.png";
import CreateTrip from "src/assets/CreateTrip.png";
import LIIcon from "src/components/Icons/LIIcon";
import "./BookSteps.scss";
import { Link } from "react-router-dom";

const BookSteps = () => {
  return (
    <div className="book-steps-container">
      <div className="create-trip-image">
        <img
          src={CreateTrip}
          alt=""
        />
      </div>
      <div className="create-trip-content">
        <div className="create-trip-content-main">
          <div className="create-trip-content-header">
            <h2 className="content-heading">Book Easy 3 Steps</h2>
            <div className="content-paragraph">
              Planning a trip is sometimes not easy. But Trip Plan will help you to manage time and budget for your
              journey! There are only 3 steps: Create an account, choose your destination city.
            </div>
          </div>
          <div className="create-trip-steps">
            <div className="steps">
              <Link to="google.com">
                <LIIcon></LIIcon>
              </Link>
              <span>Set Up your Account</span>
            </div>
            <div className="steps">
              <Link to="/">
                <LIIcon></LIIcon>
              </Link>
              <span>Respond to Private requests</span>
            </div>
            <div className="steps">
              <Link to="/">
                <LIIcon></LIIcon>
              </Link>
              <span>Book your Trip</span>
            </div>
          </div>
        </div>
        <div className="create-trip-slogan">
          <p className="slogan-text">
            “Plan your trip with a 3-step trip plan. Check in out at a glance, select hotel rooms on the go, and create
            a packing list”
          </p>
          <div className="author-slogan">
            <img
              className="happy-man"
              src={HappyMan}
              alt=""
            />
            <div className="author-info">
              <div className="author-name">Steve Jobs</div>
              <div className="author-company">Co-Founder and CEO</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSteps;
