import React,{useState} from 'react';
import JourneyDetail from '../../components/JourneyDetail'
import BidDetail from '../../components/BidDetails'
import {Step4Props} from '../../utils/utils'

const Step4 = (props:Step4Props) =>{
  const { values,setStep} = props
  
  return(
        <>
        <div className="row">
        <JourneyDetail values = {values} setStep = {setStep} />
        </div>
        <div className="row">
        <BidDetail values = {values} setStep = {setStep} />
        </div>
        <div className="row">
         <button type="button" className="next-button">Submit</button>
         </div>
         
        </>
  )
}
export default Step4;