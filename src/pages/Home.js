import React, { Fragment } from "react";
import "./pages.css";
import HeroTop from "../components/HeroTop";
import MidCard from "../components/MidCard";
import Headline from "../components/Headline";
import ImpactCard from "../components/ImpactCard";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import CarouselItem from "../components/CarouselItem";
import Testimonials from "../components/Testimonials";
import Safety from "../components/Safety";
import Grow from "../components/Grow";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Fragment>
      <div className="region1">
        <div className="container">
          <Fade top duration={3000}>
            <HeroTop />
            <Headline />
          </Fade>
          <Fade left>
            <MidCard />
          </Fade>
        </div>
      </div>
      <div className="region2">
        <div className="container">
          <Fade bottom delay={1000}>
            <ImpactCard />
          </Fade>
        </div>
      </div>
      <div className="region3">
        <div className="container">
          <CarouselItem />
        </div>
      </div>
      <div className="region4">
        <div className="container">
          <Testimonials />
          <Safety />
        </div>
      </div>
      <div className="region5">
        <div className="container">
          <Grow/>
          <Footer/>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
