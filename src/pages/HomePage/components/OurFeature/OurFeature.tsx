import RoutIcon from "src/components/Icons/RoutIcon";
import SendIcon from "src/components/Icons/SendIcon";
import "./OurFeature.scss";
import CardIcon from "src/components/Icons/CardIcon";
import AirIcon from "src/components/Icons/AirIcon";
const OurFeature = () => {
  return (
    <div className="our-feature-container">
      <div className="our-feature-heading">Discover our Features</div>
      <div className="our-feature-row">
        <div className="our-feature-row-item">
          <div className="our-feature-row-item-heading">
            <div className="our-feature-row-item-heading-icon our-feature-row-item-heading-icon--sending">
              <SendIcon></SendIcon>
            </div>
            <h2 className="our-feature-row-item-heading-text">Share Your Travel Plan</h2>
          </div>
          <div className="our-feature-row-item-description">
            Ticket is an ultra-convenient way to buy your train or bus ticket online in seconds.
          </div>
        </div>
        <div className="our-feature-row-item">
          <div className="our-feature-row-item-heading">
            <div className="our-feature-row-item-heading-icon our-feature-row-item-heading-icon--rout">
              <RoutIcon></RoutIcon>
            </div>
            <h2 className="our-feature-row-item-heading-text">Get Monthly Tour</h2>
          </div>
          <div className="our-feature-row-item-description">
            Our Get Monthly Tours marketing package will help get more clients in your photography business.
          </div>
        </div>
        <div className="our-feature-row-item">
          <div className="our-feature-row-item-heading">
            <div className="our-feature-row-item-heading-icon our-feature-row-item-heading-icon--card">
              <CardIcon></CardIcon>
            </div>
            <h2 className="our-feature-row-item-heading-text">Receive Ticket</h2>
          </div>
          <div className="our-feature-row-item-description">
            The Receive plan Ticket will allow you to travel freely. You will be able to get in any location.
          </div>
        </div>
        <div className="our-feature-row-item">
          <div className="our-feature-row-item-heading">
            <div className="our-feature-row-item-heading-icon our-feature-row-item-heading-icon--air">
              <AirIcon></AirIcon>
            </div>
            <h2 className="our-feature-row-item-heading-text">Flight Booking</h2>
          </div>
          <div className="our-feature-row-item-description">
            Flight Booking is an ultra-convenient way to buy your train or bus ticket online in seconds.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeature;
