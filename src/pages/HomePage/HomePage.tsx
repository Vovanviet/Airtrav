import AirtravServices from "src/pages/HomePage/components/AirtravServices";
import BookSteps from "src/pages/HomePage/components/BookSteps";
import Navbar from "src/components/Navbar";
import PartnerBrand from "src/pages/HomePage/components/Partner";
import TripBooking from "src/pages/HomePage/components/TripBooking";
import TripPlanning from "src/pages/HomePage/components/TripPlanning";
import Banner from "src/pages/HomePage/components/Banner";
import HowItWorks from "src/pages/HomePage/components/HowItWorks";
import OurFeature from "src/pages/HomePage/components/OurFeature";
import TripPlan from "src/pages/HomePage/components/TripPlan";
import Footer from "src/components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <PartnerBrand></PartnerBrand>
      <TripPlanning></TripPlanning>
      <BookSteps></BookSteps>
      <TripBooking></TripBooking>
      <HowItWorks></HowItWorks>
      <AirtravServices></AirtravServices>
      <OurFeature></OurFeature>
      <TripPlan></TripPlan>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
