import Link from "next/link"
import styles from "./Navbar.module.scss"
export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container} >
                <Link href="/" className={styles.logo} >Brand Name</Link>
                <div className={styles.links}>
                    <Link href="#features" className={styles.link} >Features</Link>
                    <Link href="#pricing" className={styles.link}>Pricing</Link>
                    <Link href="#about" className={styles.link}>About</Link>
                    <Link href="#contact" className={styles.link}>Contact</Link>
                </div>
                <button className={styles.button} >Get started</button>
            </div>

        </nav>
    )
}