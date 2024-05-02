import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="container-a">
      <h1 className="centered-b">
        Elevate Your Brand With Digital Marketing Strategies
      </h1>
      <h3>
        Let’s Change The Trajectory Of Your Business With The Best Digital
        Marketing Agency. Contact Us <br />
        Now!
      </h3>
      <div>
        <form className="form">
          <input className="input-a" placeholder="Email" />
          <input className="input-b" placeholder="password" />
          <button className="btn-cc">Get Your Free Analysis</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
