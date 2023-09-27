import junk from "../assets/icons/supprimer.png";
import styles from "../styles/DeleteIcon.module.css";
import meteoAPI from "../services/meteoAPI.js";

function DeleteIcon(fav) {

  const handleClick = () => {
   
    const favid = fav.favid;

      meteoAPI
        .delete(`/api/fav/${favid}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

  return (
    <button className={styles.delbutton} onClick={handleClick}>
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
