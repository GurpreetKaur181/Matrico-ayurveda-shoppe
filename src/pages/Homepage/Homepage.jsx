import React, { useState } from "react";
import styles from "./Homepage.module.css";

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

const diseases = [
  {
    name: "Cough & Cold",
    Herbs: ["Honey", "Tulsi", "Ginger"],
    medicine: "Divya Swasari Pravahi",
    image: "Divya Swasari Pravahi.jpg",
  },
  {
    name: "Diabetes",
    Herbs: ["Jamun", "Bitter Gourd", "Fenugreek"],
    medicine: "Divya Chandraprabha Vati",
    image: "Divya Chandraprabha Vati.jpg",
  },
  {
    name: "Fever",
    Herbs: ["Tulsi", "Neem", "Giloy"],
    medicine: "Divya Jwarnashak kwath",
    image: "Divya Jwarnashak kwath.png",
  },
  {
    name: "Headache",
    Herbs: ["Ashwagandha", "Brahmi", "Gotu Kola"],
    medicine: "Divya Dhara",
    image: "Divya Dhara.png",
  },
  {
    name: "Indigestion",
    Herbs: ["Triphala", "Ginger", "Cumin"],
    medicine: "Shuddhi churna",
    image: "Shuddhi churna.jpg",
  },
  {
    name: "Constipation",
    Herbs: ["Triphala", "Isabgol, Aloe Vera"],
    medicine: "Divya Khadirarishta",
    image: "Divya Khadirarishta.png",
  },
  {
    name: "Skin Diseases (Eczema, Psoriasis)",
    Herbs: ["Neem", "Tulsi, Turmeric"],
    medicine: "Divya churna",
    image: "Divya churna.png",
  },
  {
    name: "Joint Pain",
    Herbs: ["Ashwagandha", "Turmeric, Ginger"],
    medicine: "Peedantak Vati",
    image: "Peedantak Vati.png",
  },
  {
    name: "Anxiety and Stress",
    Herbs: ["Ashwagandha", "Brahmi, Valerian Root"],
    medicine: "Ashwagansharist",
    image: "Ashwagansharist.png",
  },
  {
    name: "Insomnia",
    Herbs: ["Ashwagandha", "Brahmi, Valerian Root"],
    medicine: "Divya Medha Vati",
    image: "Divya Medha Vati.jpg",
  },
  {
    name: "Low Immunity",
    Herbs: ["Amla", "Tulsi, Ashwagandha"],
    medicine: "immunogrit",
    image: "immunogrit.png",
  },
  {
    name: "Eye Problems",
    Herbs: ["Triphala", "Amla, Bilberry"],
    medicine: "drishti",
    image: "drishti.jpg",
  },
  {
    name: "High Blood Pressure",
    Herbs: ["Arjuna, Garlic, Coriander"],
    medicine: "mukti vati",
    image: "mukti vati.jpg",
  },
  {
    name: "Heart Disease",
    Herbs: ["Arjuna, Garlic, Guggulu"],
    medicine: "Hridyamrit vati",
    image: "Hridyamrit vati.png",
  },
  {
    name: "Kidney Stones",
    Herbs: ["Varuna, Punarnava, Shilajit"],
    medicine: "divya ashmarihar ras",
    image: "divya ashmarihar ras.png",
  },
  {
    name: "Liver Diseases",
    Herbs: ["Bhringraj, Kalmegh, Shatavari"],
    medicine: "livogrit vital",
    image: "livogrit vital.jpg",
  },
  {
    name: "Urinary Tract Infections (UTIs)",
    Herbs: ["Gokshura, Varuna, Chandraprabha Vati"],
    medicine: "Gokshuradhi guggul",
    image: "Gokshuradhi guggul.png",
  },
  {
    name: "Menstrual Disorders",
    Herbs: ["Ashoka, Shatavari, Dashmula"],
    medicine: "Ashokarishth",
    image: "Ashokarishth.png",
  },
  {
    name: "Menopause Symptoms",
    Herbs: ["Shatavari, Ashoka, Ashwagandha"],
    medicine: "shatavr churna",
    image: "shatavr churna.png",
  },
  {
    name: "Hair Loss",
    Herbs: ["Bhringraj, Amla, Brahmi"],
    medicine: "kesh kanti",
    image: "kesh kanti.png",
  },
  {
    name: "Premature Aging",
    Herbs: ["Amla, Ashwagandha, Chyawanprash"],
    medicine: "saundarya",
    image: "saundarya.png",
  },
  {
    name: "Weight Gain",
    Herbs: ["Triphala, Guggulu, Garcinia Cambogia"],
    medicine: "nutrela weight gain",
    image: "nutrela weight gain.jpg",
  },
  {
    name: "Weight Loss",
    Herbs: ["Triphala, Guggulu, Garcinia Cambogia"],
    medicine: "weight go tablet",
    image: "weight go tablet.png",
  },
  {
    name: "Thyroid Disorders",
    Herbs: ["Brahmi, Ashwagandha, Guggulu"],
    medicine: "thyrogrit",
    image: "thyrogrit.jpg",
  },
  {
    name: "PCOD/PCOS",
    Herbs: ["Shatavari, Ashoka, Chandraprabha Vati"],
    medicine: "anartava syrup",
    image: "anartava syrup.jpg",
  },
  {
    name: "Infertility",
    Herbs: ["Ashwagandha, Shatavari, Shilajit"],
    medicine: "chandraprabha vati",
    image: "chandraprabha vati.png",
  },
];

