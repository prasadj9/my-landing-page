import styles from "./page.module.css";
import RaindropEffect from "@/components/RaindropEffect";
import Navbar from "@/components/Navbar";
import LandingPageHome from "@/components/LandingPageHome"
export default function Home() {
  return (
    <div className={styles.container}>
      {/* <RaindropEffect count={100} /> */}
      <main className={styles.main}>
        <div className={styles.ctas}>
          {/* <Navbar/> */}
          <LandingPageHome/>
        </div>
      </main>
      
    </div>
  );
}
