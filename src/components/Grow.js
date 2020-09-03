import React from "react";

import { Row, Col } from "antd";
import Secure from "../assets/secure.svg";
import AnimatedPh from "../assets/vestapp.png";

import play from "../assets/btn-android (1).svg";
import ios from "../assets/btn-ios (1).svg";
import sal from "sal.js";

import Bounce from "react-reveal/Bounce";

const Grow = () => {
  return (
    <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
      <Row>
        <Col xl={12}>
          <p className="safety1">Grow your money.. </p>
          <p className="safety2">any time, any where </p>
          <br />
          <br />
          <p className="safetyItem">
            Download our mobile app on the Google Play Store and App Store to
            save and sponsor on the go.
          </p>
          <img
            src={play}
            alt="play"
            width="200px"
            style={{ marginRight: "10px" }}
          />
          <img src={ios} alt="ios" width="200px" />
        </Col>
        <Col xl={12}>
          <div data-sal-easing="ease-out-back">
            <img
              src={AnimatedPh}
              alt="phone"
              data-sal="zoom-in"
              width="500px"
              once={false}
              className="sal-animate"
              forever="true"
              count="10"
              style={{ margin: "50px" }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Grow;
