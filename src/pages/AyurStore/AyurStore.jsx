import React from "react";
import styles from "./AyurStore.module.css";

const images = [
  {
    name: "Herbal & Ayurveda Diabic Care Juice 1000 ml",
    src: "Herbal & Ayurveda Diabic Care Juice 1000 ml.jpg",
  },
  {
    name: "Pankajakasthuri Breathe Easy Granules 400 gm",
    src: "Pankajakasthuri Breathe Easy Granules 400 gm.png",
  },
  {
    name: "Pankajakasthuri Breathe Easy Syrup 200 ml",
    src: "Pankajakasthuri Breathe Easy Syrup 200 ml.jpg",
  },
  {
    name: "Lama Ayush kwath Tablet 60's",
    src: "Lama Ayush kwath Tablet 60's.jpg",
  },
  {
    name: "Lama Draksharist Tonic 450 ml",
    src: "Lama Draksharist Tonic 450 ml.jpg",
  },
  {
    name: "Kairali Chyawanaprasam Lehya 500 gm",
    src: "Kairali Chyawanaprasam Lehya 500 gm.jpg",
  },
  {
    name: "Dabur Honitus Herbal Cough Remedy Sugar Free Syrup 100 ml",
    src: "Dabur Honitus Herbal Cough Remedy Sugar Free Syrup 100 ml.jpg",
  },
  { name: "Lama Cough Syrup 100 ml", src: "Lama Cough Syrup 100 ml.jpg" },
];

function AyurStore() {
  return (
    <>
      <div className={styles.container}>
      <div className={styles.textContent}>
        <h1>Ayurvedic Medicine Collection</h1>
      </div>

      <div className={styles.Boxes}>
        {/* Render 8 boxes with images, names, and buttons */}
        {images.map((image, index) => (
          <div key={index} className={styles.box}>
            <img
              src={`/images/${image.src}`}
              alt={image.name}
              className={styles.boxImage}
            />
            <div className={styles.imageDetails}>
              <p>{image.name}</p>
              <div className={styles.rowbutton}>
                <button className={styles.detailsbutton}>More Details</button>
                <button className={styles.buybutton}>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          {/* Newsletter Signup Section */}
          <div className={styles.newsletter}>
            <h3>Join-us for our Metrico Ayurveda Shoppe</h3>
            <p>
            Experience the holistic healing of nature at Metrico Ayurveda Shoppe—your destination for premium Ayurvedic products.!
            </p>
            <input type="email" placeholder="Email address" />
            <button className={styles.subscribeBtn}>Subscribe</button>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.helpTopics}>
              <h4>Help Topics</h4>
              <ul>
                <li><a href="#refunds">AyurStore</a></li>
                <li><a href="#track-order">Daily_Tips</a></li>
                <li><a href="#faqs">FAQs</a></li>
                <li><a href="#about-us">About Us</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>

            <div className={styles.popularCategories}>
              <h4>Quick Links</h4>
              <ul>
              <li><a href="#About Us">About Us</a></li>
                <li><a href="#AyurStore">AyurStore</a></li>
                <li><a href="#Daily_Tips">Daily_Tips</a></li>
                <li><a href="#FAQs">FAQs</a></li>
                <li><a href="#Contact Us">Contact Us</a></li>
              </ul>
            </div>

            <div className={styles.importantPages}>
              <h4>Important Pages</h4>
              <ul>
                <li><a href="#order-tracking">Order Tracking</a></li>
                <li><a href="#terms">Terms and Conditions</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#shipping">Shipping Policy</a></li>
              </ul>
            </div>

            <div className={styles.ayurvedicMedicine}>
              <h4>Ayurvedic Medicine Related</h4>
              <ul>
                <li><a href="#immunity-booster">Ayurvedic Immunity Booster</a></li>
                <li><a href="#hangover-medicine">Diabetes Management</a></li>
                <li><a href="#medicine-for-diabetes">Digestion Support</a></li>
                <li><a href="#medicine-for-digestion">Hangover Medicine</a></li>
              </ul>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>&copy; 2024 AyurStore Metrico Ayurveda Shoppe. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default AyurStore;
