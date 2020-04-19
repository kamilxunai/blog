import React, { FC } from "react"
import { graphql } from "gatsby"
import { Frontmatter } from "./post.interface"
import BlogIndex from "../components/blog-index/blog-index"
import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {
  data: {
    pages: {
      nodes: Frontmatter[]
    }
  }
}

const BlogIndexTemplate: FC<Props> = ({ data }, ...rest) => {
  console.log({ data })
  console.log({ rest })
  console.log(data)
  return (
    <Layout>
      <SEO title="home" />

      <BlogIndex pages={data.pages} />
    </Layout>
  )
}

export const query = graphql`
  query dupa($skip: Int = 0, $limit: Int = 0) {
    pages: allMdx(
      skip: $skip
      limit: $limit
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      totalCount
      pageInfo {
        perPage
      }
      nodes {
        body
        frontmatter {
          title
          path
        }
        id
      }
    }
  }
`

export default BlogIndexTemplate
