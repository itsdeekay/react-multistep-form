import React from 'react';
import FormValues from "../interfaces/JourneyInterface"

function JourneyDetail(props:any) {
  const {source,destination,numberOfTravellers,carType} = props.values

  return (
    <div className="journeyCard">
      <div className="top">
        <span className="title">JOURNEY DETAILS </span>
        <button className="edit" onClick={()=>props.setStep(1)}>Edit</button>
        </div>
        
        <div className="content">
          <div>
            {`${source}-${destination}`}
          </div>
          <div>
              {`${numberOfTravellers} ${numberOfTravellers>1?'Persons' : 'Persons'}, ${carType}`}
          </div>
        </div>
    </div>
  );
}

export default JourneyDetail;
