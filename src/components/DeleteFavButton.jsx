import junk from "../assets/icons/supprimer.png";
import styles from "../styles/DeleteIcon.module.css";
// import meteoAPI from "../services/meteoAPI.js";

function DeleteIcon({favid, handleRemove}) {
  

  return (
    <button className={styles.delbutton} onClick={() => handleRemove(favid)}>
      <img
        className={styles.favicon}
        src={junk}
        alt="delete icon"
        title="delete from favorites"
      />
    </button>
  );
}

export default DeleteIcon;
