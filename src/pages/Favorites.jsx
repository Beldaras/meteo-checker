import { useState, useEffect } from "react";
import { useAuthContext } from "../contexts/authContext";
import meteoAPI from "../services/meteoAPI.js";
import axios from "axios";
import styles from "../styles/Favorites.module.css";
import DeleteIcon from "../components/DeleteFavButton.jsx";


function Favorites() {
  const { user } = useAuthContext();

  const [favorites, setFavorites] = useState([]);
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const [sunRise, setSunRise] = useState("");
  const [sunSet, setSunSet] = useState("");

  const localizedSunRise = new Date(sunRise * 1000).toLocaleTimeString(
    "fr-FR",
    { hour: "2-digit", minute: "2-digit" }
  );
  const localizedSunSet = new Date(sunSet * 1000).toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  useEffect(() => {
    meteoAPI
      .get(`/api/fav/${user.id}`)
      .then((res) => {
        setFavorites(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.id]);

  useEffect(() => {
    favorites.map((fav) => {
      const { lat, lon } = fav;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
            import.meta.env.VITE_METEO_KEY
          }&units=metric&lang=fr`
        )
        .then((data) => {
          setWeather(data.data.weather[0]);
          setTemp(data.data.main);
          setSunRise(data.data.sys.sunrise);
          setSunSet(data.data.sys.sunset);
        });
    });
  }, [favorites]);

  return (
    <div className={styles.welcome}>
      {favorites &&
        favorites.map((fav) => {
          return (
            <div key={fav.favid} className={styles.card}>
              <div className={styles.cardHeader}>
                <p>Ville: {fav.city}</p>
                <DeleteIcon favid={fav.favid} />
              </div>
              <p>
                <span className={styles.coord}>Lat : {fav.lat}</span>
                <span className={styles.coord}>Lon : {fav.lon}</span>
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
          );
        })}
    </div>
  );
}

export default Favorites;
