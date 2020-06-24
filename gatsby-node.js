const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // query content for WordPress posts
  const result = await graphql(`
    query {
      allWordpressPost {
        edges {
          node {
            title
            date
            excerpt
            id
            slug
            featured_media {
              localFile {
                url
              }
            }
            categories {
              name
            }
          }
        }
      }
    }
  `)

  const postTemplate = path.resolve(`./src/templates/BlogPost.js`)
  result.data.allWordpressPost.edges.forEach(edge => {
    createPage({
      path: edge.node.slug,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  const resources = path.resolve("./src/pages/resources.js")
  createPage({
    path: "/resources",
    component: slash(resources),
    context: {
      data: result,
    },
  })
}
