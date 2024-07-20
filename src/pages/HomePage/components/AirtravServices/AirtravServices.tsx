import HotelIcon from "src/components/Icons/HotelIcon";
import "./AirtravServices.scss";
import CardIcon from "src/components/Icons/CardIcon";
import RoutIcon from "src/components/Icons/RoutIcon";
import StarIcon from "src/components/Icons/StarIcon";
const AirtravServices = () => {
  return (
    <div className="airtrav-services-container">
      <div className="airtrav-services-heading">
        <div className="airtrav-services-heading-text">Airtrav Best Services </div>
        <div className="airtrav-services-heading-paragraph">
          Love by airtrave all services and amazine trip booked plane
        </div>
      </div>
      <div className="airtrav-services-card-list">
        <div className="airtrav-services-card-item">
          <div className="card-item-icon card-item-icon--blue ">
            <HotelIcon></HotelIcon>
          </div>
          <div className="card-item-value">100,000</div>
          <div className="card-item-text">cities all over the world</div>
        </div>
        <div className="airtrav-services-card-item">
          <div className="card-item-icon card-item-icon--green ">
            <CardIcon></CardIcon>
          </div>
          <div className="card-item-value">100</div>
          <div className="card-item-text">Gift card over the world</div>
        </div>
        <div className="airtrav-services-card-item">
          <div className="card-item-icon card-item-icon--orange ">
            <RoutIcon></RoutIcon>
          </div>
          <div className="card-item-value">1000</div>
          <div className="card-item-text">Guest referrals over</div>
        </div>
        <div className="airtrav-services-card-item">
          <div className="card-item-icon card-item-icon--yellow ">
            <StarIcon></StarIcon>
          </div>
          <div className="card-item-value">5 Star</div>
          <div className="card-item-text">Reviews Customar </div>
        </div>
      </div>
    </div>
  );
};

export default AirtravServices;
