import React from "react"
import PropTypes from "prop-types"

SearchResultsList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string).isRequired,
}

function SearchResultsList({ results }) {
  return (
    <div className="search__results">
      {results.map((movie, index) => (
        <div className="search__results__item" key={index}>
          <div className="search__results__item__format">
            <img
              className="search__results__item__format__img"
              src={movie.poster_path}
              alt={movie.title}
            />
            <p className="search__results__item__format__title">{movie.title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SearchResultsList
