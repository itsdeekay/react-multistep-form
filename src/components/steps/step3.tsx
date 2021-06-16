import React,{ChangeEvent, useState} from 'react';
import { Field, ErrorMessage } from 'formik';
import JourneyDetail from '../../components/JourneyDetail'
import BidDetail from '../../components/BidDetails'
import {Step3Props} from '../../utils/utils'
const Step3 = (props:Step3Props) =>{
     const { values,setStep, handleChange, next,errors, touched} = props
     const hasErrors = !!errors.otp 
     const hasTouched = touched.otp 

    const otpChange = (e:React.FormEvent<HTMLInputElement>) =>{
      handleChange(e);
      if(e.currentTarget.value==='1234'){
        next();
      }
    }
  return(
        <>
        <div className="row">
        <JourneyDetail values = {values} setStep = {setStep} />
        </div>
        <div className="row">
        <BidDetail values = {values} setStep = {setStep} />
        </div>
        <div className="row">
            <div className="otp-content">
            {`We’ve sent an OTP to your mobile number, Please enter it below to submit your bid ${values.mobile}`}
            <button className="edit" onClick={()=>setStep(2)}>Edit</button>
            </div>
        </div>
        <div className="row">
          <div className="otp-input">
          
  <Field name="otp" type="text" maxLength="4" onChange={otpChange}  />

          
          
          <span className="error"><ErrorMessage   name="otp" /></span>
            </div>
         </div>
         <div className="row">
            <div className="resendOTP">
            
            <a className="edit" >Resend OTP Again</a>
            </div>
        </div>
        <div className="row">
         <button disabled={hasErrors|| !hasTouched} type="button" onClick={()=>{if(values.otp==="1234")next()}} className="next-button">Verify via OTP</button>
         </div>
        </>
  )
}
export default Step3;