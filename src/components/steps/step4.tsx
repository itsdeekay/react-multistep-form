import React,{useState} from 'react';
import JourneyDetail from '../../components/JourneyDetail'
import BidDetail from '../../components/BidDetails'

const Step4 = (props:any) =>{
  const { values,setStep, handleChange, handleSubmit, next,errors, touched, handleBlur} = props
    // const nameHasError = errors.name && touched.name
    // const phoneHasError = errors.phone && touched.phone
  return(
        <>
        <div className="row">
        <JourneyDetail values = {values} setStep = {setStep} />
        </div>
        <div className="row">
        <BidDetail values = {values} setStep = {setStep} />
        </div>
        </>
  )
}
export default Step4;