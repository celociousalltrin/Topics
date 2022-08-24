import React from 'react';
import {useFormik} from "formik";
import * as yup from "yup";
import "./Forms.css";

const Forms = () => {
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
            .max(15, "Must be 15 chaaracters or less")
            .required("Required"),
            lastName:yup.string()
            .max(15, "Must be 10 chaaracters or less")
            .required("Required"),
            email:yup.string()
            .email("Invalid email address")
            .required("Required"),
        })
    })

  return (
    <div className='sheet'>
        <form onSubmit={formik.handleSubmit}>
            <input
            name="firstName"
            type="text"
            placeholder='firstname...'
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
    {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
             <input
            name="lastName"
            type="text"
            placeholder='lastname...'
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
             {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
             <input
            name="email"
            type="email"
            placeholder='email..'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Forms