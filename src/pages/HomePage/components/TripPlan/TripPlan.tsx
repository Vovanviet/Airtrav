import "./TripPlan.scss";
import TripPlanImage from "src/assets/TripPlan.png";
const TripPlan = () => {
  return (
    <div className="trip-plan-container">
      <div className="trip-plan-left">
        <div className="trip-plan-content-heading">Ready for 14 days Trip Plan</div>
        <div className="trip-plan-content-paragraph">
          The secret of good trip planning is to plan in advance, and we can't get much more advanced than 14 days.{" "}
        </div>
        <button type="button">Go Plan </button>
      </div>
      <div className="trip-plan-right">
        <img
          src={TripPlanImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default TripPlan;
