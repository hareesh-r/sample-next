"use client";
import React from "react";
import Image from "next/image";
import styles from "../styles/Landing.module.scss";

const LandingPage: React.FC = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        {/* Image Columns Section */}
        <div className={styles.imageColumns}>
          {/* Left Column with animated scrolling images */}
          <div className={styles.column}>
            <div className={styles.loop}>
              <Image src="/landp_c1/c1image1.svg" alt="Image 1" width={200} height={200} />
              <Image src="/landp_c1/c1image2.svg" alt="Image 2" width={200} height={200} />
              <Image src="/landp_c1/c1image3.svg" alt="Image 3" width={200} height={200} />
              <Image src="/landp_c1/c1image4.svg" alt="Image 4" width={200} height={200} />
            </div>
          </div>
          {/* Right Column with reverse animated scrolling images */}
          <div className={styles.column}>
            <div className={`${styles.loop} ${styles.reverse}`}>
              <Image src="/landp_c2/c2image1.svg" alt="Image 5" width={200} height={200} />
              <Image src="/landp_c2/c2image2.svg" alt="Image 6" width={200} height={200} />
              <Image src="/landp_c2/c2image3.svg" alt="Image 7" width={200} height={200} />
              <Image src="/landp_c2/c2image4.svg" alt="Image 8" width={200} height={200} />
            </div>
          </div>
        </div>

        {/* Text Section with Heading and Subtitle */}
        <div className={styles.text}>
          <h1>
            Book an appointment with <span>lifestyle medicine</span> experts
          </h1>
          <p>Optimize your lifestyle and reverse chronic diseases.</p>
        </div>

        {/* Search Bar Section */}
        <div className={styles.searchBar}>
          {/* Search Field for Condition */}
          <div className={styles.searchField}>
            <Image src="/search-icon.svg" alt="Search Icon" width={24} height={24} />
            <input type="text" placeholder="Condition, procedure, specialty..." />
          </div>
          {/* Search Field for Location */}
          <div className={styles.searchField}>
            <Image src="/location-icon.svg" alt="Location Icon" width={24} height={24} />
            <input type="text" placeholder="City, state, or zipcode" />
          </div>
          {/* Search Field for Insurance */}
          <div className={styles.searchField}>
            <Image src="/health-card.svg" alt="Health Card Icon" width={24} height={24} />
            <input type="text" placeholder="Insurance carrier" />
          </div>
          {/* Find Now Button */}
          <button className={styles.searchButton}>
            <Image src="/search-iconW.svg" alt="Search Icon" width={24} height={24} />
            Find now
          </button>
        </div>

        {/* Additional Scrolling Images for Mobile */}
        <div className={styles.extraImages}>
          <div className={styles.imageWrapper}>
            <Image src="/landp_c1/c1image1.svg" alt="Extra Image 1" width={100} height={100} />
            <Image src="/landp_c1/c1image2.svg" alt="Extra Image 2" width={100} height={100} />
            <Image src="/landp_c1/c1image3.svg" alt="Extra Image 3" width={100} height={100} />
            <Image src="/landp_c2/c2image1.svg" alt="Extra Image 4" width={100} height={100} />
            <Image src="/landp_c2/c2image2.svg" alt="Extra Image 5" width={100} height={100} />
            <Image src="/landp_c2/c2image3.svg" alt="Extra Image 6" width={100} height={100} />
          </div>
        </div>
      </div>
      {/* Bottom Gradient Line */}
      <div className={styles.bottomLine}></div>
    </div>
  );
};

export default LandingPage;
