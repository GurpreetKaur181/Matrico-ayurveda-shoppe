import React from "react";
import styles from "./Homepage.module.css";


const images = [
  "ayur.png",
  "ayur1.png",
  "ayur2.png",
  "ayur3.png",
  "ayur4.png",
  "ayur5.png",
  "ayur6.png",
  "ayur7.png",
  
];
function Homepage(){
   return(
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
        {/* Render 8 boxes with images */}
        {images.map((image, index) => (
          <div key={index} className={styles.box}>
            <img
              src={`src/assets/images/${image}`}
              alt={`Ayurvedic Product ${index + 1}`}
              className={styles.boxImage}
            />
           
          </div>
        ))}
      </div>  
      
        </>
   )
}

export default Homepage;