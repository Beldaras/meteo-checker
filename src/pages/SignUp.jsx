import { useState } from "react";
import { useNavigate } from "react-router-dom";
import meteoAPI from "../services/meteoAPI.js";
import styles from "../styles/Forms.module.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email && password && firstname && lastname) {
      meteoAPI
        .post("/api/user/", { email, password, firstname, lastname })
        .then((res) => {
          console.log(res);
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
        <div className={styles.item}>
          <label htmlFor="firstname" className={styles.label}>Enter you firstname : </label>
          <input
            className={styles.input}
            type="firstname"
            name="firstname"
            id="firstname"
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="lastname" className={styles.label}>Enter you lastname : </label>
          <input
            className={styles.input}
            type="lastname"
            name="lastname"
            id="lastname"
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <button className={styles.button} type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignUp;