function Homepage() {
  const [selectedDisease, setSelectedDisease] = useState(null);

  const handleDiseaseClick = (disease) => {
    setSelectedDisease(disease === selectedDisease ? null : disease);
  };

  return (
    <>
      <div className={styles.textContent}>
        <h1
          style={{
            fontSize: "35px",
            marginTop: "60px",
            color: "green",
          }}
        >
          Welcome to Our Ayurvedic Medicine Collection
        </h1>
        <p
          style={{
            fontSize: "25px",
            marginTop: "5px",
            color: "black",
            fontWeight: "rgb(181, 181, 181)",
            marginBottom: "20px",
          }}
        >
          Explore our range of natural and organic Ayurvedic medicines designed
          to promote wellness and balance.
        </p>
        <div>
          <ul className={styles.diseaseListRow}>
            {diseases.map((disease) => (
              <li className={styles.diseaseList}>
                <button
                  key={disease.name}
                  style={{
                    backgroundColor:
                      selectedDisease === disease ? "green" : "white",
                    color: selectedDisease === disease ? "white" : "black",
                    padding: "3px",
                  }}
                  onClick={() => handleDiseaseClick(disease)}
                >
                  {disease.name}
                </button>
              </li>
            ))}
          </ul>

          {selectedDisease && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "25px",
                    margin: "10px",
                    color: "green",
                    marginLeft: "30px",
                    marginTop: "12px",
                  }}
                >
                  Ayurvedic Herbs:
                </h3>
                <ul
                  style={{
                    marginTop: "8px",
                    listStyleType: "none",
                  }}
                >
                  <li key={selectedDisease.name}>
                    {selectedDisease.Herbs.join(", ")}
                  </li>
                </ul>
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "25px",
                    margin: "10px",
                    color: "green",
                    marginLeft: "30px",
                    marginTop: "12px",
                  }}
                >
                  Ayurvedic Medicine:
                </h3>
                <ul
                  style={{
                    marginTop: "8px",
                    listStyleType: "none",
                  }}
                >
                  <li key={selectedDisease.name}>{selectedDisease.medicine}</li>
                </ul>
                {selectedDisease.image && (
                  <img
                    src={`./images/${selectedDisease.image}`} // Adjust image path based on your setup
                    alt={selectedDisease.name + " Medicine"}
                    style={{
                      width: "100px",
                      height: "100px",
                      marginTop: "10px",
                    }}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.container}></div>

      <div className={styles.Boxes}>
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
    </>
  );
}

export default Homepage;
