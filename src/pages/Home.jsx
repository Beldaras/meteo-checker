
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";
import CityCard from "../components/CityCard";
import Footer from "../components/footer";

function Home() {
  const [city, setCity] = useState(localStorage.getItem('city') || "");
  // const [lastCity, setLastCity] = useState(city);
  const [cityCoord, setCityCoord] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const [sunRise, setSunRise] = useState("");
  const [sunSet, setSunSet] = useState("");

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${
          import.meta.env.VITE_METEO_KEY
        }`
      )
      .then((response) => {
        localStorage.setItem('city', response.data[0].name);
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
          <input type="text" id="city" name="city"  />
        </form>

       <CityCard cityCoord={cityCoord} 
                 weather={weather}
                 temp={temp}
                 sunRise={sunRise}
                 sunSet={sunSet} />
      </div>
      <Footer />
    </>
  );
}
  export default Home;
