import AvatarIcon from "src/components/Icons/AvatarIcon";
import "./HowItWorks.scss";
import MapIcon from "src/components/Icons/MapIcon";
import SendIcon from "src/components/Icons/SendIcon";
import AirIcon from "src/components/Icons/AirIcon";
import HowItWork from "src/assets/HowItWork.png";
const HowItWorks = () => {
  return (
    <div className="how-it-work-container">
      <div className="content-left">
        <img
          src={HowItWork}
          alt=""
        />
      </div>
      <div className="content-right">
        <div className="content-heading">
          <h2 className="content-heading-text">How does it works</h2>
          <p className="content-paragraph">
            We find the absolute best prices on hotels & flights then we pass these savings directly to you.
          </p>
        </div>
        <div className="content-row">
          <div className="content-card">
            <div className="content-icon">
              <AvatarIcon></AvatarIcon>
            </div>
            <div className="content-text">
              <div className="content-text-header">Account</div>
              <p className="content-text-description">
                All the necessary information to create your account are below this.
              </p>
            </div>
          </div>

          <div className="content-card">
            <div className="content-icon">
              <MapIcon></MapIcon>
            </div>
            <div className="content-text">
              <div className="content-text-header">Select Destination</div>
              <p className="content-text-description">
                All the necessary information to create your account are below this.
              </p>
            </div>
          </div>

          <div className="content-card">
            <div className="content-icon">
              <SendIcon></SendIcon>
            </div>
            <div className="content-text">
              <div className="content-text-header">Book a Trip</div>
              <p className="content-text-description">
                All the necessary information to create your account are below this.
              </p>
            </div>
          </div>

          <div className="content-card">
            <div className="content-icon">
              <AirIcon></AirIcon>
            </div>
            <div className="content-text">
              <div className="content-text-header">Take your flight</div>
              <p className="content-text-description">
                All the necessary information to create your account are below this.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
