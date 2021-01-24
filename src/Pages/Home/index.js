import React from "react";
import classnames from "classnames";
import styles from './index.module.css';
import Emoji from "../../Parts/Emoji";


const Home = () => {
    return (
        <body className={styles.bodyGroup}>
        <div className={styles.headerGroup}>
            <h3 className={styles.titleText}>
                I AM BANDMAN.
            </h3>
        </div>
        <div className={styles.subheaderGroup}>
            <div className={styles.subheaderText}>beats</div>
            <div className={classnames(styles.listFlex, styles.listFlexCol)}>
                <Emoji symbol="👉" label="pointing-finger"/>
                <div className={styles.captionItem}>MMXXTAPE out now</div>
            </div>
            <div className={classnames(styles.listFlex, styles.listFlexCol)}>
                <Emoji symbol="👉" label="pointing-finger"/>
                <div className={styles.captionItem}>chromaland dropping summer 2021</div>
            </div>
        </div>
        <div className={styles.subheaderGroup}>
            <div className={styles.subheaderText}>lyrics</div>
            <div className={classnames(styles.listFlex, styles.listFlexCol)}>
                <Emoji symbol="🎙" label="microphone"/>
                <div className={styles.captionItem}>coming soon</div>
            </div>
        </div>
        <div className={styles.subheaderGroup}>
            <div className={styles.subheaderText}> explore more </div>
            <div className={styles.listFlex}>
            <div className={styles.hoverBox}>
                <Emoji symbol="📺" label="tv"/>
                <span className={styles.captionItem}>
                    <a href="https://www.youtube.com/channel/UC_FwqJXxfTG0Ksnmn3WtLmw" target="_blank" rel="noreferrer">
                      youtube
                    </a>
                </span>
            </div>
            <div className={styles.hoverBox}>
                <Emoji symbol="💅🏼" label="nails"/>
                <span className={styles.captionItem}>
                    <a href="https://instagram.com/bandman.music" target="_blank" rel="noreferrer">
                      instagram
                    </a>
                </span>
            </div>
            <div className={styles.hoverBox}>
                <Emoji symbol="☎️" label="phone"/>
                <span className={styles.captionItem}>
                    <a href="lol.html">
                      phone
                    </a>
                </span>
            </div>
            </div>
        </div>
        </body>
    );
}

export default Home;
