import etoile from "../assets/icons/favori.png";
import styles from "../styles/FavIcon.module.css";

function FavIcon(cityCoord) {

  const handleClick = () => {
    console.log("coucou", cityCoord.cityCoord.name);
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
