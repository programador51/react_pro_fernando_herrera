import React from "react";
import { Formik, Form } from "formik";
import "styles/styles.css";
import * as yup from "yup";

import { TextInput, SelectInput, CheckboxInput } from "components";

export interface RegisterI {
  name: string;
  lastname: string;
  email: string;
}

export default function FormikAbstract() {
  return (
    <div>
      <h1>FormikAbstract</h1>

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
            <TextInput
              label="Name"
              name="name"
              placeholder="Type your first name"
            />

            <TextInput
              label="Last name"
              name="lastname"
              placeholder="Type your last name"
            />

            <TextInput
              label="Email"
              name="email"
              type="email"
              placeholder="Type your email"
            />

            <CheckboxInput label="Terms and conditions" name="terms" />

            <SelectInput
              label="Job Type"
              name="jobType"
              type="number"
              as="select"
            >
              <option value={0}>Pick something</option>
              <option value={1}>Dev Ops</option>
              <option value={2}>Backend</option>
            </SelectInput>

            <input type="submit" value="Save" />
          </Form>
        )}
      </Formik>
    </div>
  );
}
