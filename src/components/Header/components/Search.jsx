import React, { useState } from "react"
import { FaSearch } from "react-icons/fa"
import SearchResultsList from "./SearchResultsList"

function Search() {
  const [input, setInput] = useState("")
  const [results, setResults] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGY0ZWEwZjMxNTViOTczMmExYTZjMjk1NWIxMWEzZiIsInN1YiI6IjY2NzUxMDIzOWYxZWJmMjZlN2M1MWU4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XSu8hLv81NaaXV8oumFZL5v82H8kvNSvAAhIIVdy_uE'
    }
  };
  const fetchData = (value) => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${value}&api_key=c0f4ea0f3155b9732a1a6c2955b11a3f`)
      .then((res) => res.json())
      .then((json) => {
        if (json.results && Array.isArray(json.results)) {
          const filteredResults = json.results.map((movie) => ({
            title: movie.title,
            poster_path: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null
          }));
          setResults(filteredResults);
        } else {
          setResults([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setResults([]);
      });
  }
  

  
  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }
  return (
    <div className="search">
      <div className="search__bar">
        <FaSearch className="search__bar__icon" if="search-icon" />
        <input
          className="search__bar__input"
          placeholder="Type of search..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      {results.length > 0 && <SearchResultsList results={results} />}
    </div>
  )
}

export default Search
