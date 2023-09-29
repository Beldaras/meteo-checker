import styles from "../styles/CityCard.module.css";
import FavIcon from "./FavIcon";

function CityCard({ cityCoord, weather, temp, sunRise, sunSet }) {
  const localizedSunRise = new Date(sunRise * 1000).toLocaleTimeString(
    "fr-FR",
    { hour: "2-digit", minute: "2-digit" }
  );
  const localizedSunSet = new Date(sunSet * 1000).toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      {cityCoord && (
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <p>Ville: {cityCoord.name}</p>
            <FavIcon cityCoord={cityCoord}/>
          </div>
          <p>
            <span className={styles.coord}>Lat : {cityCoord.lat}</span>
            <span className={styles.coord}>Lon : {cityCoord.lon}</span>
          </p>
          <div className={styles.description}>
            <img
              className={styles.weather}
              src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
              alt="image de la météo actuelle"
            />
            <p>{weather.description}</p>
          </div>
          <p>Température : {temp.temp}°C</p>
          <p>Ressentie : {temp.feels_like}°C</p>
          <p>
            <span className={styles.coord}>Min : {temp.temp_min}°C</span>{" "}
            <span className={styles.coord}>Max : {temp.temp_max}°C</span>
          </p>
          <p>Levé du soleil : {localizedSunRise}</p>
          <p>Couché du soleil : {localizedSunSet}</p>
        </div>
      )}
    </>
  );
}

export default CityCard;
