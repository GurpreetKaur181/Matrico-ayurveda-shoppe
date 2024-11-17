import React from "react";
import styles from "./Daily_Tips.module.css";

function DailyTips() {
  return (
    <div className={styles.comingSoon}>
      <h1 className={styles.title}>Coming Soon</h1>
      <p className={styles.message}>
        We're working hard to bring you amazing daily tips.
      </p>
    </div>
  );
}

export default DailyTips;
