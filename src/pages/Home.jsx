import React from "react";
import "../styles/Home.style.css";

function Home() {
  return (
    <section className="home-page">
      <div className="home-wrapper">
        <div className="menu-list">
          <h1>{"// Choose The List You Want //"}</h1>
          <button className="btn-menu">Anime Quotes</button>
          <button className="btn-menu">Anime List</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
