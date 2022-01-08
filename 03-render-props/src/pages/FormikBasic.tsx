import React from "react";
import { useFormik, FormikErrors } from "formik";
import "styles/styles.css";
import { error } from "console";

export interface RegisterI {
  name: string;
  lastname: string;
  email: string;
}

export default function FormikBasic() {
  const validate = ({ email, lastname, name }: RegisterI) => {
    const errors: FormikErrors<RegisterI> = {};

    if (!name) {
      errors.name = "Required";
    } else if (name.length > 15) {
      errors.name = "15 or less characters allowed";
    }

    if (!lastname) {
      errors.lastname = "Required";
    } else if (name.length > 20) {
      errors.lastname = "20 or less characters allowed";
    }

    if (!email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }

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
      validate,
    });

  return (
    <div>
      <h1>Formik tutorial basic</h1>
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
