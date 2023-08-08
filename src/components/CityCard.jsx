import styles from "../styles/CityCard.module.css";

function CityCard(cityCoord, weather, temp, localizedSunRise, localizedSunSet) {
  return (
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
  )
}

export default CityCard;