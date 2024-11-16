import React from "react";
import styles from "./Homepage.module.css";


const images = [
  { name: "Herbal & Ayurveda Diabic Care Juice 1000 ml", src: "ayur.png" },
  { name: "Pankajakasthuri Breathe Easy Granules 400 gm", src: "ayur1.png" },
  { name: "Pankajakasthuri Breathe Easy Syrup 200 ml", src: "ayur2.png" },
  { name: "Lama Ayush kwath Tablet 60's", src: "ayur3.png" },
  { name: "Lama Draksharist Tonic 450 ml", src: "ayur4.png" },
  { name: "Kairali Chyawanaprasam Lehya 500 gm", src: "ayur5.png" },
  { name: "Dabur Honitus Herbal Cough Remedy Sugar Free Syrup 100 ml", src: "ayur6.png" },
  { name: "Lama Cough Syrup 100 ml", src: "ayur7.png" },
];

function Homepage() {
  return (
    <>
      <div className={styles.container}></div>
      <div className={styles.textContent}>
        <h1>Welcome to Our Ayurvedic Medicine Collection</h1>
        <p>
          Explore our range of natural and organic Ayurvedic medicines designed
          to promote wellness and balance.
        </p>
      </div>

      <div className={styles.Boxes}>
        {/* Render 8 boxes with images, names, and buttons */}
        {images.map((image, index) => (
          <div key={index} className={styles.box}>
            <img
              src={`src/assets/images/${image.src}`}
              alt={image.name}
              className={styles.boxImage}
            />
            <div className={styles.imageDetails}>
              <p>{image.name}</p> {/* Display the image name */}
              <button className={styles.button}>View More</button> {/* Add a button */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Homepage;


