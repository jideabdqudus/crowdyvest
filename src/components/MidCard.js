import React, { Fragment } from "react";

import { Row, Col, Card, Divider } from "antd";

import Savings from "../assets/savings.svg";
import Sponsorships from "../assets/sponsorships.svg";
import Equity from "../assets/cvquity.svg";
import Donate from "../assets/donate.svg";
import { ArrowRightOutlined } from "@ant-design/icons";

const MidCard = () => {
  const { Meta } = Card;
  return (
    <Fragment>
      <Row gutter={16}>
        <Col
          span={24}
          xl={6}
          sm={24}
          md={24}
          style={{
            marginBottom: "20px",
          }}
        >
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
              description="Acheive your financial goals by saving with us daily, weekly, and monthly or lock in your funds and enjoy rates on your savings."
            />
            <br />
            <a href="#!" style={{ paddingTop: "20px" }}>
              Start Saving <ArrowRightOutlined />
            </a>
          </Card>
        </Col>
        <Col
          span={24}
          xl={6}
          sm={24}
          md={24}
          style={{
            marginBottom: "20px",
          }}
        >
          <Card
            hoverable={false}
            cover={
              <img
                src={Sponsorships}
                alt="Sponsorships"
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
              description="Sponsor and earn from various impact-driven projects in a wide range of sectors like agriculture, and transportation"
            />
            <br />
            <a href="#!" style={{ paddingTop: "20px" }}>
              Sponsor Now <ArrowRightOutlined />
            </a>
          </Card>
        </Col>
        <Col
          span={24}
          xl={6}
          sm={24}
          md={24}
          style={{
            marginBottom: "20px",
          }}
        >
          <Card
            hoverable={false}
            cover={
              <img
                src={Equity}
                alt="equity"
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
              description="Invest in highly vetted startups in Africa. Co-fund startups solving real problems and adding value across different sectors in Africa."
            />
            <br />
            <a href="#!" style={{ paddingTop: "20px" }}>
              Get Started <ArrowRightOutlined />
            </a>
          </Card>
        </Col>
        <Col
          span={24}
          xl={6}
          sm={24}
          md={24}
          style={{
            marginBottom: "20px",
          }}
        >
          <Card
            hoverable={false}
            cover={
              <img
                src={Donate}
                alt="Donate"
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
              description="Crowdyvest Donate is our response to supporting each other during times of crisis and to give our Nation hope.              "
            />
            <br />
            <a href="#!" style={{ paddingTop: "20px" }}>
              Donate Now <ArrowRightOutlined />
            </a>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default MidCard;
