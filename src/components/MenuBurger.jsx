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
          <nav className="text-base font-jost">
            <a
              className="block px-4 py-2 text-gray-900 hover:text-red focus:text-red"
              href="/"
            >
              Accueil
            </a>
            <a
              className="block px-4 py-2 text-gray-900 hover:text-red focus:text-red "
              href="/Manga"
            >
              Manga
            </a>
            <a
              className="block px-4 py-2 text-gray-900 hover:text-red focus:text-red"
              href="/register"
            >
              Sign in
            </a>
          </nav>
        </div>
      )}
      
    </div>
  );
}

export default MenuBurger;
