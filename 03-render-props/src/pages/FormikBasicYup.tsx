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
  const validate = ({ email, lastname, name }: RegisterI) => {
    const errors: FormikErrors<RegisterI> = {};

    return errors;
  };

  const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        name: "Test",
        lastname: "",
        email: "",
      },
      onSubmit: (data: RegisterI) => {
        console.log(data);
      },
      validationSchema: yup.object({
        name: yup.string().max(15, "Max 15 characters").required("Required"),
        lastname: yup
          .string()
          .max(15, "Max 15 characters")
          .required("Required"),
        email: yup.string().email("Invalid email").required("Required"),
      }),
    });

  return (
    <div>
      <h1>Formik yup basic</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          type="text"
          onBlur={handleBlur}
          name="name"
          id="name"
          value={values.name}
        />
        {touched.name && errors.name && <span>{errors.name}</span>}

        <label htmlFor="lastname">Lastname</label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastname}
          type="text"
          name="lastname"
          id="lastname"
        />
        {touched.lastname && errors.lastname && <span>{errors.lastname}</span>}

        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          type="text"
          name="email"
          id="email"
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <input type="submit" value="Save" />
      </form>
    </div>
  );
}
