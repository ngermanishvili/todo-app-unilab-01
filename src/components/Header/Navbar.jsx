import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import profile from "../../assets/profile.png";
import DropdownMenu from "./DropDown";

const Navbar = () => {
  const [user, setUser] = useState({});
  const [dropDown, setDropDown] = useState(false);

  // Here I check if the user is authenticated, if yes, redirect to /todolist else, show the login page.
  useEffect(() => {
    const storedUser = localStorage.getItem("displayUser");
    setUser(storedUser ? JSON.parse(storedUser) : {});
  }, []);

  const handleProfileCheck = () => {
    setDropDown(!dropDown);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>TO DO</div>
      <div className={styles.rightContainer}>
        <div className={styles.name}>{user.name}</div>
        <div className={styles.circle} onClick={handleProfileCheck}>
          {user.photo ? (
            <img src={user.photo} alt="user" />
          ) : (
            <img src={profile} alt="user" />
          )}
        </div>
        {dropDown && <DropdownMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
