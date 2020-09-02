import React, { Fragment } from "react";

import { Card, Col, Row } from "antd";

const ImpactCard = () => {
  return (
    <Fragment>
      <div>
        <h1 className="impact">Our Impact</h1>
        <p className="impactSub">
          We are committed to growth across every area of our business
        </p>
      </div>
      <div className="site-card-wrapper">
        <Row gutter={30}>
          <Col span={24} xl={8} sm={24} md={24}>
            <Card style={{ borderRadius: "7px", marginBottom: "30px" }}>
              <p className="impactCard">89,238</p>
              <p className="impactCardSub">User accounts</p>
            </Card>
          </Col>
          <Col span={24} xl={8} sm={24} md={24}>
            <Card style={{ borderRadius: "7px", marginBottom: "30px" }}>
              <p className="impactCard">8,596</p>
              <p className="impactCardSub">Active sponsors</p>
            </Card>
          </Col>
          <Col span={24} xl={8} sm={24} md={24}>
            <Card style={{ borderRadius: "7px", marginBottom: "30px" }}>
              <p className="impactCard">₦4.69 Billion</p>
              <p className="impactCardSub">Total Amount raised</p>
            </Card>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col span={24} xl={8} sm={24} md={24}>
            <Card style={{ borderRadius: "7px", marginBottom: "30px" }}>
              <p className="impactCard">12</p>
              <p className="impactCardSub">Projects funded</p>
            </Card>
          </Col>
          <Col span={24} xl={8} sm={24} md={24}>
            <Card style={{ borderRadius: "7px", marginBottom: "30px" }}>
              <p className="impactCard">5</p>
              <p className="impactCardSub">Project partners</p>
            </Card>
          </Col>
          <Col span={24} xl={8} sm={24} md={24}>
            <Card style={{ borderRadius: "7px", marginBottom: "30px" }}>
              <p className="impactCard">16</p>
              <p className="impactCardSub">States covered</p>
            </Card>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col span={24} xl={8} sm={24} md={24}>
            <Card style={{ borderRadius: "7px", marginBottom: "30px" }}>
              <p className="impactCard">7</p>
              <p className="impactCardSub">SDGs Funded</p>
            </Card>
          </Col>
        </Row>
      </div>
      <br />
    </Fragment>
  );
};

export default ImpactCard;
