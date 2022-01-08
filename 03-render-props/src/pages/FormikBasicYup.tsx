import React from "react";
import { useFormik, FormikErrors } from "formik";
import "styles/styles.css";
import * as yup from "yup";

export interface RegisterI {
  name: string;
  lastname: string;
  email: string;
}

export default function FormikBasicYup() {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
    },
    onSubmit: (data: RegisterI) => {
      console.log(data);
    },
    validationSchema: yup.object({
      name: yup.string().max(15, "Max 15 characters").required("Required"),
      lastname: yup.string().max(15, "Max 15 characters").required("Required"),
      email: yup.string().email("Invalid email").required("Required"),
    }),
  });

  return (
    <div>
      <h1>Formik yup basic</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name</label>
        <input {...getFieldProps("name")} type="text" id="name" />
        {touched.name && errors.name && <span>{errors.name}</span>}

        <label htmlFor="lastname">Lastname</label>
        <input {...getFieldProps("lastname")} type="text" id="lastname" />
        {touched.lastname && errors.lastname && <span>{errors.lastname}</span>}

        <label htmlFor="email">Email</label>
        <input {...getFieldProps("email")} type="text" id="email" />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <input type="submit" value="Save" />
      </form>
    </div>
  );
}
