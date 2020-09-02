import React from "react";

import { Row, Col } from "antd";
import HeroTopImg from "../assets/hero-top.png";
import "./components.module.css";
import "./components.css";
const HeroTop = () => {
  return (
    <div className="heroTop">
      <Row>
        <Col span={8} xs={2} sm={4} md={6} lg={8} xl={9}></Col>
        <Col span={8} xs={20} sm={16} md={12} lg={8} xl={5}>
          <img src={HeroTopImg} alt="hero-top" height="130" />
        </Col>
        <Col span={8} xs={2} sm={4} md={6} lg={8} xl={9}></Col>
      </Row>
    </div>
  );
};

export default HeroTop;
