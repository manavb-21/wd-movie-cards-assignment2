import { useState } from "react";
import "./App.css";
import avatar from "./assets/avatar.jpg";
import interstellar from "./assets/interstellar.jpg";
import idiots from "./assets/idiots.jpg";
import php from "./assets/php.jpg";
import oppenheimer from "./assets/Oppenheimer.jpg";
import uri from "./assets/uri.jpg";
import munna from "./assets/munna.jpg";
import dhurandhar from "./assets/Dhurandhar.jpg";


function App() {
  const [searchText, setSearchText] = useState("");

  const [theme, setTheme] = useState("light");

  const movies = [
    {
      id: 1,
      title: "Avatar",
      image: avatar,
      trailer: "https://www.youtube.com/watch?v=5PSNL1qE6VY",
      rating: "U/A"
    },

    {
      id: 2,
      title: "Interstellar",
      image: interstellar,
      trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
      rating: "U/A"
    },
    {
      id: 3,
      title: "3 Idiots",
      image: idiots,
      trailer: "https://www.youtube.com/watch?v=xvszmNXdM4w",
      rating: "U/A"
    },
    {
      id: 4,
      title: "Phir Hera Pheri",
      image: php,
      trailer: "https://www.youtube.com/watch?v=Im_lCAsA27Q",
      rating: "U"
    },
    {
      id: 5,
      title: "Oppenheimer",
      image: oppenheimer,
      trailer: "https://www.youtube.com/watch?v=bK6ldnjE3Y0",
      rating: "U/A"
    },

    {
      id: 6,
      title: "Uri: The Surgical Strike",
      image: uri,
      trailer: "https://www.youtube.com/watch?v=Cg8sbRFS3zU",
      rating: "U/A"
    },
    {
      id: 7,
      title: "Munna Bhai M.B.B.S.",
      image: munna,
      trailer: "https://www.youtube.com/watch?v=6lCGvu-hwX4",
      rating: "U"
    },
    {
      id: 8,
      title: "Dhurandhar",
      image: dhurandhar,
      trailer: "https://www.youtube.com/watch?v=BKOVzHcjEIo",
      rating: "A"
    }
  ]

  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(searchText.toLowerCase());
  })

  return (
    <div className={`app ${theme}`}>

      <div className="search-bar">
        {/* <p>You typed: {searchText}</p> */}
        <input
          type="text"
          placeholder="Search movies..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        /> 

        <button
          onClick={() => {
            setTheme(theme === "light" ? "dark": "light")
          }}
        >
          {theme === "light" ? "Switch to Dark Mode 🌙" : "Switch to Light Mode ☀️"}
        </button>
      </div>

      <div className="movies-container">
        {filteredMovies.map((movie) => (
          <div key={movie.id}
            className="movie-card"
            onClick={() => window.open(movie.trailer, "_blank")}
          >
            <div className="poster-container">
              <div className="rating-badge">
                {movie.rating}
              </div>
              <img src={movie.image} alt={movie.title} width="100%" />
                <div className="overlay">
                  <span>▶ Watch Trailer</span>
                </div>
              <h3>{movie.title}</h3>
            </div>           
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;