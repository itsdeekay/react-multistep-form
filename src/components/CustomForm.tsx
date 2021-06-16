import React,{useState} from 'react';
import { Formik,Form, FormikErrors, FormikTouched } from 'formik';
import Step1 from "./steps/Step1"
import Step2 from "./steps/Step2"
import Step3 from "./steps/Step3"
import Step4 from "./steps/Step4"
//import FormValues from "../interfaces/JourneyInterface"
import {initialValues,validationSchema,FormValues} from '../utils/utils'


function CustomForm() {
  const [step, setStep] = useState(1);

  const next = () => {
    // update state.step by adding to previous state
    setStep(s => s + 1)
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
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >{({ values, errors, touched, handleChange, handleSubmit, handleBlur }) => (
          <Form className="rendered-form">
            {renderStep(step, values, errors, touched, handleChange, handleSubmit, next, handleBlur, setStep)}
          </Form>
        )}
        </Formik>

      </div>
    </div>
  );
}

const renderStep = (step:number, values:FormValues, errors:FormikErrors<FormValues>, touched:FormikTouched<FormValues>, handleChange:Function, handleSubmit:Function, next:Function, handleBlur:Function,setStep:Function) => {
  switch (step) {
    case 1:
        return (
            <Step1 
            errors={errors} 
            touched={touched}
            next={next} 
            />);
    case 2:
        
          return (
            <Step2 
            values={values}
            errors={errors} 
            touched={touched}
            next={next} 
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
        setStep = {setStep}
        />);
    default:
      return (
        <Step4 
        values={values}
        setStep = {setStep}
        
        />);
  }
};

export default CustomForm;
