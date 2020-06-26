import React from "react"
import Layout from "../components/layout"
import "../styles/blog-post.scss"
import { graphql } from "gatsby"

export default function BlogPost({ data }) {
  const post = data.allWordpressPost.edges[0].node
  console.log(data)
  let date = new Date(post.date).toString().split(" ")
  const formatedDate = date[1] + " " + date[2] + ", " + date[3]
  const category = post.categories[0].name.split(" ").join("-")

  return (
    <Layout navTheme="light">
      <div className="single-post">
        <div
          className="feat-img"
          style={{
            backgroundImage: `url(${post.featured_media.localFile.url})`,
          }}
        >
          <h1>{post.title}</h1>
        </div>
        <div className="main-content">
          <div className="socials"></div>
          <div className="meta">
            <div className="img">
              <img src={post.author.avatar_urls.wordpress_24} alt="featured" />
            </div>
            <div classname="meta-infos">
              <p>
                by <span className="name">{post.author.name}</span> -{" "}
                {formatedDate}
              </p>
              <p className={category.toLowerCase()}></p>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
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
          categories {
            name
          }
          author {
            name
            avatar_urls {
              wordpress_24
            }
          }
        }
      }
    }
  }
`
