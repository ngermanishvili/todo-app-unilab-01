import React from "react";
import styles from "./dropdown.module.css";

const DropdownMenu = () => {
  const handleLogout = () => {
    localStorage.removeItem("displayUser");
    window.location.href = "/";
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownContent}>
        <span>Profile</span>
        <span onClick={handleLogout} href="#">
          Logout
        </span>
      </div>
    </div>
  );
};

export default DropdownMenu;
