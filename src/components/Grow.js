import React from "react";

import { Row, Col } from "antd";
import Secure from "../assets/secure.svg";
import Phone from "../assets/phone-item.svg";

import play from '../assets/btn-android (1).svg'
import ios from "../assets/btn-ios (1).svg" 

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
          <img src={play} alt="play" width="200px" style={{marginRight:"10px"}} />
          <img src={ios} alt="ios" width="200px" />
        </Col>
        <Col xl={12}>
          <img
            src={Phone}
            alt="phone"
            width="500px"
            style={{ margin: "50px" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Grow;
