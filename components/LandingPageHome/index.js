"use client";
import Image from "next/image";
import styles from "./Home.module.scss";
export default function Home() {
  return (
    <div className={styles.container}>
      <div style={{display : "flex", flexDirection : "row", alignItems : "center", justifyContent : "spaceBetween"}} >

        <div className={styles.logo}>RENTPE</div>
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li>Home</li>
          <li>About</li>
          <li>Tenants</li>
          <li>LandLords</li>
          <li>Residence Card</li>
          <li>Rent credit score</li>
        <li className={styles.button}>Contact Us</li>
        </ul>
      </nav>
      </div>

      <div className={styles.heroSection}>
        <h1>
          Building India&nbsp;s First{" "}
          <span className={styles.highlight}> Rent credit score </span>
        </h1>
        <p>Pay Rent. Earn Rewards. Live Smarter!</p>

        <div className={styles.buttonGroup}>
          <button className={styles.storeButton}>Get it on App Store</button>
          <button className={styles.storeButton}>Get it on Play Store</button>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <Image alt="Mobile img" width={400} height={800} className={styles.appImage} />
      </div>
    </div>
  );
}
