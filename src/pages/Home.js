import React, { Fragment } from "react";
import "./pages.css";
import HeroTop from "../components/HeroTop";
import MidCard from "../components/MidCard";
import Headline from "../components/Headline";
import ImpactCard from "../components/ImpactCard";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import CarouselItem from "../components/CarouselItem";

const Home = () => {
  return (
    <Fragment>
      <div className="container">
        <Fade top duration={3000}>
          <HeroTop />
          <Headline />
        </Fade>
        <Fade left>
          <MidCard />
        </Fade>
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
          <Fade bottom delay={2000}>
            <CarouselItem/>
          </Fade>
        </div>
      </div>
      <div>
        <Zoom right>
          <h1>React Reveal</h1>
        </Zoom>
      </div>
      <Fade top cascade>
        <ul className="some-class">
          <li>First Item</li>
          <li>Another Item</li>
          <li>Last Item</li>
        </ul>
      </Fade>
    </Fragment>
  );
};

export default Home;
