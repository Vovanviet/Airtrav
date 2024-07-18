import BookIcon from "src/components/Icons/BookIcon";
import LaptopIcon from "src/components/Icons/LaptopIcon";
import SunIcon from "src/components/Icons/SunIcon";
import "./TripPlanning.scss";
import LearnmoreIcon from "src/components/Icons/LearnmoreIcon";
const TripPlanning = () => {
  return (
    <div className="trip-planning">
      <div className="heading">
        <h2 className="heading-text">Innovative Trip Planning</h2>
        <p className="heading-paragraph">
          Our Vision is to revolutionize the way people travel by introducing intelligent trip planning
        </p>
      </div>
      <div className="content">
        <div className="card card--green">
          <SunIcon></SunIcon>
          <div className="card-text">Partner allows you to browse multiple carriers for travel.</div>
          <LearnmoreIcon></LearnmoreIcon>
        </div>
        <div className="card card--orange">
          <LaptopIcon></LaptopIcon>
          <div className="card-text">The website is a way for partners to communicate with their customers.</div>
          <LearnmoreIcon></LearnmoreIcon>
        </div>
        <div className="card card--blue">
          <BookIcon></BookIcon>
          <div className="card-text">The eBook Reader is a new way to look at e-books.</div>
          <LearnmoreIcon></LearnmoreIcon>
        </div>
      </div>
    </div>
  );
};

export default TripPlanning;
