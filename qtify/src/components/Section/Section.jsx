import { useEffect, useState } from "react";
import API from "../../services/api";

import AlbumCard from "../Card/Card";
import Carousel from "../Carousel/Carousel";

import "./Section.css";

const Section = ({ title, endpoint }) => {
  const [albums, setAlbums] = useState([]);

  // Grid default
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get(endpoint);
        setAlbums(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [endpoint]);

  return (
    <section className="section">
      <div className="sectionHeader">
        <h2>{title}</h2>

        <button
          className="toggleBtn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Collapse" : "Show All"}
        </button>
      </div>

      {showAll ? (
        <div className="cardGrid">
          {albums.map((album) => (
            <AlbumCard
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
            <AlbumCard
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

export default Section;