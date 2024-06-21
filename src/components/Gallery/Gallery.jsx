import React from "react"
import PropTypes from "prop-types"
import Thumb from "./components/Thumb"
import PageHandler from "./components/PageHandler"

Gallery.propTypes = {
  data: PropTypes.array.isRequired,
  galleryName: PropTypes.string.isRequired,
  darker: PropTypes.bool,
  handleNextPage: PropTypes.func,
  handlePrevPage: PropTypes.func,
  activePage: PropTypes.number,
}

function Gallery({
  data,
  galleryName,
  darker = false,
  handlePrevPage,
  handleNextPage,
  activePage,
}) {
  const getYearFromDate = (dateString) => {
    if (dateString) {
      const parts = dateString.split("-")
      return parts[0]
    }
    return ""
  }
  return (
    <section className={`gallery ${darker ? "gallery--alternate" : ""}`}>
      <div className="gallery__header">
        <h2 className="gallery__header__title">{galleryName}</h2>
        <PageHandler
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          activePage={activePage}
        />
      </div>
      <ul className="gallery__thumbs">
        {data.map((item) => (
          <Thumb
            key={item.id}
            img={item.poster_path}
            title={item.title}
            name={item.name}
            year={getYearFromDate(item.release_date)}
            firstAir={getYearFromDate(item.first_air_date)}
            vo={item.original_language.toUpperCase()}
            rating={parseFloat(item.vote_average.toFixed(1))}
          />
        ))}
      </ul>
    </section>
  )
}

export default Gallery
