import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.style.css";

function Home() {
  return (
    <section className="home-page">
      <div className="home-wrapper">
        <div className="menu-list">
          <h1>{"// Menu //"}</h1>
          <Link to="/aniquotes">
            <button className="btn-menu">Anime Quotes</button>
          </Link>
          <Link to="/anilist">
            <button className="btn-menu">Anime List</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
