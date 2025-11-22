import { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import { getTopAlbums } from "../../api";

function Section() {
  const [albums, setAlbums] = useState([]);

  // 👉 useEffect: component load hote hi API call karega
  useEffect(() => {
    async function fetchAlbums() {
      try {
        const data = await getTopAlbums();
        setAlbums(data);
      } catch (error) {
        console.error("Failed to fetch top albums", error);
      }
    }

    fetchAlbums();
  }, []); // empty dependency → sirf first render par call

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>Top Albums</h2>

        {/* abhi requirement me sirf Collapse button bola hai */}
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
