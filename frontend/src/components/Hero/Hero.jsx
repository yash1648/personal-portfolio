import React from "react";

import styles from "./Hero.module.css";
import { getImageURL } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={`${styles.title} `}>Hi, <h1 className={`${styles.title} ${styles.rewritetext}`}>I'm Yash</h1></h1>
        <p className={`${styles.description}  `}>
        I'm an engineering student passionate about learning and exploring new technologies.
        </p>
        <a href="mailto:yashbagal623@gmail.com" className={styles.contactBtn} target="_blank">
          Contact Me
        </a>
      </div>
      <img
        src={getImageURL("hero/hero-img.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};