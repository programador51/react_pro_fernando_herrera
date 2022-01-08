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
          terms: false,
          jobType: 2,
        }}
        validationSchema={yup.object({
          name: yup.string().max(15, "Max 15 characters").required("Required"),
          lastname: yup
            .string()
            .max(15, "Max 15 characters")
            .required("Required"),
          email: yup.string().email("Invalid email").required("Required"),
          terms: yup
            .boolean()
            .oneOf([true], "Must accept terms and conditions"),
          jobType: yup.number().transform((castedVal, inputVal) => +castedVal),
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

            <label>
              <Field name="terms" type="checkbox" /> Terms and conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <label>Job type</label>
            <Field name="jobType" type="number" as="select">
              <option value={0}>Pick something</option>
              <option value={1}>Dev Ops</option>
              <option value={2}>Backend</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <input type="submit" value="Save" />
          </Form>
        )}
      </Formik>
    </div>
  );
}
