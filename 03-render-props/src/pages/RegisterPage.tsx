import useForm from "hooks/useForm";
import React, { FormEvent } from "react";
import "styles/styles.css";

export default function RegisterPage() {
  const {
    formData,
    onChange,
    email,
    password2,
    password1,
    name,
    resetForm,
    isValidEmail,
  } = useForm({
    name: "",
    email: "",
    password2: "",
    password1: "",
  });

  //   const { email, name, password1, password2 } = formData;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register page</h1>
      <form noValidate onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          className={`${name.trim().length <= 0 && "has-error"}`}
          onChange={(e) => onChange(e)}
        />
        {name.trim().length <= 0 && <span>Campo obligatorio</span>}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          className={`${!isValidEmail(email) && "has-error"}`}
          onChange={onChange}
        />
        {!isValidEmail(email) && <span>Email incorrecto</span>}
        <input
          type="password1"
          placeholder="Password"
          name="password1"
          value={password1}
          onChange={onChange}
        />
        {password1.trim().length <= 0 && <span>Campo obligatorio</span>}
        <input
          type="password2"
          placeholder="Repeat password"
          name="password2"
          value={password2}
          onChange={onChange}
        />
        {password2.trim().length <= 0 && <span>Campo obligatorio</span>}
        <input type="submit" value="create" />
        <button onClick={resetForm}>Reset</button>
      </form>
    </div>
  );
}
