
import styles from "./ProjectCard.module.css";
import { getImageURL } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source,isDisabled },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageURL(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a  href={isDisabled ? undefined : demo}
          className={`${styles.link} ${isDisabled ? styles.disabled : ''}`}
          onClick={(e) => isDisabled && e.preventDefault()} >
          Demo
        </a>
        <a  href={isDisabled ? undefined : source}
          className={`${styles.link} ${isDisabled ? styles.disabled : ''}`}
          onClick={(e) => isDisabled && e.preventDefault()}>
          Source
        </a>
      </div>
    </div>
  );
};