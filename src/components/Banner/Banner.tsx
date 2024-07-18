import FlyIcon from "src/components/Icons/FlyIcon";
import WaveIcon from "src/components/Icons/WaveIcon";
import Button from "../Button/Button";
import ArrowIcon from "../Icons/ArrowIcon";
import RateIcon from "../Icons/RateIcon";
import Manpicture from "../../assets/ManPicture.png";

import "./Banner.scss";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-left">
        <h1 className="banner-heading">
          <span className="banner-heading-text--black">Travel Planning Made</span>
          <span className="banner-heading-text--yellow"> Easy</span>
          <span className="banner-heading-icon">
            <WaveIcon></WaveIcon>
          </span>
        </h1>
        <p className="banner-paragraph">We make it easy to plan and book your next trip with a Day by Day itinerary.</p>
        <Button
          type="button"
          className="banner-button"
        >
          <span className="banner-button--text">Plan a Trip</span> <ArrowIcon className="arrow-icon"></ArrowIcon>
        </Button>

        <div className="banner-review">
          <div className="banner-review--text">Our customers say</div>
          <div className="banner-rate">
            <div className="banner-rate--left">
              <div className="banner-rate--excellent">Excellent</div>
              <RateIcon className="banner-rate-icon"></RateIcon>
            </div>
            <div className="banner-rate--right">
              <div className="banner-rate-number">4.7</div>
              <div className="banner-rate-total">
                out of 5 on <span>194</span> reviews
              </div>
            </div>
          </div>
        </div>
        <div className="fly-icon">
          <FlyIcon></FlyIcon>
        </div>
      </div>
      <div className="banner-right">
        <img
          src={Manpicture}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
