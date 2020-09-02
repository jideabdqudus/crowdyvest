import React from "react";
import { Row, Col, Card, Divider } from "antd";
import HeroTop from "../components/HeroTop";
import "./pages.css";
import Savings from "../assets/savings.svg";
import Sponsorships from "../assets/sponsorships.svg";
import { ArrowRightOutlined } from "@ant-design/icons";

const Home = () => {
  const { Meta } = Card;
  return (
    <div>
      <HeroTop />
      <Row>
        <Col className="boxCenter" xs={24} sm={12} md={12} lg={12} xl={12}>
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
      <Row gutter={16}>
        <Col span={6} xl={6}>
          <Card
            hoverable={false}
            cover={
              <img
                src={Savings}
                alt="savings"
                style={{
                  width: "170px",
                  paddingLeft: "20px",
                  marginTop: "20px",
                }}
              />
            }
          >
            <Divider style={{ padding: "0px", marginTop: "0px" }} />
            <Meta
              style={{ padding: "0px", margin: "0px" }}
              description="Acheive your financial goals by saving with us daily, weekly, and monthly or lock in your funds and enjoy the most impressive rates on your savings."
            />
            <br />
            <a href="#!" style={{ paddingTop: "20px" }}>
              Start Saving <ArrowRightOutlined />
            </a>
          </Card>
        </Col>
        <Col span={6} xl={6}>
          <Card title="Card title">Card content</Card>
        </Col>
        <Col span={6} xl={6}>
          <Card title="Card title">Card content</Card>
        </Col>
        <Col span={6} xl={6}>
          <Card title="Card title">Card content</Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
