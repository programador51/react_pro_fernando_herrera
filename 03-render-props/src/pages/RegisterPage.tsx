import React, { ChangeEvent, useState } from "react";
import "styles/styles.css";

export default function RegisterPage() {
  const [registerData, setRegisterData] = useState({
    name: "jose",
    email: "programa51@gmail.com",
    password2: "123",
    password1: "123",
  });

  const { email, name, password1, password2 } = registerData;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <h1>Register page</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => onChange(e)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password1"
          placeholder="Password"
          value={password1}
          onChange={onChange}
        />
        <input
          type="password2"
          placeholder="Repeat password"
          value={password2}
          onChange={onChange}
        />
        <input type="submit" value="create" />
      </form>
    </div>
  );
}
