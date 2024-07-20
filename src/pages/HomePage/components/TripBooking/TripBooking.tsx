import ArbnLogo from "src/assets/ArbnLogo.png";
import TripAdvisorLogo from "src/assets/TripAdvisorLogo.png";
import TurkishKargoLogo from "src/assets/TurkishKargoLogo.png";
import IataLogo from "src/assets/IataLogo.png";
import WelcomeAirtrap from "src/assets/WelcomeAirtrav.png";
import "./TripBooking.scss";
const TripBooking = () => {
  return (
    <div className="trip-booking-container">
      <div className="trip-booking-content-left">
        <div className="trip-booking-content-heading">Easy Trip Booking Website</div>
        <p className="trip-booking-content-paragraph">
          A new way to book travel online, saving you time. With trip, There are no confusing spreadsheets or
          complicated searches. We just ask the right questions, find the best deal for you, then book it.
        </p>
        <div className="trip-booking-card">
          <div className="card-item">
            <img
              src={TripAdvisorLogo}
              alt=""
            />
            <div className="card-item-main">Trip Advisor</div>
            <div className="card-item-text">Cheap Flights Amazing Experiences</div>
          </div>
          <div className="card-item">
            <img
              src={ArbnLogo}
              alt=""
            />
            <div className="card-item-main">Arbn</div>
            <div className="card-item-text">Choose From a Wide Range of Properties Which Booking.</div>
          </div>
          <div className="card-item">
            <img
              src={TurkishKargoLogo}
              alt=""
            />
            <div className="card-item-main">Turkish Kargo</div>
            <div className="card-item-text">Best Flights Amazing Services</div>
          </div>
          <div className="card-item">
            <img
              src={IataLogo}
              alt=""
            />
            <div className="card-item-main">Iata</div>
            <div className="card-item-text">Cheap Flights Amazing Experiences</div>
          </div>
        </div>
      </div>
      <div className="trip-booking-content-right">
        <img
          src={WelcomeAirtrap}
          alt=""
        />
      </div>
    </div>
  );
};

export default TripBooking;
