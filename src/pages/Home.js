import React from "react";
import "./pages.css";
import HeroTop from "../components/HeroTop";
import MidCard from "../components/MidCard";
import Headline from "../components/Headline";
import ImpactCard from "../components/ImpactCard";

const Home = () => {
  return (
    <div>
      <HeroTop />
      <Headline />
      <MidCard />
      <ImpactCard/>
    </div>
  );
};

export default Home;
