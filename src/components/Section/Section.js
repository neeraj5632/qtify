import { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import { getTopAlbums, getNewAlbums } from "../../api";
import Carousel from "../Carousel/Carousel";

function Section({ title, type }) {
  const [albums, setAlbums] = useState([]);
  const [showCarousel, setShowCarousel] = useState(false);

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
  }, [type]);

  const handleToggleView = () => {
    // Collapse button click hone pe grid ↔ carousel toggle
    setShowCarousel((prev) => !prev);
  };

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>

        <button className={styles.collapseButton} onClick={handleToggleView}>
          {showCarousel ? "Show all" : "Collapse"}
        </button>
      </div>

      {/* Conditional Rendering: Grid ya Carousel */}
      {showCarousel ? (
        <Carousel
          items={albums}
          renderItem={(album) => (
            <Card
              key={album.id}
              image={album.image}
              title={album.title}
              follows={album.follows}
            />
          )}
        />
      ) : (
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
      )}
    </section>
  );
}

export default Section;
