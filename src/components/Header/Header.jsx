import React from "react"
import Search from "./components/Search"

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__content__title">React Watch list</h1>
        <Search/>
      </div>
    </header>
  )
}

export default Header
