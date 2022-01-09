import React from "react";
import { ErrorMessage, useField } from "formik";

interface PropsTextInput {
  label: string;
  name: string;
  id?: string;
  type?: "text" | "email" | "password";
  [x: string]: any;
}

export default function TextInput({ label, ...props }: PropsTextInput) {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />

      <ErrorMessage name={props.name} component="span" />
      {/* {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )} */}
    </>
  );
}
