'use client'
import React from 'react';
import styles from './Card2.module.css';

const Card2 = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          ARMOR
          <br />
          AIR COLOR 720
        </h1>
        <p className={styles.description}>
          Lightweight cushioning and durable support with a Phylon midsole
        </p>
        <div className={styles.priceContainer}>
          <span className={styles.currentPrice}>$90.00</span>
          <span className={styles.oldPrice}>$170.00</span>
          <button className={styles.shopButton}>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card2;
