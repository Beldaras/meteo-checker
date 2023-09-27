import junk from "../assets/icons/supprimer.png";
import styles from "../styles/DeleteIcon.module.css";
// import meteoAPI from "../services/meteoAPI.js";

function DeleteIcon(favid) {

  const handleClick = () => {
   
    const id = favid;

    console.log(id);

      /*meteoAPI
        .post("/api/fav", { id })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });*/
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
