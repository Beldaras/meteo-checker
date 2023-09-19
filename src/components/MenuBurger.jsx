import React, { useState } from "react";
import iconeBurger from "../assets/icons/menu.svg";
import styles from "../styles/MenuBurger.module.css";

function MenuBurger() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.close}>
      <button
        className="block w-10 rounded"
        onClick={() => setOpen(!isOpen)}
        type="button"
      >
        <img src={iconeBurger} alt="iconeBurger" className={styles.iconeBurger} />
      </button>
      {isOpen && (
        <div className="absolute top-12 left-20 transform -translate-x-1/2 z-10 bg-white opacity-80 rounded shadow-md py-2">
          <nav>
            <a
              href="/"
            >
              Accueil
            </a>
            <a
              href="/login"
            >
              Login
            </a>
            <a
              href="/signup"
            >
              Sign Up
            </a>
          </nav>
        </div>
      )}
      
    </div>
  );
}

export default MenuBurger;
