import * as Yup from 'yup';
import { Formik,Form, FormikErrors, FormikTouched } from 'formik';
export const initialValues = {
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
}

export const validationSchema = Yup.object({
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
  })

 
  export interface FormValues {
    source :string,
    destination:string,
    carType:string,
    numberOfTravellers:number,
    bidAmount:number,
    negotiable:boolean,
    mobile:string,
    getUpdates:boolean
    name :string,
    remarks?:string,
    otp:string 
  }


  export interface Step1Props{
      next : Function,
      errors:FormikErrors<FormValues>,
      touched:FormikTouched<FormValues>,
  }

  export interface Step2Props{
    next : Function,
    errors:FormikErrors<FormValues>,
    touched:FormikTouched<FormValues>,
    values:FormValues,
    setStep:Function
}

export interface Step3Props{
    next : Function,
    errors:FormikErrors<FormValues>,
    touched:FormikTouched<FormValues>,
    values:FormValues,
    setStep:Function,
    handleChange:Function
}


export interface Step4Props{
    values:FormValues,
    setStep:Function
}