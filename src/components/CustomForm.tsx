import React,{useState} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ImportsNotUsedAsValues } from 'typescript';
import Step1 from "./steps/Step1"
import Step2 from "./steps/Step2"
import Step3 from "./steps/Step3"
import Step4 from "./steps/Step4"
import FormValues from "../interfaces/JourneyInterface"


function CustomForm() {
    const [step,setStep] = useState(1)
    const next = () => {
      // update state.step by adding to previous state
      setStep(s=>s+1)
    }
    
    // process to previous step
    const editJourney = () => {
      // update state.step by minus 1 from previous state
      setStep(1)
    }
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
        getUpdates:false,
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
         getUpdates : Yup.boolean(),
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
     >{({ values, errors, touched, handleChange,handleSubmit, handleBlur}) => (
       <Form className="rendered-form">
         {renderStep(step, values, errors, touched, handleChange, handleSubmit, next, editJourney,handleBlur,setStep)}
         
         
         

         

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

const renderStep = (step:number, values:FormValues, errors:any, touched:any, handleChange:Function, handleSubmit:Function, next:Function, editJourney:Function, handleBlur:Function,setStep:Function) => {
  switch (step) {
    case 1:
        return (
            <Step1 
            values={values}
            errors={errors} 
            touched={touched}
            handleChange={handleChange}
            next={next} 
            handleBlur = {handleBlur}
            />);
    case 2:
        
          return (
            <Step2 
            values={values}
            errors={errors} 
            touched={touched}
            handleChange={handleChange}
            next={next} 
            handleBlur = {handleBlur}
            setStep = {setStep}
            />);
    case 3:
      return (
        <Step3 
        values={values}
        errors={errors} 
        touched={touched}
        handleChange={handleChange}
        next={next} 
        handleBlur = {handleBlur}
        setStep = {setStep}
        />);
    default:
      return (
        <Step4 
        values={values}
        errors={errors} 
        touched={touched}
        handleChange={handleChange}
        next={next} 
        handleBlur = {handleBlur}
        />);
  }
};

export default CustomForm;
