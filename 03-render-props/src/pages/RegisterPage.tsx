import React from "react";
import "styles/styles.css";

export default function RegisterPage() {
  return (
    <div>
      <h1>Register page</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password1" placeholder="Password" />
        <input type="password2" placeholder="Repeat password" />
        <input type="submit" value="create" />
      </form>
    </div>
  );
}
