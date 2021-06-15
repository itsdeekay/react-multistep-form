import React from 'react';
import FormValues from "../interfaces/JourneyInterface"

function BidDetails(props:any) {
  const {mobile,name,remarks,bidAmount,negotiable} = props.values

  return (
    <div className="bidCard">
      <div className="top">
        <span className="title">BID DETAILS</span>
        
        </div>
        <div className="main">

        
        <div className="content">
          <div>
            {`+91-${mobile}`}
          </div>
          <div>
              {name}
          </div>
          <div>
              {remarks}
          </div>
        </div>
        <div className="price">
            <div>
                {`₹${bidAmount}`}
            </div>
            <div className="fix-price">
                {negotiable?'Fixed Price' : 'Negotiable'}
            </div>
        </div>
        </div>
    </div>
  );
}

export default BidDetails;
