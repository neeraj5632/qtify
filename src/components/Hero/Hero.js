import styles from "./Hero.module.css";
import headphones from "../../assets/headphones.png";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.title}>100 Thousand Songs, ad-free</h1>
        <p className={styles.subtitle}>Over thousands podcast episodes</p>
      </div>
      <div className={styles.right}>
        <img
          src={headphones}
          alt="Headphones illustration"
          className={styles.heroImage}
        />
      </div>
    </section>
  );
}

export default Hero;
