import { Link } from "gatsby"
import React, { FC } from "react"

interface Props {
  siteTitle: string
}

const Header: FC<Props> = ({ siteTitle }) => (
  <header>
    <div className="container flex items-center justify-between flex-wrap bg-teal-500 mx-auto py-4 px-8">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          <span role="img" aria-label="yogi man logo">
            {siteTitle}
          </span>
          ️
        </Link>
      </h1>

      <nav>
        <Link to="/about">about me</Link>
      </nav>
    </div>
  </header>
)

export default Header
