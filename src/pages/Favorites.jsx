import { useState, useEffect } from "react";
import { useAuthContext } from "../contexts/authContext";
import meteoAPI from "../services/meteoAPI.js";

function Favorites() {
  const { user } = useAuthContext();

  const [favorites, setFavorites] = useState([]);

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

  console.log(favorites);

  return (
    <div>
      {favorites &&
        favorites.map((fav) => {
          return (
            <div key={fav.favid}>
              <h2>{fav.city}</h2>
              <p>lat : {fav.lat}</p>
              <p>lon : {fav.lon}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Favorites;
