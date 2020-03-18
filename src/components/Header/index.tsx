import React from "react"
import "./style.css"

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">
          <img src="./img/logo.png" alt="logo" />
        </a>
      </nav>
      <div className="mobile-menu">
        <div className="mobile-logo">
          <a className="navbar-brand" href="#">
            <img src="./img/mobile-logo.png" alt="" />
          </a>
        </div>
      </div>
    </header>
  )
}
export default Header
