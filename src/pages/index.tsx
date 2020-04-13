import React, { FC } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {
  readonly data: {
    pages: any
  }
}

const IndexPage: FC<Props> = ({ data: { pages } }) => (
  <Layout>
    <SEO title="home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className="flex flex-col">
      {pages.nodes.map(({ frontmatter }: any) => (
        <Link key={frontmatter.path} to={frontmatter.path}>
          {frontmatter.title}
        </Link>
      ))}
    </div>
    <Link to="/about">Go to page 2</Link>
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
