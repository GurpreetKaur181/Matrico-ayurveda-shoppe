// Detailpage.js
import React from 'react';
import styles from './Detailpage.module.css';

function Detailpage() {
  // Define the medicine object
  const medicine = {
    name: 'Divya Mukta Vati Extra Power',
    description: 'Light to dark brown colour, round biconvex film coated tablet with characteristic odour.',
    price: '₹225',
    imageUrl: 'images/mukti vati.jpg', // Replace with actual image URL of the medicine
    reviews: 8,
    availability: 'In Stock',
    weight: '1', // Adjust the weight if needed
  };

  return (
    <>
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={medicine.imageUrl} alt={medicine.name} className={styles.image} />
      </div>
      <div className={styles.details}>
        <h2>{medicine.name}</h2>
        <p>{medicine.description}</p>
        
        {/* Additional Details */}
        <div className={styles.additionalDetails}>
          <p><strong>{medicine.reviews} customer reviews</strong></p>
          <p><strong>{medicine.availability}</strong></p>
          <p><strong>₹{medicine.price}</strong> Inclusive of all taxes</p>
          
          {/* Weight and Button */}
          <div className={styles.weightContainer}>
            <p><strong>Weight: {medicine.weight}</strong></p>
            <button className={styles.weightButton}>60kg</button>
          </div>
        </div>

        <button className={styles.addToCart}>Buy Now</button>
      </div>
    </div>
     
      {/* Product Details Table (Single Table) */}
      <div className={styles.productTableContainer}>
      <h1 className={styles.h1tag}>Product Details</h1>

      <h2>Technical Information</h2>
        <table className={styles.productTable}>
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Manufacturer</td>
              <td>Divya Pharmacy</td>
            </tr>
            <tr>
              <td>Country of Origin</td>
              <td>India</td>
            </tr>
            <tr>
              <td>Item Form</td>
              <td>Tablet</td>
            </tr>
            <tr>
              <td>Package Type</td>
              <td>Bottle</td>
            </tr>
            <tr>
              <td>Net Quantity</td>
              <td>120 Tablet</td>
            </tr>
            <tr>
              <td>Item Weight</td>
              <td>60 Gram</td>
            </tr>
            <tr>
              <td>Legal Disclaimer</td>
              <td>
                Actual product packaging and materials may contain more and different information than what is shown on our app or website. We recommend that you do not rely solely on the information presented here and that you always read labels, warnings, and directions before using or consuming a product.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Detailpage;
