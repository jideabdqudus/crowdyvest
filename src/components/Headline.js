import React from "react";

import { Row, Col } from "antd";

const Headline = () => {
  return (
    <div>
      <Row>
        <Col span={24} xs={24} sm={12} md={24} lg={24} xl={24}>
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

export default Headline;
