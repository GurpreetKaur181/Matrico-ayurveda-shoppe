import React from "react";
import styles from "./Homepage.module.css";


const images = [
  "aayur.png",
  "aayur1.png",
  "aayur2.png",
  "aayur3.png",
  "aayur4.png",
  "aayur5.png",
  "aayur6.png",
  "aayur7.png",
  
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