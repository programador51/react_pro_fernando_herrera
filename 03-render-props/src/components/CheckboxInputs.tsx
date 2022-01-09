import React from "react";
import { ErrorMessage, useField } from "formik";

interface PropsCheckboxInput {
  label: string;
  name: string;
  [x: string]: any;
}

export default function CheckboxInput({ label, ...props }: PropsCheckboxInput) {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label htmlFor={props.id || props.name}>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" />
      {/* {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )} */}
    </>
  );
}
