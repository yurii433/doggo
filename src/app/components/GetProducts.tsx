"use client";
import { getDogs } from "../firebaseConfig";
import styles from "./GetProducts.module.css";

export default function GetProducts() {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.buttonLarge} onClick={() => getDogs()}>
        EXPLORE MORE OUR PRODUCTS
      </button>
    </div>
  );
}
