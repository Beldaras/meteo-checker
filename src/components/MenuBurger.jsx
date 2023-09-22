import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import iconeBurger from "../assets/icons/menu.svg";
import styles from "../styles/MenuBurger.module.css";
import meteoAPI from "../services/meteoAPI.js";
import { useAuthContext } from "../contexts/authContext.jsx";

function MenuBurger() {
  const [isOpen, setOpen] = useState(false);

  const { setUser } = useAuthContext();

  const navigate = useNavigate();

  const handleDisconnection = () => {
    meteoAPI
      .get("/api/logout")
      .then((res) => {
        console.log(res);
        localStorage.clear();
        setUser(null);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button
        className={styles.iconBurger}
        onClick={() => setOpen(!isOpen)}
        type="button"
      >
        <img
          src={iconeBurger}
          alt="iconeBurger"
          className={styles.iconeBurger}
        />
      </button>
      {isOpen && (
        <div className={styles.open}>
          <ul className={styles.liste}>
            <li className={styles.item}>
              <button onClick={handleDisconnection}>Disconnect</button>
            </li>
            <li className={styles.item}>
              {" "}
              <Link to="/">Accueil</Link>{" "}
            </li>
            <li className={styles.item}>
              {" "}
              <Link to="/login">Login</Link>{" "}
            </li>
            <li className={styles.item}>
              {" "}
              <Link to="/signup">Sign Up</Link>{" "}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MenuBurger;
