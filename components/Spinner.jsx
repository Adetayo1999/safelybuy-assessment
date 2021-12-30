import React from "react";
import styles from "../styles/Spinner.module.css";

const Spinner = () => {
  return (
    <div
      className={`h-5 w-5 border-2 border-green-500 ${styles.spinner}`}
    ></div>
  );
};

export default Spinner;
