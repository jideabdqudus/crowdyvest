import React, { useState } from "react";

import { Card, Row, Col, Divider } from "antd";
import AvatarIcon from "../assets/vestavatar.png";

import makeCarousel from "react-reveal/makeCarousel";
// we'll need the Slide component for sliding animations
// but you can use any other effect
import Slide from "react-reveal/Slide";
// we'll use styled components for this tutorial
// but you can use any other styling options ( like plain old css )


const Containers = {
  border: "1px solid red",
  position: "relative",
  overflow: "hidden",
  width: "300px",
  height: "150px",
};
const CarouselUI = ({ children }) => <div className={Containers}>{children}</div>;
const Carousela = makeCarousel(CarouselUI);



const Testimonials = () => {
  return (
    <div>
      <p className="testimonials">Testimonials</p>
      <p className="testimonialsSub">Pleasant stories from people like you</p>
      <Carousela defaultWait={1000} /*wait for 1000 milliseconds*/>
        <Slide right>
          <div>
            <h1>Slide 1</h1>
            <p>Slide Description</p>
          </div>
        </Slide>
        <Slide right>
          <div>
            <h1>Slide 2</h1>
            <p>Slide Description</p>
          </div>
        </Slide>
      </Carousela>
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

// <Carousel dotPosition={dotPosition} color="green" effect="fade" autoplay>
//         <div>
//           <Col span={12} offset={6}>
//             <p
//               className="testimonialsItem"
//               style={{ maxHeight: "400px", paddingBottom: "20px" }}
//             >
//               I like Crowdyvest's reliability and awesome customer support. I
//               also like that Crowdyvest is keen on making remarkable impact in
//               our world.
//             </p>
//             <Divider orientation="left" plain>
//               <p className="testimonialName">Abiola Adigun</p>
//             </Divider>
//             <Row style={{ paddingBottom: "60px" }}>
//               <Col>
//                 <img
//                   src={AvatarIcon}
//                   alt="Avatar Icon"
//                   className="testimonialsIcon"
//                 />
//               </Col>
//             </Row>
//           </Col>
//         </div>
//         <div>
//           <Col span={12} offset={6}>
//             <p className="testimonialsItem">
//               Quite impressed with the new user interface on the Crowdyvest
//               platform. All necessary updates on the progress of my sponsorship
//               are made available within just a click.
//             </p>
//             <Divider orientation="left" plain>
//               <p className="testimonialName">Abiola Adigun</p>
//             </Divider>
//             <Row>
//               <Col>
//                 <img
//                   src={AvatarIcon}
//                   alt="Avatar Icon"
//                   className="testimonialsIcon"
//                 />
//               </Col>
//             </Row>
//           </Col>
//         </div>
//         <div>
//           <Col span={12} offset={6}>
//             <p className="testimonialsItem">
//               Quite impressed with the new user interface on the Crowdyvest
//               platform. All necessary updates on the progress of my sponsorship
//               are made available within just a click.
//             </p>
//             <Divider orientation="left" plain>
//               <p className="testimonialName">Abiola Adigun</p>
//             </Divider>
//             <Row>
//               <Col>
//                 <img
//                   src={AvatarIcon}
//                   alt="Avatar Icon"
//                   className="testimonialsIcon"
//                 />
//               </Col>
//             </Row>
//           </Col>
//         </div>
//       </Carousel>
