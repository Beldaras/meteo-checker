import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  return (
    <form>
      <div>
        <label htmlFor="email">Enter you email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Enter you password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="firstname">Enter you firstname</label>
        <input
          type="firstname"
          name="firstname"
          id="firstname"
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastname">Enter you lastname</label>
        <input
          type="lastname"
          name="lastname"
          id="lastname"
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default Login;
