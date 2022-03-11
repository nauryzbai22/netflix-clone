import axios from '../../axios';
import React, { useEffect, useState } from 'react';
import './Banner.css';

function Banner({fetchUrl}) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results[Math.floor(Math.random() * (request.data.results.length - 1))])
    }
    fetchData();
  }, []);

  return (
    <header className="banner" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`, backgroundSize: "cover", backgroundPosition: "center center"}} >
      <div className="banner__content">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_title}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <p className="banner__description">{movie?.overview}</p>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
