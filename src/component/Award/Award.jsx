import React from "react";
import "./Award.css";
import img01 from "../assets/img01.png";
import img02 from "../assets/img02.png";
import img03 from "../assets/img03.png";
import img04 from "../assets/img04.png";
import img05 from "../assets/img05.png";
import img06 from "../assets/img06.png";
import img07 from "../assets/img07.png";
import img08 from "../assets/img08.png";
import img09 from "../assets/img09.png";

const Award = () => {
  return (
    <div>
      <section class="type">
        <h4><span>Award winning</span> digital marketing agency</h4>

        <div class="type-row">
          <div class="type-col">
            <img src={img01} alt="" />
          </div>
          <div class="type-col">
            <img src={img02} alt="" />
          </div>
          <div class="type-col">
            <img src={img03} alt="" />
          </div>
          <div class="type-col">
            <img src={img04} alt="" />
          </div>
          <div class="type-col">
            <img src={img05} alt="" />
          </div>
          <div class="type-col">
            <img src={img06} alt="" />
          </div>
          <div class="type-col">
            <img src={img07} alt="" />
          </div>
          <div class="type-col">
            <img src={img08} alt="" />
          </div>
          <div class="type-col">
            <img src={img09} alt="" />
          </div>
          <div class="type-col">
            <img src={img06} alt="" />
          </div>
          <div class="type-col">
            <img src={img03} alt="" />
          </div>
          <div class="type-col">
            <img src={img01} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Award;
