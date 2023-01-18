import React from "react";
import styles from './styles.css'

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutIntro}>
        <img src="/images/dp-pic.png" alt="dp-pic" className={styles.aboutIntroDp} />
      </div>
      <div className={styles.aboutText}>
        <div className={styles.aboutInnerText}>
          <h1>Hi, I'm Jason.</h1>
          <h2>a coder and a foodie.</h2>
        </div>
      </div>
      <div className={styles.aboutBg}>
        <img src="/images/cartoon-food.png" alt="cartoon-food-pic" className={styles.aboutPic}/>
      </div>
      <div className={styles.aboutEnd}></div>
    </div>
  );
}

export default About;
