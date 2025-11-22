import { useState, useEffect } from "react";
import styles from "./SongsSection.module.css";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import { getSongs, getGenres } from "../../api";
import { Tabs, Tab } from "@mui/material";

function SongsSection() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  useEffect(() => {
    async function fetchData() {
      const songData = await getSongs();
      const genreData = await getGenres();
      setSongs(songData);
      setGenres([{ key: "all", label: "All" }, ...genreData.data]);
    }
    fetchData();
  }, []);

  const handleChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  const filteredSongs =
    selectedGenre === "all"
      ? songs
      : songs.filter((song) => song.genre.key === selectedGenre);

  return (
    <section className={styles.sectionWrapper}>
      <h2 className={styles.title}>Songs</h2>

      {/* MUI Tabs */}
      <Tabs
        value={selectedGenre}
        onChange={handleChange}
        textColor="inherit"
        TabIndicatorProps={{ style: { backgroundColor: "#34C94B" } }}
      >
        {genres.map((genre) => (
          <Tab
            key={genre.key}
            value={genre.key}
            label={genre.label}
            className={styles.tabItem}
          />
        ))}
      </Tabs>

      {/* Always show CAROUSEL (no Show All for songs) */}
      <Carousel
        items={filteredSongs}
        renderItem={(song) => (
          <Card
            key={song.id}
            image={song.image}
            title={song.title}
            follows={song.likes}
            type="song"
          />
        )}
      />
    </section>
  );
}

export default SongsSection;
