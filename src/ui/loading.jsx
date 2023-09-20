import React from "react";
import styles from "./loading.module.css";

export default function Loading(props) {
  return (
    <div className={styles.container}>
      <i className="fas fa-fw fa-spinner fa-spin" />
    </div>
  );
}
