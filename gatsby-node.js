const path = require(`path`)
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.error(result.errors)
  }

  const posts = result.data.allMdx.edges

  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/templates/post.tsx`),
    })
  })

  paginate({
    createPage,
    items: posts,
    itemsPerPage: 3,
    pathPrefix: "/",
    component: path.resolve(`src/templates/blogIndex.tsx`),
  })
}

exports.onCreateNode = async ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = node.frontmatter.path
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
