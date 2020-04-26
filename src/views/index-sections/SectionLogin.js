
import React from "react";

// reactstrap components
import {
  //Button,
  // Card,
  // Form,
  //Input,
 // InputGroupAddon,
  //InputGroupText,
  //InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import "tachyons";
// core components
import Flippy, { FrontSide, BackSide } from 'react-flippy';

function SectionLogin() {
  return (
    <>
      <div
        className="section section-image section-login"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")"
        }}
      >
       <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Flippy
                  flipOnClick={true} 
                  flipOnHover={false}// default false
                  flipDirection="horizontal" // horizontal or vertical
                  style={{ width: '350px', height: '450px' }} >
    <FrontSide
      style={{
        backgroundColor: '#f5593d',
      }}
      className="card ml-auto mr-auto"
    >      <div className="social-line">

      <strong><h4 className="title tc mx-auto">Industrial Visit</h4></strong>
      <img 
        src={require("assets/img/3447ac3e-d56e-45e9-8a3a-ccbd5305d3b7.jpg")}
        alt="..."></img>
        <p className="tl white">IEEE USICT conducted an Industrial Visit to
   Network Bulls, Gurugram on 12 February 2020 for the students of USICT.
The event initiated with a practical session on the basics of Networking,
followed by a very informative theory lesson.</p>
<h6 className="tr white">*click to flip*</h6>
      </div>
    </FrontSide>
    <BackSide style={{backgroundColor: '#f5593d'}}
      className="card ml-auto mr-auto">
<div>      
<strong><h4 className="title tc mx-auto">Workshop</h4></strong>
<img 
  src={require("assets/img/images.jpg")}
  alt="..."></img>
  <p className="tl white">We.connect and IEEE USICT conducted the Alexa Workshop
   on 5th March 2020.The Workshop was attended by many students who were filled
    with vigour and enthusiasm and also their 
active participation helped in making this event successful!</p>
</div>
    </BackSide>
  </Flippy>
                              
            </Col>
          </Row>
          <h2 className="tc white washed-blue ml-auto mr-auto text-center title"
        md="8">...And More!</h2>
        </Container>
        

      </div>{" "}
    </>
  );
}

export default SectionLogin;
