import React from "react";
import { motion } from "framer-motion";
import styles from "./modal.module.css";

export default function FundDetailsModal(props) {
  return (
    <motion.div
      className={styles.backdrop}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <motion.div
        className={styles.container}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
        initial={{ opacity: 0, y: 500 }}
      >
        <span className={styles.closeButtonContainer}>
          <button className="secondary button" onClick={props.onClose}>
            <i className="fas fa-fw fa-times" />
          </button>
        </span>
        <div>{props.children}</div>
      </motion.div>
    </motion.div>
  );
}
