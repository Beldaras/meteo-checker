import { useState } from "react";
import { useNavigate } from "react-router-dom";
import meteoAPI from "../services/meteoAPI.js";
import { useAuthContext } from "../contexts/authContext.jsx";
import styles from "../styles/Forms.module.css";

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
    <div className={styles.welcome}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.item}>
          <label htmlFor="email" className={styles.label}>Enter you email : </label>
          <input
            className={styles.input}
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="password" className={styles.label}>Enter you password : </label>
          <input
            className={styles.input}
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={styles.button} type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
