import React from "react";

import { Row, Col, Divider } from "antd";
import Secure from "../assets/secure.svg";
import Phone from "../assets/phone-item.svg";

const Safety = () => {
  return (
    <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
      <Row>
        <Col xl={12}>
          <p className="safety">Safe & Secure</p>
          <p className="safetyItem">
            Crowdyvest uses high-end technology to protect data and funds; as
            well as adheres to the latest standards in financial security.
          </p>
          <img src={Secure} alt="secure" width="300px" />
        </Col>
        <Col xl={12}>
          <img src={Phone} className="textHidden" alt="phone" width="500px" />
        </Col>
      </Row>
      <Divider/>
    </div>
  );
};

export default Safety;
