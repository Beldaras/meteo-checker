import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";

function Home() {
  const [city, setCity] = useState("");
  const [cityCoord, setCityCoord] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const [sunRise, setSunRise] = useState("");
  const [sunSet, setSunSet] = useState("");

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

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${
          import.meta.env.VITE_METEO_KEY
        }`
      )
      .then((response) => {
        setCityCoord(response.data[0]);

        const { lat, lon } = response.data[0];

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
  }, [city]);

  useEffect(() => {
    const city = JSON.parse(localStorage.getItem("city"));
    if (city) {
      setCity(city);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("city", JSON.stringify(city));
  }, [city]);

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
      <div className={styles.welcome}>
        <h1>Meteo Checker</h1>
        <form onSubmit={handleSearch}>
          <label htmlFor="city">Entrez une ville : </label>
          <input type="text" id="city" name="city" />
        </form>

        {cityCoord && (
          <div>
            <p>Ville: {cityCoord.name}</p>
            <p>
              <span className={styles.coord}>Lat : {cityCoord.lat}</span>
              <span>Lon : {cityCoord.lon}</span>
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
              alt="image de la météo actuelle"
            />
            <p>{weather.description}</p>
            <p>
              Température : {temp.temp}°C Ressentie : {temp.feels_like}°C
            </p>
            <p>
              Min : {temp.temp_min}°C Max : {temp.temp_max}°C
            </p>
            <p>Levé du soleil : {localizedSunRise}</p>
            <p>Couché du soleil : {localizedSunSet}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
