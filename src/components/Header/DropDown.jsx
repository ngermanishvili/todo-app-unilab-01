import React from "react";
import styles from "./dropdown.module.css";

// with using handleLogout function, I'm removing the user's name and photo from localStorage and redirecting the user to the Login page.
const DropdownMenu = () => {
  const handleLogout = () => {
    localStorage.removeItem("displayUser");
    localStorage.removeItem("authenticated");
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
