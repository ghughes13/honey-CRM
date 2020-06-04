import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function BlogPost({ data }) {
  const post = data.allWordpressPost.edges[0].node
  console.log(post)
  return (
    <Layout>
      <div>
        <img src={post.featured_media.localFile.url} />
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  {
    allWordpressPost {
      edges {
        node {
          title
          date
          excerpt
          content
          featured_media {
            localFile {
              url
            }
          }
        }
      }
    }
  }
`
