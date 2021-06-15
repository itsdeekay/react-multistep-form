import React,{useState} from 'react';
import { Field, ErrorMessage } from 'formik';


const Step1 = ( props:any) =>{
    const { values, handleChange, handleSubmit, next,errors, touched, handleBlur} = props
    // const nameHasError = errors.name && touched.name
    // const phoneHasError = errors.phone && touched.phone
    const hasErrors = errors.source || errors.destination || errors.carType || errors.numberOfTravellers
    const hasTouched = touched.source && touched.destination 
  return(
        <>
        <div className="row">
            <div className="form-input">
              <Field name="source" type="text" />
              <label htmlFor="source" placeholder="Source Location *"></label>
              <span className="error"><ErrorMessage   name="source" /></span>
              
            </div>
         <div className="form-input">
              <Field name="destination" type="text" />
              <label htmlFor="destination" placeholder="Destination *"></label>
              <span className="error"><ErrorMessage   name="destination" /></span>
            
         </div>
         </div>
         <div className="row">
         <div className="form-input">
         
            <Field name="carType" as="select">
            <option value="">Select Car</option>
              <option value="HatchBack">HatchBack</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              </Field>
            <label htmlFor="carType" placeholder="Enter Car Type *"></label>
            <span className="error"><ErrorMessage   name="carType" /></span>
          </div>
         </div>
         <div className="row">
         <div className="form-input">
         
         <Field name="numberOfTravellers" type="text" />
         <label htmlFor="numberOfTravellers" placeholder="Number of Travellers"></label>
         <span className="error"><ErrorMessage   name="numberOfTravellers" /></span>
          </div>
         </div>
         <div className="row">
         <button disabled={hasErrors|| !hasTouched} type="button" onClick={next} className="next-button">Enter Bid Details</button>
         </div>
        </>
  )
}
export default Step1;