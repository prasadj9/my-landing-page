"use client";

import { useEffect, useState } from "react";
import styles from "./RaindropEffect.module.scss"

export default function RaindropEffect({count = 50}) {
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
        <div className={styles.container} >
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
    )
}