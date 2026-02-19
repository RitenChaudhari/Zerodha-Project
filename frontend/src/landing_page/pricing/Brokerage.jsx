import React from "react";

function Brokerage() {
  return (
    <div className="container mt-5 mb-5 border-top">
      <div className="row">
        <div className="col-8 p-4">
          <a href="" style={{textDecoration:"none"}}><h3 className="mb-3 text-center">
            Brokerage calculator
          </h3></a>
          <ul style={{ lineHeight: "3rem" }} className="text-muted">
            <li>
              Call & trade and RMS auto-squareoff: Additional charges of Rs.50 +
              GST per order
            </li>
            <li>Digital contact notes will be sent via e-mail</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              Rs 20 per contract note. Courier charges apply
            </li>
            <li>
              For NRI account(non-PIS), 0.5% or Rs100 per executed order for
              equity(whichever is lower)
            </li>
            <li>
              For NRI account(PIS),0.5% or Rs200 per executed order for
              equity(whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged Rs 40 per executed order instead of Rs 20 per executed
              order
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{textDecoration:"none"}}><h3 className="ml-3">List of charges</h3></a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
