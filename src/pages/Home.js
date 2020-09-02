import React, { Fragment } from "react";
import "./pages.css";
import HeroTop from "../components/HeroTop";
import MidCard from "../components/MidCard";
import Headline from "../components/Headline";
import ImpactCard from "../components/ImpactCard";

const Home = () => {
  return (
    <Fragment>
      <div className="container">
        <HeroTop />
        <Headline />
        <MidCard />
      </div>
      <div className="region2">
        <div className="container">
          <ImpactCard />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
