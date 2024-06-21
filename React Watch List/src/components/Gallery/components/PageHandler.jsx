import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import arrowLeft from "../../../assets/icons/arrow-left.svg"
import arrowRight from "../../../assets/icons/arrow-right.svg"

PageHandler.propTypes = {
    handleNextPage: PropTypes.func,
    handlePrevPage: PropTypes.func,
    activePage: PropTypes.number,
}

function PageHandler({handlePrevPage, handleNextPage, activePage}) {
  return (
    <div className="pages">
      <Link onClick={handlePrevPage}>
        <img className="pages__arrow" src={arrowLeft} />
      </Link>
      <p className="pages__counter">{activePage}</p>
      <Link onClick={handleNextPage}>
        <img className="pages__arrow" src={arrowRight} />
      </Link>
    </div>
  )
}

export default PageHandler
