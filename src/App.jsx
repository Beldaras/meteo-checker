import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [city, setCity] = useState('');
  const [cityCoord, setCityCoord] = useState('');
  const [cityName, setCityName] = useState('');

  const handleCityChange = (event) => {
    setCity(event.target.value);
  }

  useEffect(() => {
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${import.meta.env.VITE_METEO_KEY}`)
         .then((response) => response.data)
         .then((data) =>  { 
              setCityCoord("lon : " + data[0].lon.toString() + " / lat : " + data[0].lat.toString());
              setCityName(data[0].name)
            });    
  }, [city]);
  return (
    <>
      <h1>Meteo Checker</h1>
      <input type="text" value={city} onChange={handleCityChange} />
      <p>Ville: {cityName}</p>
      <p>Coordonnées = {cityCoord}</p>
    </>
  )
}

export default App
