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
    </>
  );
}

export default AyurStore;
