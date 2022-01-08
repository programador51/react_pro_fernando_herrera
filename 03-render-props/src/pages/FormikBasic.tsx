import React from "react";
import "styles/styles.css";

export default function FormikBasic() {
  return (
    <div>
      <h1>Formik tutorial basic</h1>
      <form noValidate>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <span>Required</span>

        <label htmlFor="lastname">Lastname</label>
        <input type="text" name="lastname" id="lastname" />
        <span>Required</span>

        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
        <span>Required</span>
        <span>Invalid email</span>

        <input type="submit" value="Save" />
      </form>
    </div>
  );
}
