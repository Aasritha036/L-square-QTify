import { useEffect, useState } from "react";
import API from "../services/api";
import AlbumCard from "../Card/Card";

import "./Section.css";

const Section = () => {

  const [albums,setAlbums]=useState([]);
  const [showAll,setShowAll]=useState(false);

  const getAlbums=async()=>{

      try{

          const response=await API.get("/albums/top");

          setAlbums(response.data);

      }

      catch(error){

          console.log(error);

      }

  };

  useEffect(()=>{

      getAlbums();

  },[]);

  const displayedAlbums=showAll
      ? albums
      : albums.slice(0,7);

  return(

      <section className="section">

          <div className="sectionHeader">

              <h2>Top Albums</h2>

              <button
              className="toggleBtn"
              onClick={()=>setShowAll(!showAll)}
              >

                  {showAll?"Collapse":"Show All"}

              </button>

          </div>

          <div className="cardGrid">

              {
                  displayedAlbums.map((album)=>(
                      <AlbumCard
                        key={album.id}
                        image={album.image}
                        follows={album.follows}
                        title={album.title}
                      />
                  ))
              }

          </div>

      </section>

  );

};

export default Section;