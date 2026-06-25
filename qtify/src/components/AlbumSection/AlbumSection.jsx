import { useEffect, useState } from "react";
import API from "../../services/api";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import styles from "./AlbumSection.module.css";

const AlbumSection = ({ title, endpoint }) => {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await API.get(endpoint);
        setAlbums(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAlbums();
  }, [endpoint]);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>

        <button
          className={styles.button}
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Collapse" : "Show All"}
        </button>
      </div>

      {showAll ? (
        <div className={styles.grid}>
          {albums.map((album) => (
            <Card
              key={album.id}
              image={album.image}
              follows={album.follows}
              title={album.title}
            />
          ))}
        </div>
      ) : (
        <Carousel
          data={albums}
          renderComponent={(album) => (
            <Card
              image={album.image}
              follows={album.follows}
              title={album.title}
            />
          )}
        />
      )}
    </section>
  );
};

export default AlbumSection;