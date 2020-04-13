import { Link } from "gatsby"
import React from "react"
// import style from './header.module.css'

const Header = ({siteTitle}) => (
  <header
  >
    <div
      className="flex items-center justify-between flex-wrap bg-teal-500"
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          <span role="img" aria-label="yogi man logo">{siteTitle}</span>️
        </Link>
      </h1>

      <nav >
        <Link  to='/about'>about me</Link>
      </nav>
    </div>
  </header>
)

export default Header
