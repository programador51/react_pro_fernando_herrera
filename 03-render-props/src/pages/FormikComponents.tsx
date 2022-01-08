import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "styles/styles.css";
import * as yup from "yup";

export interface RegisterI {
  name: string;
  lastname: string;
  email: string;
}

export default function FormikComponents() {
  return (
    <div>
      <h1>Formik components</h1>

      <Formik
        initialValues={{
          name: "",
          lastname: "",
          email: "",
        }}
        validationSchema={yup.object({
          name: yup.string().max(15, "Max 15 characters").required("Required"),
          lastname: yup
            .string()
            .max(15, "Max 15 characters")
            .required("Required"),
          email: yup.string().email("Invalid email").required("Required"),
        })}
        onSubmit={(values) => console.log(values)}
      >
        {(formik) => (
          <Form noValidate>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="span" />

            <label htmlFor="lastname">Lastname</label>
            <Field name="lastname" type="text" />
            <ErrorMessage name="lastname" component="span" />

            <label htmlFor="email">Email</label>
            <Field name="email" type="text" />
            <ErrorMessage name="email" component="span" />

            <input type="submit" value="Save" />
          </Form>
        )}
      </Formik>
    </div>
  );
}
