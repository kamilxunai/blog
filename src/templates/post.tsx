import React, { FC } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { PostContent } from "./post.interface"

interface Props {
  data: {
    mdx: PostContent
  }
}

const Template: FC<Props> = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body } = mdx
  return (
    <div className="blog-post p-2">
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <MDXRenderer className="blog-post-content">{body}</MDXRenderer>
    </div>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
      }
    }
  }
`

export default Template
