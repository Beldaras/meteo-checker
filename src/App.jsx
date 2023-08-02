import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [city, setCity] = useState('Paris');
  useEffect(() => {
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=Paris&appid=${import.meta.env.VITE_METEO_KEY}`)
         .then((response) => response.data);
  }, []);
  return (
    <>
      <h1>Meteo Checker</h1>
      <p>City: {city}</p>

    </>
  )
}

export default App
