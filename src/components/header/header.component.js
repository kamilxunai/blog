import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from './header.module.css'

const Header = ({siteTitle}) => (
  <header
    className={style.header}
  >
    <div
      className={style.container}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <span role="img" aria-label="yogi man logo">{siteTitle}</span>️
        </Link>
      </h1>

      <nav className={style.nav}>
        <Link className={style.link} to='about'>about me</Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
