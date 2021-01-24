import React from "react";
import styles from './index.module.css';


const Home = () => {
  return (
      <div className={styles.bodyGroup}>
        <div className={styles.headerGroup}>
          <h3 className={styles.titleText}>
            I AM BANDMAN.
          </h3>
        </div>
        <div className={styles.subheaderGroup}>
          <div className={styles.subheaderText}>
            coming soon
          </div>
          <div className={styles.captionItem}>MMXXTAPE dropping winter 2021</div>
        </div>
        <div className={styles.subheaderGroup}>
          <div className={styles.subheaderText}>
            explore more
          </div>
          <span className={styles.socialItem}>
            <a href="https://www.youtube.com/channel/UC_FwqJXxfTG0Ksnmn3WtLmw">
              youtube
            </a>
          </span>
          <span className={styles.socialItem}>
            <a href="https://instagram.com/bandman.music">
              instagram
            </a>
          </span>
          <span className={styles.socialItem}>
            <a href="lol.html">
              phone
            </a>
          </span>
        </div>
      </div>
  );
}

export default Home;
