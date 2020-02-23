import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data: { pages } }) => (
  <Layout>
    <SEO title="home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div>
      {pages.nodes.map(({ frontmatter }) => (
        <Link key={frontmatter.path} to={frontmatter.path}>
          {frontmatter.title}
        </Link>
      ))}
    </div>
    <Link to="/about/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
  query HomePageQuery {
    pages: allMdx {
      nodes {
        frontmatter {
          path
          title
        }
      }
    }
  }
`

export default IndexPage
