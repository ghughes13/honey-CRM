import React from "react"
import Layout from "../components/layout"
import "../styles/blog-post.scss"
import { graphql } from "gatsby"
import ResourceCard from "../components/ResourceCard"

export default function BlogPost(qlData) {
  let blogID = qlData.pathContext.id
  let data = qlData.data
  let currentBlog

  for (let i = 0; i < data.allWordpressPost.edges.length; i++) {
    if (data.allWordpressPost.edges[i].node.id === blogID) {
      currentBlog = data.allWordpressPost.edges[i]
    }
  }

  const post = currentBlog.node
  const date = new Date(post.date).toString().split(" ")
  const formatedDate = date[1] + " " + date[2] + ", " + date[3]
  const category = post.categories[0].name.split(" ").join("-")

  const copyURL = () => {
    document.querySelector(".siteUrl").select()
    document.execCommand("copy")
  }

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
          <div className="socials">
            <a href="www.facebook.com">
              <img
                src={require("../svgs/resources/facebook.svg")}
                alt="facebook"
              />
              <img
                src={require("../svgs/resources/facebook-color.svg")}
                alt="facebook"
                className="colored"
              />
            </a>
            <a href="www.twitter.com">
              <img
                src={require("../svgs/resources/twitter.svg")}
                alt="twitter"
              />
              <img
                src={require("../svgs/resources/twitter-color.svg")}
                alt="twitter"
                className="colored"
              />
            </a>
            <a href="www.linkedin.com">
              <img
                src={require("../svgs/resources/linkedin.svg")}
                alt="linkedin"
              />
              <img
                src={require("../svgs/resources/linkedin-color.svg")}
                alt="linkedin"
                className="colored"
              />
            </a>
            <button className="copyURLBtn" onClick={copyURL}>
              <img src={require("../svgs/resources/link.svg")} alt="link" />
              <img
                src={require("../svgs/resources/link-color.svg")}
                alt="link"
                className="colored"
              />
            </button>
          </div>
          <div className="meta">
            <div className="img">
              <img src={post.author.avatar_urls.wordpress_24} alt="featured" />
            </div>
            <div className="meta-infos">
              <p>
                by <span className="name">{post.author.name}</span> -{" "}
                {formatedDate}
              </p>
              <p className={category.toLowerCase()}></p>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <h2 className="centered-text">
            But wait... there’s more! <br /> Click below to keep learning!
          </h2>
          <div className="resource-cards">
            <ResourceCard
              colLength={"two-thirds"}
              post={data.allWordpressPost.edges[0]}
            />
            <ResourceCard
              colLength={"one-third"}
              post={data.allWordpressPost.edges[1]}
            />
          </div>
        </div>
      </div>
      <input className="vis-none siteUrl" type="text" />
    </Layout>
  )
}

export const query = graphql`
  {
    allWordpressPost {
      edges {
        node {
          id
          title
          date
          excerpt
          content
          slug
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
