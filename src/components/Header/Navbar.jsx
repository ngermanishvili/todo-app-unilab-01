import styles from "./Navbar.module.css";

const Navbar = () => {
  // TODO Here i used the localStorage to save the name and image of the user.
  const name = localStorage.getItem("name");
  const image = localStorage.getItem("image");

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>TO DO</div>
      <div className={styles.rightContainer}>
        <div className={styles.name}>{name}</div>
        <div className={styles.circle}>
          {image && <img src={image} alt="uploadedImg" />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
