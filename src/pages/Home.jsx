
import { useState } from "react";

import styles from "../styles/Home.module.css";
import CityCard from "../components/CityCard";

function Home() {
  const [city, setCity] = useState("");
  

  const handleSearch = (event) => {
    event.preventDefault();
    if (event.target.city.value === "" || event.target.city.value.length < 3) {
      alert("Veuillez entrer une ville valide");
      return;
    } else if (event.target.city.value.length > 20) {
      alert("Veuillez entrer une ville de moins de 20 caractères");
      return;
    } else {
      setCity(event.target.city.value);
    }
  };

  
  return (
    <>
      <div className={styles.welcome}>
        <h1>Meteo Checker</h1>
        <form onSubmit={handleSearch}>
          <label htmlFor="city">Entrez une ville : </label>
          <input type="text" id="city" name="city" />
        </form>

       <CityCard city={city} />
      </div>
    </>
  );
}
  export default Home;
