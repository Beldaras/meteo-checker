import github from "../assets/icons/github-mark.svg";
import linkedin from "../assets/icons/linkedin.svg";
import mail from "../assets/icons/mail.svg";

function Footer() {
  return (
    <div className="flex justify-center gap-4 bg-white opacity-70 pl-1 pr-1 w-full">
      <p className="text-sm">Roblot Jean-Philippe © - 2023 - Favori icon by Us and Up</p>
      <a href="https://github.com/Beldaras" target="_blank" rel="noreferrer">
        <img src={github} alt="logo github" className="h-5 w-5" />
      </a>
      <a
        href="https://www.linkedin.com/in/jean-philippe-roblot/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="logo linkedin" className="h-5 w-5" />
      </a>
      <a href="mailto:jphilippe.roblot@gmail.com">
        <img src={mail} alt="logo email" className="h-5 w-5" />
      </a>
    </div>
  );
}

export default Footer;
