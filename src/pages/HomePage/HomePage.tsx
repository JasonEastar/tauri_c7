import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
import SectionsLottery from "./Sections/SectionsLottery/SectionsLottery";
import SectionsSport from "./Sections/SectionsSport/SectionsSport";
import SectionExperience from "./Sections/SectionExperience/SectionExperience";
import './HomePage.scss'
import SectionDowloadApp from "./Sections/SectionDownloadApp/SectionDownloadApp";
export default function HomePage() {
  return (
    <div className="home-page">
      <div className="home-slider">
        <CarouselComponent />
      </div>
      <div className="section">
        <SectionsLottery />
      </div>
      <div className="section sport-page">
        <SectionsSport />
      </div>
      <div className="section section-experience">
        <SectionExperience />
      </div>
      <div className="section section-download">
        <SectionDowloadApp />
      </div>
    </div>
  );
}
