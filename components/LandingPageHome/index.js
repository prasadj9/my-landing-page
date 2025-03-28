"use client";
import Image from "next/image";
import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
export default function Home({count = 100}) {
  const [raindrops, setRaindrops] = useState([]);
  
      useEffect(() => {
          const generateRaindrops = () => {
              const newRaindrops = []
              for (let i = 0; i < count; i++) {
                newRaindrops.push({
                  id: i,
                  left: Math.random() * 100,
                  delay: Math.random() * 5,
                  duration: 1 + Math.random() * 3,
                  size: 1 + Math.random() * 0.5 + 0.5,
                })
              }
              setRaindrops(newRaindrops)
            }
            generateRaindrops()
      }, [count])
  return (
    <>
    <div className={styles.rainContainer} >
            {raindrops.map((drop) => (
                <div
                key={drop.id}
                className={styles.raindrop}
                style={{
                    left : `${drop.left}%`,
                    animationDuration : `${drop.duration + 2}s`,
                    animationDelay : `${drop.delay}s`,
                    width : `${drop.size + 0.5}px`,
                    height : `${drop.size * 6}px`
                }}
                />
            ))}

        </div>
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          position : "relative",
          width : "100%",
          marginTop : "1rem"
        }}
      >
        <div className={styles.logo} style={{position : "absolute", left : "40px"}} >
          <Image
            alt="Mobile img"
            width={120}
            height={60}
            className={styles.appImage}
            src="/image 2.png"
          />
        </div>
        <nav className={styles.navbar}>
          <ul className={styles.navLinks}>
            <li>Home</li>
            <li>About</li>
            <li>Tenants</li>
            <li>LandLords</li>
            <li>Residence Card</li>
            <li>Rent credit score</li>
            <li className={styles.activeLink}>Contact Us</li>
          </ul>
        </nav>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap : "2rem",
          justifyContent: "space-around",
        }}
        className={styles.heroSection}
      >
        <div>
          <p style={{ fontSize: "3.5rem", fontFamily : "Montserrat", fontWeight : "500", lineHeight : "120%" }}>Building India's First </p>
          <p style={{ fontSize: "3.5rem", fontFamily : "Montserrat", fontWeight : "500", lineHeight : "120%"}} className={styles.highlight}>
            {" "}
            Rent credit score{" "}
          </p>
          <p style={{ fontSize: "25px", letterSpacing : "1px" }}>
            Pay Rent. Earn Rewards. Live Smarter!
          </p>

          <p style={{color : "#B0B1B5", marginTop : "30px", fontSize : "18px"}} >Download Our App & Get Rewarded</p>
          <div className={styles.buttonGroup}>
            <button className={styles.storeButton}>
              <Image
                src="/icons8-apple.png"
                width={25}
                height={29}
                alt="appleicon"
              />
              <div style={{display : "flex", flexDirection : "column"}} >
              <p style={{fontSize : "12px", color : "#98989A"}} >Get it on</p>
              <p style={{fontSize : "24px"}} >App Store</p>
              </div>
            </button>
            <button className={styles.storeButton}>
              <Image
                src="/icons8-playstore.png"
                width={25}
                height={29}
                alt="playstoreicon"
              />
               <div style={{display : "flex", flexDirection : "column"}} >
              <p style={{fontSize : "12px", color : "#98989A"}} >Get it on</p>
              <p style={{fontSize : "24px"}} >Play Store</p>
              </div>
            </button>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <div style={{ position: "relative", top : "-10px" }}>
            <Image
              alt="Mobile img"
              width={400}
              height={500}
              style={{ zIndex: 200, position: "relative" }}
              className={styles.appImage}
              src="/image 17 (1).png"
            />
            <Image
              style={{
                position: "absolute",
                top: "0px",
                left: "100px",
                zIndex: 1,
              }}
              alt="Mobile img"
              width={200}
              height={400}
              className={styles.appImage}
              src="/image 20.png"
              />
          </div>
        </div>
      </div>
    </div>
              </>
  );
}
