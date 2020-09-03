import React, { useState } from "react";

import { Card, Carousel, Avatar, Row, Col } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const Testimonials = () => {
  const [dotPosition, setDotPostion] = useState("right");
  const { Meta } = Card;
  return (
    <div>
      <p className="testimonials">Testimonials</p>
      <p className="testimonialsSub">Pleasant stories from people like you</p>
      <Carousel dotPosition={dotPosition} color="green" effect="fade" autoplay>
      
      <Row>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title="Card title"
        description="This is the description"
      />
    </Card>
      </Col>
      <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        Col
      </Col>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        Col
      </Col>
    </Row>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
};

const contentStyle = {
  height: "400px",
  color: "#333",
  lineHeight: "160px",
  textAlign: "center",
  background: "#333",
  borderRadius: "10px",
  padding: "30px",
  boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.125)",
};

export default Testimonials;
