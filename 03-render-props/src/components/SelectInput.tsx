import React from "react";
import { useField } from "formik";

interface PropsSelectInput {
  label: string;
  name: string;
  [x: string]: any;
}

export default function SelectInput({ label, ...props }: PropsSelectInput) {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )}
    </>
  );
}
