import React from "react";
import { Row, Col } from "antd";
import HeroTop from "../components/HeroTop";
import "./pages.css";
const Home = () => {
  return (
    <div>
      <HeroTop />
      <Row>
        <Col  offset={6} xs={12} sm={12} md={12} lg={12} xl={12}>
          <p className="headingTitle">
            The Smarter Way to 
            <br/>Get your Money<br/> Working
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
