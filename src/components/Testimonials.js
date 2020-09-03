import React, { useState } from "react";

import { Card, Carousel, Avatar, Row, Col, Divider } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import AvatarIcon from "../assets/vestavatar.png";
const Testimonials = () => {
  const [dotPosition, setDotPostion] = useState("right");
  const { Meta } = Card;
  return (
    <div>
      <p className="testimonials">Testimonials</p>
      <p className="testimonialsSub">Pleasant stories from people like you</p>
      <Carousel dotPosition={dotPosition} color="green" effect="fade" autoplay>
        <div>
          <Col span={12} offset={6}>
            <p
              className="testimonialsItem"
              style={{ maxHeight: "400px", paddingBottom: "20px" }}
            >
              I like Crowdyvest's reliability and awesome customer support. I
              also like that Crowdyvest is keen on making remarkable impact in
              our world.
            </p>
            <Divider orientation="left" plain>
              <p className="testimonialName">Abiola Adigun</p>
            </Divider>
            <Row style={{ paddingBottom: "60px" }}>
              <Col>
                <img
                  src={AvatarIcon}
                  alt="Avatar Icon"
                  className="testimonialsIcon"
                />
              </Col>
            </Row>
          </Col>
        </div>
        <div>
          <Col span={12} offset={6}>
            <p className="testimonialsItem">
              Quite impressed with the new user interface on the Crowdyvest
              platform. All necessary updates on the progress of my sponsorship
              are made available within just a click.
            </p>
            <Divider orientation="left" plain>
              <p className="testimonialName">Abiola Adigun</p>
            </Divider>
            <Row>
              <Col>
                <img
                  src={AvatarIcon}
                  alt="Avatar Icon"
                  className="testimonialsIcon"
                />
              </Col>
            </Row>
          </Col>
        </div>
        <div>
          <Col span={12} offset={6}>
            <p className="testimonialsItem">
              Quite impressed with the new user interface on the Crowdyvest
              platform. All necessary updates on the progress of my sponsorship
              are made available within just a click.
            </p>
            <Divider orientation="left" plain>
              <p className="testimonialName">Abiola Adigun</p>
            </Divider>
            <Row>
              <Col>
                <img
                  src={AvatarIcon}
                  alt="Avatar Icon"
                  className="testimonialsIcon"
                />
              </Col>
            </Row>
          </Col>
        </div>
      </Carousel>
    </div>
  );
};

const contentStyle = {
  height: "300px",
  color: "#333",
  lineHeight: "160px",
  textAlign: "center",
  background: "#333",
  borderRadius: "10px",
  padding: "30px",
  boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.125)",
};

export default Testimonials;
