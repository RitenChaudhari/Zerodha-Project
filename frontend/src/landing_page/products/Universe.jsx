import React from "react";

function Universe() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center mb-5">
        <h1>The Zerodha Universe</h1>
        <p className="mt-2">
          Expand your trading and investment experience even further with our
          partner platforms.
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="images/smallcaseLogo.png" alt="small case" />
          <p className="text-small text-muted mt-2">
            Thematic investment platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="images/zerodhaFundhouse.png"
            alt="small case"
            style={{ width: "50%" }}
          />
          <p className="text-small text-muted">Asset management</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="images/streakLogo.png"
            alt="small case"
            style={{ width: "40%" }}
          />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>

        <div className="col-4 p-3">
          <img src="images/goldenpiLogo.png" alt="small case" />
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>

        <div className="col-4 p-3">
          <img src="images/sensibullLogo.svg" alt="small case" />
          <p className="text-small text-muted">Options trading platform</p>
        </div>

        <div className="col-4 p-3">
          <img
            src="images/dittoLogo.png"
            alt="small case"
            style={{ width: "30%" }}
          />
          <p className="text-small text-muted">Insurance</p>
        </div>

        <button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"20%",margin:"0 auto"}}>Signup for Free</button>
      </div>
    </div>
  );
}

export default Universe;
