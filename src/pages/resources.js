import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import { Waypoint } from "react-waypoint"
import "../styles/page-resources.scss"
import { graphql } from "gatsby"

const Pricing = ({ data }) => {
  const post = data.allWordpressPost.edges[1].node
  useEffect(() => {})

  console.log(post)

  return (
    <Layout>
      <SEO title="Legendary Sales - Honey CRM" />
      <div className="resources-page">
        <Container className="purple-swish container-1">
          <Waypoint
            onEnter={() => {
              document
                .querySelectorAll(".price-card")
                .forEach(card => card.classList.add("animate"))
            }}
          />
          <Row>
            <Col className="white-text">
              <h1 className="white-text">Sales & Marketing Resources </h1>
              <p className="white-text hero-subtext">
                Guides to make you better at IT
                <br /> Marketing & Sales
              </p>
            </Col>
            <Col className="centered-text">
              <img
                className="transform-scale-1x25"
                src={require("../images/resources/Group 6984.png")}
              />
            </Col>
          </Row>
        </Container>
        <Container className="purple-swish container-1">
          <Row>
            <div className="flex justify-space-between">
              <select>
                <option>All Categories</option>
              </select>
              <input type="text" placeholder="Search" />
            </div>
          </Row>
          <Row>
            <div className="flex-justify-evenly">
              <button className="category updates">Updates</button>
              <button className="category blogs">Blogs</button>
              <button className="category guides">Guides</button>
              <button className="category Videos">Videos</button>
            </div>
          </Row>
        </Container>
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

export default Pricing
