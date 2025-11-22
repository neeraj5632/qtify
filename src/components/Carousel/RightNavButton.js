import styles from "./Carousel.module.css";

function RightNavButton({ onClick }) {
  return (
    <button className={styles.navButtonRight} onClick={onClick}>
      {/* yahan Figma se right-arrow SVG rakh sakte ho */}
      &#8250;
    </button>
  );
}

export default RightNavButton;
