import React, { FC } from "react"
import { graphql } from "gatsby"
import { Frontmatter } from "./post.interface"
import BlogIndex from "../components/blog-index/blog-index"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pagination from "../components/pagination/pagination.component"

interface Props {
  data: {
    pages: {
      nodes: Frontmatter[]
      totalCount: number
      pageInfo: {
        perPage: number
      }
    }
  }
  location: { pathname: string }
}

const BlogIndexTemplate: FC<Props> = ({ data, location }) => {
  const { pages } = data
  return (
    <Layout>
      <SEO title="home" />
      <BlogIndex pages={pages} />
      <Pagination
        blogPath={"/"}
        pageInfo={pages.pageInfo}
        totalCount={pages.totalCount}
        path={location.pathname}
      />
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
