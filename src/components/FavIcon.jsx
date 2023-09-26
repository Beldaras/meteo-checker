import etoile from "../assets/icons/favori.png";
import styles from "../styles/FavIcon.module.css";
import { useAuthContext } from "../contexts/authContext";
import meteoAPI from "../services/meteoAPI.js";


function FavIcon(cityCoord) {

  const { user } = useAuthContext();
  
  const handleClick = () => {
   
    const city = cityCoord.cityCoord.name;
    const lat = cityCoord.cityCoord.lat;
    const lon = cityCoord.cityCoord.lon;
    const user_id = user.id;
    console.log(user_id);
  
    if(city, lat, lon, user_id){
      meteoAPI
        .post("/api/fav", { city, lat, lon, user_id })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
  }
  }


  return (
    <button className={styles.button} onClick={handleClick}>
      <img
        className={styles.favicon}
        src={etoile}
        alt="favorite icon"
        title="Add to favorite"
      />
    </button>
  );
}

export default FavIcon;
