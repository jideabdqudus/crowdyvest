import React from "react";
import { Row, Col, Divider } from "antd";
import AvatarIcon from "../assets/vestavatar.png";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import styled from "styled-components";

const CarouselUI = ({ children }) => <Container>{children}</Container>;
const Carousela = makeCarousel(CarouselUI);
const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 300px;
  float: center;
  margin: auto;
  height: 300px;
`;

const Testimonials = () => {
  return (
    <div>
      <p className="testimonials">Testimonials</p>
      <p className="testimonialsSub">Pleasant stories from people like you</p>
      <Carousela defaultWait={3000} /*wait for 1000 milliseconds*/>
        <Slide right>
          <div>
            <Col>
              <p className="testimonialsItem">
                Quite impressed with the new user interface on the Crowdyvest
                platform. All necessary updates on the progress of my
                sponsorship are made available within just a click.
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
        </Slide>
        <Slide right>
          <div>
            <Col>
              <p className="testimonialsItem">
                It’s refreshing to come across companies that put words into
                action. Crowdyvest is all about action via excellent investor
                experience through quality service.
              </p>
              <Divider orientation="left" plain>
                <p className="testimonialName">Ademola Taiwo</p>
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
        </Slide>
        <Slide right>
          <div>
            <Col>
              <p className="testimonialsItem">
                I like Crowdyvest's reliability and awesome customer support. I
                also like that Crowdyvest is keen on making remarkable impact in
                our world.
              </p>
              <Divider orientation="left" plain>
                <p className="testimonialName">Jide Abdul-Qudus</p>
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
        </Slide>
      </Carousela>
    </div>
  );
};

export default Testimonials;
