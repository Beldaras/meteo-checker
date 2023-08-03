import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function Home() {
  const [city, setCity] = useState('');
  const [cityCoord, setCityCoord] = useState('');
  const [weather, setWeather] = useState('');
  
  const handleSearch = (event) => {
    event.preventDefault();
    if (event.target.city.value === '' || event.target.city.value.length < 3) {
      alert('Veuillez entrer une ville valide');
      return;
    } else if (event.target.city.value.length > 20) {
      alert('Veuillez entrer une ville de moins de 20 caractères');
      return;
    } else {
      setCity(event.target.city.value);
    }
    
  } 


  useEffect(() => {
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${import.meta.env.VITE_METEO_KEY}`)
         .then((response) => {
            setCityCoord(response.data[0])
            
            const {lat, lon} = response.data[0];
            
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_METEO_KEY}`)
                 .then(data => {
                  console.log(data.data)
                  setWeather(data.data.weather[0])
                })
          });   
  }, [city]);
  console.log(cityCoord);
  console.log(weather.icon);
  return (
    <>
      <h1>Meteo Checker</h1>
      <form onSubmit={handleSearch}>
        <label htmlFor="city">Entrez une ville : </label>
        <input type="text" id="city" name="city"/>
      </form>
      <p>Ville: {cityCoord.name}</p>
      <p>Latitude : {cityCoord.lat}</p>
      <p>Longitude : {cityCoord.lon}</p>
      <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png` }alt="" />
    </>
  )
}

export default Home;