import React from "react";

import { Row, Col } from "antd";
import HeroTopImg from "../assets/hero-top.png";
const HeroTop = () => {
  return (
    <div>
      <Row justify="center">
        <Col
          className="gutter-row"
          span={8}
          xs={2}
          sm={4}
          md={6}
          lg={8}
          xl={10}
        ></Col>
        <Col
          className="gutter-row"
          span={8}
          xs={20}
          sm={16}
          md={12}
          lg={8}
          xl={4}
        >
          <img src={HeroTopImg} alt="hero-top" height="130" />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          xs={2}
          sm={4}
          md={6}
          lg={8}
          xl={10}
        ></Col>
      </Row>
    </div>
  );
};

export default HeroTop;
