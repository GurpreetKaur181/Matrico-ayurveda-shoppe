import styles from "./footer.module.css";

function footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          {/* Newsletter Signup Section */}
          <div className={styles.newsletter}>
            <h3>Join-us for our Metrico Ayurveda Shoppe</h3>
            <p>
              Experience the holistic healing of nature at Metrico Ayurveda
              Shoppe—your destination for premium Ayurvedic products.!
            </p>
            <input type="email" placeholder="Email address" />
            <button className={styles.subscribeBtn}>Subscribe</button>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.helpTopics}>
              <h4>Help Topics</h4>
              <ul>
                <li>
                  <a href="#refunds">AyurStore</a>
                </li>
                <li>
                  <a href="#track-order">Daily_Tips</a>
                </li>
                <li>
                  <a href="#faqs">FAQs</a>
                </li>
                <li>
                  <a href="#about-us">About Us</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className={styles.popularCategories}>
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#About Us">About Us</a>
                </li>
                <li>
                  <a href="#AyurStore">AyurStore</a>
                </li>
                <li>
                  <a href="#Daily_Tips">Daily_Tips</a>
                </li>
                <li>
                  <a href="#FAQs">FAQs</a>
                </li>
                <li>
                  <a href="#Contact Us">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className={styles.importantPages}>
              <h4>Important Pages</h4>
              <ul>
                <li>
                  <a href="#order-tracking">Order Tracking</a>
                </li>
                <li>
                  <a href="#terms">Terms and Conditions</a>
                </li>
                <li>
                  <a href="#privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="#shipping">Shipping Policy</a>
                </li>
              </ul>
            </div>

            <div className={styles.ayurvedicMedicine}>
              <h4>Ayurvedic Medicine Related</h4>
              <ul>
                <li>
                  <a href="#immunity-booster">Ayurvedic Immunity Booster</a>
                </li>
                <li>
                  <a href="#hangover-medicine">Diabetes Management</a>
                </li>
                <li>
                  <a href="#medicine-for-diabetes">Digestion Support</a>
                </li>
                <li>
                  <a href="#medicine-for-digestion">Hangover Medicine</a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>
              &copy; 2024 AyurStore Metrico Ayurveda Shoppe. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default footer;
