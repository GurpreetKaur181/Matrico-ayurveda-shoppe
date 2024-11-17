import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import image from "../../../images/Logo.png";

function Nav() {
  return (
    <nav className={styles.navbar}>
      {/* Navbar logo */}
      {/* <div className={styles.logoContainer}>
        <img src={image} alt="Navbar Logo" className={styles.logo} />
      </div> */}

      <div className={styles.logo}>Metrico Ayurveda Shoppe</div>

      {/* Navbar Links */}
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>
            HOME
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/about" className={styles.navLink}>
            ABOUT
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/ayur_store" className={styles.navLink}>
            AYUR STORE
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/daily_tips" className={styles.navLink}>
            DAILY TIPS
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/contact" className={styles.navLink}>
            CONTACT US
          </Link>
        </li>
      </ul>

      {/* Login and Register Links */}
      <div className={styles.authContainer}>
        <Link to="/login" className={styles.login}>
          LOGIN
        </Link>
        <Link to="/register" className={styles.register}>
          REGISTER
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
