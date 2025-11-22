import styles from "./Logo.module.css";
import logo from "../../assets/logo.png";

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img src={logo} alt="QTify Logo" className={styles.logoImage} />
      <span className={styles.logoText}>QTify</span>
    </div>
  );
}

export default Logo;
