import React from "react"
import { Link, withPrefix } from "gatsby"
import Header from "./Header"

interface Props {
  location: Location
  title: string
  children?: any
}

const Layout = ({ location, title, children }: Props) => {
  return (
    <div className="wrap-main">
      <Header />
      <main>{children}</main>
      <footer>
        <div className="footer-copyright">
          EcoPark Grand The Island © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  )
}

export default Layout
