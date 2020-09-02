import React from "react";
import { Row, Col, Card } from "antd";
import HeroTop from "../components/HeroTop";
import "./pages.css";
const Home = () => {
  return (
    <div>
      <HeroTop />
      <Row>
        <Col className="boxCenter" xs={24} sm={12} md={12} lg={12} xl={12}>
          <p className="headingTitle">
            The Smarter Way to
            <div>Get your Money</div> Working
          </p>
          <p className="headingSubTitle">
            Crowdyvest connects you to impact-driven 
            <div>opportunities with good returns</div>.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
