import React from "react";
import { useFormik } from "formik"
import * as yup from "yup";

const formValidationSchema=yup.object({
  email: yup.string().min(5,"Need a longer email😆").required("why not fill the email"),
  password: yup.string().min(8, "Need a longer Password😆").required("why not fill the password")
})

export function BasicForm() {

 const formik=useFormik({
  initialValues: {email: "",password: ""},
  validationSchema: formValidationSchema,
  onSubmit: (values)=>{
    console.log("onSubmit",values)
  }
 })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input 
        id="email"
        name="email"
        value={formik.values.email} 
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="email" placeholder="Email" />
        <br />
        {formik.touched.email && formik.errors.email?formik.errors.email:""}
        <br />
        <input 
        id="password"
        name="password"
        value={formik.values.password} 
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="password" placeholder="password" />
        {formik.touched.password && formik.errors.password?formik.errors.password:""}
        <button type="submit">Submit</button>
      </form>

    </div>
  );
}
