import React from "react";
import "./Result.css";

const Result = () => {
  return (
    <section class="type">
      <h1>
        <span>Creating Results</span> Boosting Sales
      </h1>
      <h4>We let the numbers do the talking</h4>

      <div class="type-r">
        <div class="type-col">
          <h2>
            <span className="orange">11+</span> <br /> Years of Excellence
          </h2>
        </div>
        <div class="type-col">
          <h2>
            <span className="orange">50+ </span>
            <br /> Team Members
          </h2>
        </div>
        <div class="type-col">
          <h2>
            <span className="orange">5445K+</span>
            <br />
            Keywords Ranked
          </h2>
        </div>
        <div class="type-col">
          <h2>
            <span className="orange">17K+</span>
            <br />
            Successful Projects
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Result;
