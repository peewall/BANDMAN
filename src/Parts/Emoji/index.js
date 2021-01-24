import React from 'react';
import styles from "./index.module.css"
const Emoji = props => (
    <span
        className={styles.emoji}
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
);
export default Emoji;