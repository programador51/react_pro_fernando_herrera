import useForm from "hooks/useForm";
import React, { FormEvent } from "react";
import "styles/styles.css";

export default function RegisterPage() {
  const { formData, onChange, email, password2, password1, name } = useForm({
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
          onChange={(e) => onChange(e)}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password1"
          placeholder="Password"
          name="password1"
          value={password1}
          onChange={onChange}
        />
        <input
          type="password2"
          placeholder="Repeat password"
          name="password2"
          value={password2}
          onChange={onChange}
        />
        <input type="submit" value="create" />
      </form>
    </div>
  );
}
