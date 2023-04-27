import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>TO DO</div>
      <div className={styles.rightContainer}>
        <div className={styles.name}>Your name</div>
        <div className={styles.circle}></div>
      </div>
    </nav>
  );
};

export default Navbar;
