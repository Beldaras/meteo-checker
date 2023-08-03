import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function Home() {
  const [city, setCity] = useState('');
  const [cityCoord, setCityCoord] = useState('');
  
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

  //`https://api.openweathermap.org/data/2.5/weather?lat=${cityCoord.lat}&lon=${cityCoord.lon}&appid=${import.meta.env.VITE_METEO_KEY}`

  useEffect(() => {
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${import.meta.env.VITE_METEO_KEY}`)
         .then((response) => setCityCoord(response.data[0]));   
  }, [city]);
  console.log(cityCoord);
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
    </>
  )
}

export default Home;