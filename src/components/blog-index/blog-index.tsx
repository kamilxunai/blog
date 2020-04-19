import React, { FC } from "react"
import { Link } from "gatsby"
import { Frontmatter } from "../../templates/post.interface"

interface Props {
  pages: { nodes: Frontmatter[] }
}

const BlogIndex: FC<Props> = ({ pages }) => {
  return (
    <div>
      <div className="flex flex-col">
        {pages.nodes.map(({ frontmatter }) => (
          <Link
            className="bg-teal-300"
            key={frontmatter.path}
            to={frontmatter.path}
          >
            {frontmatter.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BlogIndex
