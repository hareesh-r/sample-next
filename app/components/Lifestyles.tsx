"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "../styles/Lifestyles.module.scss";

const Lifestyles: React.FC = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("Nutrition");
  // Ref for scrolling the cards container
  const cardContainerRef = useRef<HTMLDivElement>(null);

  // Tabs for the section
  const tabs = [
    "Nutrition",
    "Physical activity",
    "Restorative sleep",
    "Stress management",
    "Social connection",
    "Substance abuse",
  ];

  // Cards data for the lifestyles section
  const cards = [
    {
      id: 1,
      title: "Nutrition",
      subtitle:
        "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
      image: "/Lifestyles/LS_Nutrition.svg",
      badge: { icon: "/Lifestyles/icons/nutrition_icon.svg", bold: "121/80", text: "mmHg" },
    },
    {
      id: 2,
      title: "Physical activity",
      subtitle:
        "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
      image: "/Lifestyles/LS_PhysicalActivity.svg",
      badge: { icon: "/Lifestyles/icons/activity_icon.svg", bold: "32", text: "minutes" },
    },
    {
      id: 3,
      title: "Restorative sleep",
      subtitle:
        "Consistent, quality sleep is essential for cognitive function and physical health.",
      image: "/Lifestyles/LS_Sleep.svg",
      badge: { icon: "/Lifestyles/icons/sleep_icon.svg", bold: "8", text: "hours" },
    },
    {
      id: 4,
      title: "Stress management",
      subtitle:
        "Effective stress management techniques are crucial for mental well-being and overall health.",
      image: "/Lifestyles/LS_Stress.svg",
      badge: { icon: "/Lifestyles/icons/stress_icon.svg", bold: "60", text: "bpm" },
    },
    {
      id: 5,
      title: "Social connection",
      subtitle:
        "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.",
      image: "/Lifestyles/LS_Social.svg",
      badge: { icon: "/Lifestyles/icons/social_icon.svg", bold: "Feeling", text: "better" },
    },
    {
      id: 6,
      title: "Substance abuse",
      subtitle:
        "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.",
      image: "/Lifestyles/LS_Substance.svg",
      badge: { icon: "/Lifestyles/icons/substance_icon.svg", bold: "62", text: "days" },
    },
  ];

  // Handle tab click and scroll to the corresponding card
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    const tabIndex = tabs.indexOf(tab);
    if (cardContainerRef.current) {
      const cardWidth = 450; // Approximate width of each card
      cardContainerRef.current.scrollTo({
        left: cardWidth * tabIndex,
        behavior: "smooth",
      });
    }
  };

  // Scroll the cards container to the left
  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: -450,
        behavior: "smooth",
      });
    }
  };

  // Scroll the cards container to the right
  const scrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: 450,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.lifestylesHeader}>
      {/* Header Section */}
      <div className={styles.header}>
        <h2>HOW IT WORKS</h2>
        <p>
          <span>Lifestyle as medicine:</span> The six pillars
        </p>

        {/* Navigation Arrows */}
        <div className={styles.navigation}>
          <button className={styles.navButton} onClick={scrollLeft}>
            <Image src="/left-arrow.svg" alt="Left Arrow" width={32} height={32} />
          </button>
          <button className={styles.navButton} onClick={scrollRight}>
            <Image src="/right-arrow.svg" alt="Right Arrow" width={32} height={32} />
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className={styles.tabsSection}>
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? styles.activeTab : ""}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Section */}
      <div className={styles.cardsContainer} ref={cardContainerRef}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <div className={styles.cardImage}>
              <Image src={card.image} alt={card.title} width={300} height={200} />
              <div className={styles.badge}>
                <Image src={card.badge.icon} alt="Badge Icon" width={16} height={16} />
                <span className={styles.badgebold}>{card.badge.bold}</span>
                <span>{card.badge.text}</span>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3>{card.title}</h3>
              <p>{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lifestyles;
