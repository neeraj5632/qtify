import styles from "./Carousel.module.css";

function LeftNavButton({ onClick }) {
  return (
    <button className={styles.navButtonLeft} onClick={onClick}>
      {/* yahan Figma se left-arrow SVG rakh sakte ho, abhi text use kar rahe */}
      &#8249;
    </button>
  );
}

export default LeftNavButton;
