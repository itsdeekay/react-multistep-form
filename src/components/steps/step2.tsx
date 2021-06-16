import React,{useState} from 'react';
import {  Field, ErrorMessage } from 'formik';
import JourneyDetail from '../../components/JourneyDetail'
import {Step2Props} from '../../utils/utils'

const Step2 = (props:Step2Props) =>{
     const { values,setStep,  next,errors, touched} = props
     const hasErrors = !!errors.bidAmount || !!errors.mobile || !!errors.name || !!errors.remarks
     const hasTouched = touched.bidAmount && touched.mobile || touched.name 
     const [isBid,setIsBid] = useState(touched.mobile)
  return(
        <>
        <div className="row">
        <JourneyDetail values = {values} setStep = {setStep} />
        </div>
        
        <div className="row">
         <div className="bid-amount">
           <div>
            <label htmlFor="bidAmount" placeholder="₹">₹</label>
            <span><Field name="bidAmount" type="text" size={values.bidAmount.toString().length===0?1:values.bidAmount.toString().length} /></span>
           </div>
         
         
         <span className="error"><ErrorMessage   name="bidAmount" /></span>
          </div>
         </div>

         <div className="checkbox-row row ">
         <label>
         <Field type="checkbox" name="negotiable" />
         &nbsp;Rate Negotiable
         </label>
         </div>
        {
          !isBid && (
            <div className="row">
            <button disabled={!!errors.bidAmount|| !touched.bidAmount} type="button" onClick={()=>setIsBid(true)} className="next-button">Next</button>
            </div>
          )
        }
         
        {isBid && (
          <>
            <div className="row">
            <div className="form-input">
            
            <Field name="mobile" type="text" />
            <label htmlFor="mobile" placeholder="Enter your 10 digits Mobile Number"></label>
            
            
              </div>
              
           </div>
           <div className="row ">
           <div className="check-input">
           <label>
           <Field type="checkbox" name="getUpdates" />
           &nbsp;Get updates on <span id="whatsapp">Whatsapp</span>
           </label>
           <span className="error"><ErrorMessage   name="mobile" /></span>
             </div>
           
           </div>
           <div className="row">
            <div className="form-input">
            
            <Field name="name" type="text" />
            <label htmlFor="name" placeholder="Enter your Name *"></label>
            <span className="error"><ErrorMessage   name="name" /></span>
              </div>
           </div>
  
           <div className="row">
            <div className="form-input">
            
            <Field name="remarks" type="text" />
            <label htmlFor="remarks" placeholder="Enter Remarks(optional)"></label>
            <span className="error"><ErrorMessage   name="remarks" /></span>
              </div>
           </div>
           <div className="row">
         <button disabled={hasErrors|| !hasTouched} type="button" onClick={()=>next()} className="next-button">Verify via OTP</button>
         </div>
           </>
        ) }
         
        </>
  )
}
export default Step2;