import React from "react";
import { Row, Col } from 'antd';

const Footer = () => {
  return (
    <div>
      <Row gutter={[48, 24]}>
        <Col span={6} >Company</Col>
        <Col span={6} >Company</Col>
        <Col span={6} >Company</Col>
        <Col span={6} >Company</Col>
      </Row>
      <Row gutter={[48, 24]}>
        <Col span={6} >Company</Col>
        <Col span={6} >Company</Col>
        <Col span={6} >Company</Col>
        <Col span={6} >Company</Col>
      </Row>
    </div>
  );
};

export default Footer;
