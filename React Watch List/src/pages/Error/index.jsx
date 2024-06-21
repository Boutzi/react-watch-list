import React from "react"
import { Link } from "react-router-dom"

function Error() {
  return (
    <div className="error">
      <h1 className="error__title">404</h1>
      <h2 className="error__subtitle">
        Winter is coming... but this page isn't. Let's go back.
      </h2>
      <Link to="/" className="error__link">
        Return to the homepage.
      </Link>
    </div>
  )
}

export default Error
