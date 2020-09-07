import React from "react";

import { Row, Col } from "antd";
import AnimatedPh from "../assets/vestapp.png";
import Slide from "react-reveal/Slide";

import play from "../assets/btn-android (1).svg";
import ios from "../assets/btn-ios (1).svg";

const Grow = () => {
  return (
    <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
      <Row>
        <Col xl={12}>
          <p className="safety1">Grow your money..</p>
          <p className="safety2">any time, any where </p>
          <br />
          <br />
          <p className="safetyItem">
            Download our mobile app on the Google Play Store and App Store to
            save and sponsor on the go.
          </p>
          <Slide left>
            <img
              src={play}
              alt="play"
              width="200px"
              style={{ marginRight: "20px", marginBottom: "20px" }}
            />
            <img
              src={ios}
              alt="ios"
              width="200px"
              style={{ marginBottom: "20px" }}
            />
          </Slide>
        </Col>
        <Col xl={12}>
          <Slide right>
            <img
              src={AnimatedPh}
              alt="phone"
              style={{ marginTop: "30px" }}
              width="500px"
              className="textHidden"
            />
          </Slide>
        </Col>
      </Row>
    </div>
  );
};

export default Grow;
