import { Link } from "gatsby"
import React, { FC } from "react"

interface Props {
  siteTitle: string
}

const Header: FC<Props> = ({ siteTitle }) => (
  <header>
    <div className="container flex items-center justify-between flex-wrap mx-auto py-4 px-8">
      <h1 className="text-3xl">
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
        <Link className="text-gray-700 hover:text-gray-400" to="/o-mnie">
          o mnie
        </Link>
      </nav>
    </div>
  </header>
)

export default Header
