import React from "react";
import styles from "./contactpage.module.css";

function Contactpage() {
  return (
    <section className={styles.contact}>
      <div className={styles.content}>Contact Us</div>

      <div className={styles.boxWrapper}>
        <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
            <div className={styles.contactBox}>
              <div className={styles.icon}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className={styles.text}>
                <h3>Address</h3>
                <p>
                  <a
                    href="https://goo.gl/maps/someMapLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    405544 Sugar camp Road, City, Country
                  </a>
                </p>
              </div>
            </div>

            <div className={styles.contactBox}>
              <div className={styles.icon}>
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className={styles.text}>
                <h3>Phone</h3>
                <p>000-000-0000</p>
              </div>
            </div>

            <div className={styles.contactBox}>
              <div className={styles.icon}>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className={styles.text}>
                <h3>Email</h3>
                <p>temproryEmail@dummy.domain</p>
              </div>
            </div>

            <ul className={styles.socialIcons}>
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Form Section */}
          <div className={styles.contactForm}>
            <form>
              <h2>Send Message</h2>
              <div className={styles.inputBox}>
                <input type="text" required />
                <span>Full Name</span>
              </div>

              <div className={styles.inputBox}>
                <input type="email" required />
                <span>Email</span>
              </div>

              <div className={styles.inputBox}>
                <textarea required></textarea>
                <span>Type Your Message...</span>
              </div>

              <div className={styles.inputBox}>
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contactpage;
