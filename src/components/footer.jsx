import styles from "../styles/Footer.module.css";
import github from "../assets/icons/github-mark.svg";
import linkedin from "../assets/icons/linkedin.svg";
import mail from "../assets/icons/mail.svg";

function Footer() {
  return (
    <div className={styles.container}>
      <p>Roblot Jean-Philippe © - 2023 - Favori icon by Us and Up</p>
      <a href="https://github.com/Beldaras" target="_blank" rel="noreferrer">
        <img src={github} alt="logo github" className={styles.icon} />
      </a>
      <a
        href="https://www.linkedin.com/in/jean-philippe-roblot/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="logo linkedin" className={styles.icon} />
      </a>
      <a href="mailto:jphilippe.roblot@gmail.com">
        <img src={mail} alt="logo email" className={styles.icon} />
      </a>
    </div>
  );
}

export default Footer;
