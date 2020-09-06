import React from "react";
import { Row, Col } from "antd";
import "./layout.css";

const Footer = () => {
  return (
    <div>
      <Row gutter={[48, 24]}>
        <Col span={6} xs={24} xl={6}>
          <p  className="footerHeader">Company</p>
          <li
            style={{
              textDecoration: "none",
              fontSize: "14px",
              listStyle: "none",
              fontWeight: "normal",
            }}
          >
            <ul style={{ padding: "0px" }}>About</ul>
            <ul style={{ padding: "0px" }}>Testimonials</ul>
            <ul style={{ padding: "0px" }}>FAQ</ul>
          </li>
        </Col>
        <Col span={6} xs={24} xl={6} className="footerHeader">
        <p  className="footerHeader">Products</p>
          <li
            style={{
              textDecoration: "none",
              fontSize: "14px",
              listStyle: "none",
              fontWeight: "normal",
            }}
          >
            <ul style={{ padding: "0px" }}>Sponsorship</ul>
            <ul style={{ padding: "0px" }}>Savings</ul>
            <ul style={{ padding: "0px" }}>CVQuity</ul>
          </li>
        </Col>
        <Col span={6} xs={24} xl={6} className="footerHeader">
        <p  className="footerHeader">Legal</p>
          <li
            style={{
              textDecoration: "none",
              fontSize: "14px",
              listStyle: "none",
              fontWeight: "normal",
            }}
          >
            <ul style={{ padding: "0px" }}>Terms of Use</ul>
            <ul style={{ padding: "0px" }}>Terms of Sponsorship</ul>
            <ul style={{ padding: "0px" }}>Privacy Policy</ul>
            <ul style={{ padding: "0px" }}>Disclaimer</ul>
          </li>
        </Col>
        <Col span={6} xs={24} xl={6} className="footerHeader">
        <p  className="footerHeader">Contact</p>
          <li
            style={{
              textDecoration: "none",
              fontSize: "14px",
              listStyle: "none",
              fontWeight: "normal",
            }}
          >
            <ul style={{ padding: "0px" }}>+234 909 9999 830</ul>
            <ul style={{ padding: "0px" }}>info@crowdyvest.com</ul>
            <ul style={{ padding: "0px" }}>
              2nd Floor, SRO Plaza, KM 11, Lekki Epe Expressway, Ikate Elegushi,
              Lekki, Lagos.
            </ul>
          </li>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
