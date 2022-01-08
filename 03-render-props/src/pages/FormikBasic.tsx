import React from "react";
import { useFormik } from "formik";
import "styles/styles.css";

export default function FormikBasic() {
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      name: "Test",
      lastname: "",
      email: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <div>
      <h1>Formik tutorial basic</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          id="name"
          value={values.name}
        />
        <span>Required</span>

        <label htmlFor="lastname">Lastname</label>
        <input
          onChange={handleChange}
          value={values.lastname}
          type="text"
          name="lastname"
          id="lastname"
        />
        <span>Required</span>

        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          value={values.email}
          type="text"
          name="email"
          id="email"
        />
        <span>Required</span>
        <span>Invalid email</span>

        <input type="submit" value="Save" />
      </form>
    </div>
  );
}
