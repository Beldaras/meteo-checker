import { useState } from "react";
import { useNavigate } from "react-router-dom";
import meteoAPI from "../services/meteoAPI.js";
import { useAuthContext } from "../contexts/authContext.jsx";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = useAuthContext();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email && password) {
      meteoAPI
        .post("/api/login", { email, password })
        .then((res) => {
          console.log(res);
          setUser(res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("Veuillez remplir tous les champs");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
