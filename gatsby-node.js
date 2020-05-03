const path = require(`path`)
const { paginate } = require("gatsby-awesome-pagination")
const { createFilePath } = require(`gatsby-source-filesystem`)

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
    context: {
      blogPath: "/",
    },
  })
}

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    console.log({ value })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
