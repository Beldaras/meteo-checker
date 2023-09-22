import { useState } from "react";
import etoile from "../assets/icons/favori.png";
import styles from "../styles/FavIcon.module.css";
import { useAuthContext } from "../contexts/authContext";

function FavIcon(cityCoord) {

  const [city, setCity] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const { user } = useAuthContext();
  

  const handleClick = () => {
    console.log(user);
    setCity(cityCoord.cityCoord.name);
    setLat(cityCoord.cityCoord.lat);
    setLon(cityCoord.cityCoord.lon);
    //envoi au back city, lat, lon recupéré de cityCoord.cityCoord
  }

  console.log(city, lat, lon);

  return (
    <button className={styles.button} onClick={handleClick}>
      <img
        className={styles.favicon}
        src={etoile}
        alt="favorite icon"
        title="Add to favorite"
      />
    </button>
  );
}

export default FavIcon;
