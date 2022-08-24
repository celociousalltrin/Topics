import React from 'react';
import { useFormik } from 'formik';
import * as yup from "yup";

const Form = () => {
    const formik = useFormik({
        initialValues:{
            firstName:"",
            lastName:"",
            email:"",
        },
        onSubmit:(values)=>{
            console.log(values)
        },
        validationSchema:yup.object({
            firstName:yup.string()
            .max(15,"maximum character must be less than 15")
            .required("Required"),
            lastName:yup.string()
            .max(10,"maximum 10 character less")
            .required("Required"),
            email:yup.string()
            .email("Invalid email address")
            .required("Required")
        })
    })
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <input name="firstName" id="firstName" type="text"
            placeholder='firstName...' 
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            {formik.touched.firstName && formik.errors.firstName ? 
            <p>{formik.errors.firstName}</p> : null}

            <input name="lastName" id="lastName" type="text"
            placeholder='lastName...' 
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            {formik.touched.lastName && formik.errors.lastName ? 
            <p>{formik.errors.lastName}</p> : null}

            <input name="email" id="email" type="email"
            placeholder='email...' 
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            {formik.touched.email && formik.errors.email ? 
            <p>{formik.errors.email}</p> : null}
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form