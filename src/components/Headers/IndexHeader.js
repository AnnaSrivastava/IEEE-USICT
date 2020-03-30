import React from "react";

// reactstrap components
import { Container } from "reactstrap";


class IndexHeader extends React.Component
 {
   render(){
  return (      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/antoine-barres.jpg") + ")", 
        }}
      >       <canvas className="background" style = {{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex :-1,
      }}></canvas>
        <div className="filter" />
        <div className="content-center">
          
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">IEEE USICT</h1>
              <div className="">
              </div>
              <div className="">
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              Lorem Ipsum Blakdhsjfgeuigfiurguiegriuei
            </h2>
          </Container>
        </div>
        <div
          className=""
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
        <h6 className="category category-absolute">
        </h6>
      </div>

  );
        }
}

export default IndexHeader;
