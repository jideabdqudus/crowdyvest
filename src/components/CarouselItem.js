import React, { Component } from "react";
import ReactTextTransition, { presets } from "react-text-transition";
import { Row, Col } from "antd";

const randomNumber = () => Math.floor(Math.random() * 9999999999 + 10000000000);

const texts = [
  "Industry; Innovation & Infrastructure.",
  "Sustainable Cities & Communities.",
  "Good Health living and Well-being.",
  "Reduced Inequalities for all.",
  "Cleanwater and Sanitation.",
];

class CarouselItem extends Component {
  state = {
    number: randomNumber(),
    textIndex: 0,
    textFastIndex: 0,
    paragraphIndex: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        number: randomNumber(),
        textIndex: this.state.textIndex + 1,
        paragraphIndex: this.state.paragraphIndex + 1,
      });
    }, 4000);
    setInterval(() => {
      this.setState({
        textFastIndex: this.state.textFastIndex + 1,
      });
    }, 150);
  }

  render() {
    return (
      <div>
        <p className="sdgHeader">Our Focus on SDGs</p>
        <section>
          <section className="sdgSubHeader">
            <Row>
              <Col xs={2} sm={4} md={6} lg={8} xl={8}></Col>
              <Col xs={20} sm={16} md={12} lg={8} xl={8}>
                <ReactTextTransition
                  text={texts[this.state.textIndex % texts.length]}
                  spring={presets.wobble}
                  delay={300}
                />
              </Col>
              <Col xs={2} sm={4} md={6} lg={8} xl={8}></Col>
            </Row>
          </section>
        </section>
      </div>
    );
  }
}

export default CarouselItem;
