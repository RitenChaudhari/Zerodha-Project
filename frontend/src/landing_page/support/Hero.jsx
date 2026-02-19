import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 mt-5 border-bottom" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row px-5 m-5" id="divClass">
        <div className="col-6 mb-5 mx-5">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            placeholder="Eg: how do i activate F&O, why is my order getting rejected"
            className="p-3 mb-4"
            style={{ width: "70%", borderRadius: "20px" }}
          />{" "}
          <br />
          <a href="">Track account opening</a>&nbsp;
          <a href="">Track segment activation</a>&nbsp;
          <br />
          <a href="">Intraday margins</a>&nbsp;
          <a href="">Kit user manual</a>&nbsp;
        </div>
        <div className="col"></div>
        <div className="col-4 p-5">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li><a href="">Current Takeovers and Delisting - January 2024</a></li>
            <li><a href="">Latest Intraday leverages - MIS & CO</a></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
