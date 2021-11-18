import React from "react";
import Button from "@mui/material/Button";

function About() {
  return (
    <div className="intro">
      <div className="hello">
        <div>
          <div className="name">-Mohit Prasad Sah</div>
          <h1 className="typed trans">
            Hello,
            <br />I am
            <span
              className="typer"
              id="main"
              data-words=" Mohit, Web Developer"
              data-delay="100"
              data-deletedelay="1000"
            ></span>
            <span className="cursor" data-owner="main"></span>
          </h1>
        </div>
        <Button
          className="btn"
          variant="contained"
          size="large"
          onClick={() => {
            window.open("/Mohit Resume(1).pdf");
            return true;
          }}
        >
          Resume
        </Button>
      </div>
      <div className="img-box">
        <img className="trans front" src="/css.png" alt="" />
        <img className="trans mohit" src="/MOHIT.png" alt="" />

        <img className="trans back ijs" src="/js.png" alt="" />
        <img className="trans back ihtml" src="/html.png" alt="" />
        <img className="trans back icss" src="/cssback.png" alt="" />
      </div>
    </div>
  );
}
export default About;
