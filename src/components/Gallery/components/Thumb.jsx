import React from "react"
import PropTypes from "prop-types"
import { getCountryName } from "../../../services/languageService";

Thumb.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  year: PropTypes.string,
  firstAir: PropTypes.string,
  vo: PropTypes.string,
  rating: PropTypes.number,
}

function Thumb({ img, title, name, year, firstAir, vo, rating }) {
  const imagesURL = "https://image.tmdb.org/t/p/w500";
  return (
    <li className="thumb">
      <img className="thumb__img" src={imagesURL + img} />
      {title ? (
        <h2 className="thumb__title" title={title}>
          {title}
        </h2>
      ) : (
        ""
      )}
      {name ? (
        <h2 className="thumb__title" title={name}>
          {name}
        </h2>
      ) : (
        ""
      )}
      <div className="thumb__infos">
        {year ? <span className="thumb__infos__specific">{year}</span> : ""}
        {firstAir ? <span className="thumb__infos__specific">{firstAir}</span> : ""}
        <span className="thumb__infos__specific" title={`VO: ${getCountryName(vo)}`}>{vo}</span>
        <span className="thumb__infos__specific thumb__infos__specific--rating">{rating}</span>
      </div>
    </li>
  )
}

export default Thumb
