import { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import API from "../../services/api";

import styles from "./Section.module.css";

const Section = ({ title, endpoint }) => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] =
    useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const songsRes = await API.get(endpoint);
        setSongs(songsRes.data);

        const genreRes = await API.get("/genres");

        setGenres([
          {
            key: "all",
            label: "All",
          },
          ...genreRes.data.data,
        ]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [endpoint]);

  const filteredSongs =
    selectedGenre === "all"
      ? songs
      : songs.filter(
          (song) =>
            song.genre.key === selectedGenre
        );

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
      </div>

      <div className={styles.tabs}>
        <Tabs
          value={selectedGenre}
          onChange={(e, value) =>
            setSelectedGenre(value)
          }
        >
          {genres.map((genre) => (
            <Tab
              key={genre.key}
              value={genre.key}
              label={genre.label}
            />
          ))}
        </Tabs>
      </div>

      <Carousel
        data={filteredSongs}
        renderComponent={(song) => (
          <Card
            image={song.image}
            title={song.title}
            follows={song.likes}
            isSongsSection
          />
        )}
      />
    </section>
  );
};

export default Section;