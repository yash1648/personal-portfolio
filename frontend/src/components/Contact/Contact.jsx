
import styles from "./Contact.module.css";
import { getImageURL } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageURL("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:myemail@email.com" target="_blank">yashbagal623@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageURL("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/yash-bagal-164800-u/" target="_blank">linkedin.com/yash-bagal-164800</a>
        </li>
        <li className={styles.link}>
          <img src={getImageURL("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/yash1648" target="_blank">github.com/yash1648</a>
        </li>
      </ul>
    </footer>
  );
};