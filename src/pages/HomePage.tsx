import AirtravServices from "src/components/AirtravServices";
import Banner from "src/components/Banner/Banner";
import BookSteps from "src/components/BookSteps";
import HowDoesItWork from "src/components/HowDoesItWork";
import Navbar from "src/components/Navbar";
import PartnerBrand from "src/components/Partner";
import TripBooking from "src/components/TripBooking";
import TripPlanning from "src/components/TripPlanning";

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <PartnerBrand></PartnerBrand>
      <TripPlanning></TripPlanning>
      <BookSteps></BookSteps>
      <TripBooking></TripBooking>
      <HowDoesItWork></HowDoesItWork>
      <AirtravServices></AirtravServices>
    </div>
  );
};

export default HomePage;
