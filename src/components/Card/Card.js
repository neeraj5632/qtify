import { Chip } from "@mui/material";
import styles from "./Card.module.css";

function Card({ image, title, follows }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />

        <Chip
          label={`${follows} Follows`}
          size="small"
          className={styles.chip}
        />
      </div>

      <div className={styles.bottom}>
        <p className={styles.albumTitle}>{title}</p>
      </div>
    </div>
  );
}

export default Card;
