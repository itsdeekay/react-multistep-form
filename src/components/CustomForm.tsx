import React,{useState} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ImportsNotUsedAsValues } from 'typescript';

interface FormValues{
  source :string,
  destination:string,
  carType:string,
  numberOfTravellers:number,
  bidAmount:number,
  negotiable:boolean,
  mobile:string,
  name :string,
  remarks?:string,
  otp:string 
}

function CustomForm() {
    const [step,setStep] = useState(1)
  return (
    <div className="form">
      <div className="form-bar">
          <div className="form-bar-text">
          Place your Bid({step}/4 step)
          </div>
      </div>
      <div className="form-fields">
      <Formik <FormValues>
       initialValues={{ 
        source :'',
        destination:'',
        carType:'',
        numberOfTravellers:1,
        bidAmount:0,
        negotiable:false,
        mobile:'',
        name :'',
        remarks:'',
        otp: ''
        }}
       validationSchema={Yup.object({
         source: Yup.string().required('Required'),
         destination: Yup.string().required('Required'),
         carType: Yup.string().required('Required'),
         numberOfTravellers: Yup.number()
         .min(1, `Minimum travellers should be 1`)
         .when('carType',{
           is:'SUV',
           then:Yup.number().max(6,'Maximum 6 travellers are allowed for this car'),
           otherwise : Yup.number().max(4,'Maximum 4 travellers are allowed for this car')
         }),
         bidAmount:Yup.number().required('Required').min(1, `Minimum bid amount should be 1`),
         negotiable : Yup.boolean(),
         mobile:Yup.string().required('Required')
         .matches(/^[1-9]\d{0,9}$/,'Number should have max 10 digits'),
         name:Yup.string().required('Required'),
         remarks :Yup.string(),
         otp:Yup.string().required('Required')
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >{({
      setFieldValue,
      setFieldTouched,
      values,
      errors,
      touched,
    }) => (
       <Form className="rendered-form">
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
         <div className="bid-amount">
           <div>
            <label htmlFor="bidAmount" placeholder="₹">₹</label>
            <span><Field name="bidAmount" type="text" size={values.bidAmount.toString().length===0?1:values.bidAmount.toString().length} /></span>
           </div>
         
         
         <span className="error"><ErrorMessage   name="bidAmount" /></span>
          </div>
         </div>

         <div className="row">
         <button type="button" className="next-button">Submit</button>
         </div>
         
         
 
         
       </Form>
    )}
     </Formik>
    
      </div>
    </div>
  );
}

export default CustomForm;
