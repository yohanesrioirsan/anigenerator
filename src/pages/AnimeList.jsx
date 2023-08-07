import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/AnimeList.style.css";

function AnimeList() {
  const [animeList, setAnimeList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getAnimeList = async () => {
    try {
      const response = await axios.get("https://api.jikan.moe/v4/anime");
      setAnimeList(response.data);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const findAnime = async (q) => {
    const search = await axios.get(`https://api.jikan.moe/v4/anime?q=${q}&sfw`);
    setAnimeList(search.data);
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await findAnime(q);
      console.log(query);
    }
  };

  useEffect(() => {
    getAnimeList();
  }, []);

  return (
    <>
      <section className="anime-list-page">
        <Link to="/">
          <button className="btn-search">Home</button>
        </Link>
        <Link to="/aniquotes">
          <button className="btn-search">AniQuotes</button>
        </Link>
        <header className="page-title">
          <h1>
            Anime <span className="blocked-text">List</span>
          </h1>
        </header>
        <div className="head">
          <input
            placeholder="search anime. example: Dragon Ball"
            value={searchQuery}
            onChange={({ target }) => setSearchQuery(target.value)}
          />
          <button className="btn-search" onClick={() => search(searchQuery)}>
            Search
          </button>
        </div>
        <div className="anilist-wrapper">
          {animeList && animeList.data && animeList.data.length > 0 ? (
            animeList.data.slice(0, 16).map((anime) => (
              <div className="anilist-content" key={anime.mal_id}>
                <div className="anime-img">
                  <img
                    className="animage"
                    src={anime.images.jpg.image_url}
                    alt="default-img"
                  />
                </div>
                <div className="anime-details">
                  <h3>
                    <span className="blocked-text">
                      {anime.title_english} / {anime.title_japanese}
                    </span>
                  </h3>
                  <h3>{anime.episodes} Episodes</h3>
                  <h3>{anime.status}</h3>
                  <h3>
                    MAL Score :{" "}
                    <span className="blocked-text">{anime.score}</span>
                  </h3>
                </div>
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <footer>
          <h5>
            Anime List made by Rio Irsan, API by{" "}
            <a href="https://jikan.moe/">Jikan API</a>
          </h5>
        </footer>
      </section>
    </>
  );
}

export default AnimeList;
