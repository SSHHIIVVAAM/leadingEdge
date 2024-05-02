import React from "react";
import "./Client.css";
import img01 from "../assets/img001.png";
import img02 from "../assets/img002.png";
import img03 from "../assets/img003.png";
import img04 from "../assets/img004.png";
import img05 from "../assets/img005.png";
import img06 from "../assets/img006.png";
import img07 from "../assets/img007.png";
import img08 from "../assets/img008.png";
import img09 from "../assets/img009.png";

const Client = () => {
  return (
    <div>
      <section class="type">
        <h4>
          <b>Our Featured Clients</b>
        </h4>

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

export default Client;
