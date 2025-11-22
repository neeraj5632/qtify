import { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import { getTopAlbums, getNewAlbums } from "../../api";

// 👉 props: title = "Top Albums" / "New Albums", type = "top" / "new"
function Section({ title, type }) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function fetchAlbums() {
      try {
        let data = [];

        if (type === "top") {
          data = await getTopAlbums();
        } else if (type === "new") {
          data = await getNewAlbums();
        }

        setAlbums(data);
      } catch (error) {
        console.error("Failed to fetch albums", error);
      }
    }

    fetchAlbums();
  }, [type]); // type change hoga tab hi dobara fetch

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>

        {/* Abhi ke liye simple Collapse button hi rakhenge */}
        <button className={styles.collapseButton}>Collapse</button>
      </div>

      <div className={styles.cardsWrapper}>
        {albums.map((album) => (
          <Card
            key={album.id}
            image={album.image}
            title={album.title}
            follows={album.follows}
          />
        ))}
      </div>
    </section>
  );
}

export default Section;
