import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import image from "../../assets/images/Logo.png";

function Nav() {
  return (
    <nav className={styles.navbar}>
      {/* Navbar logo */}
      <div className={styles.logoContainer}>
        <img src={image} alt="Navbar Logo" className={styles.logo} />
      </div>

      {/* Navbar Links */}
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>HOME</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/about" className={styles.navLink}>ABOUT</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/shop" className={styles.navLink}>SHOP</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/features" className={styles.navLink}>MEDICINE</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/contact" className={styles.navLink}>CONTACT</Link>
        </li>
      </ul>

      {/* Login and Register Links */}
      <div className={styles.authContainer}>
        <Link to="/login" className={styles.link}>LOGIN</Link>
        <Link to="/register" className={styles.link}>REGISTER</Link>
      </div>
    </nav>
  );
}

export default Nav;
