import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import { Waypoint } from "react-waypoint"
import "../styles/page-resources.scss"
import { graphql } from "gatsby"
import ResourceCard from "../components/ResourceCard"

const Pricing = ({ data }) => {
  const post = data.allWordpressPost.edges[0].node
  useEffect(() => {})

  const handleLoadMore = e => {
    e.preventDefault()
    console.log("test")
  }

  return (
    <Layout navTheme="light">
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
        <Container className="resource-content container-2">
          <Row className="input-els">
            <div className="flex justify-space-between flex-dir-row">
              <select>
                <option>All Categories</option>
              </select>
              <input type="text" placeholder="Search" />
            </div>
          </Row>
          <Row>
            <div className="flex-justify-evenly flex-dir-row">
              <a
                href="/custom-marketing"
                className="btn orange margin-left-50 category updates"
              >
                <span class="btn__mask"></span>
                <span class="btn__text">
                  {" "}
                  <img src={require("../svgs/resources/star.svg")} />
                  Updates
                </span>
              </a>

              <a
                href="/custom-marketing"
                className="btn blue margin-left-50 category blogs"
              >
                <span class="btn__mask"></span>
                <span class="btn__text">
                  <img src={require("../svgs/resources/pen.svg")} />
                  Blogs
                </span>
              </a>

              <a
                href="/custom-marketing"
                className="btn green margin-left-50 category guides"
              >
                <span class="btn__mask"></span>
                <span class="btn__text">
                  <img src={require("../svgs/resources/guides.svg")} />
                  Guides
                </span>
              </a>

              <a
                href="/custom-marketing"
                className="btn pink margin-left-50 category Videos"
              >
                <span class="btn__mask"></span>
                <span class="btn__text">
                  <img src={require("../svgs/resources/video.svg")} />
                  Videos
                </span>
              </a>
            </div>
          </Row>
          <Row>
            <ResourceCard colLength={"two-thirds"} post={post} />
            <ResourceCard colLength={"one-third"} post={post} />
          </Row>
          <Row>
            <ResourceCard colLength={"one-third"} post={post} />
            <ResourceCard colLength={"two-thirds"} post={post} />
          </Row>
          <Row>
            <div className="card newsletter-card two-thirds">
              <h2>Join the Honey Community</h2>
              <h5 className="max-width-420 centered-text">
                Monthly company updates and marketing tips, delivered straight
                to your inbox.
              </h5>
              <form>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="name@email.com"
                />
                <button type="submit">
                  <img src={require("../svgs/resources/mail.svg")} />
                </button>
              </form>
            </div>
            <ResourceCard colLength={"one-third"} post={post} />
          </Row>
          <Row>
            <a
              href="/custom-marketing"
              className="btn load-more pink margin-left-50"
              onClick={e => handleLoadMore(e)}
            >
              <span class="btn__mask"></span>
              <span class="btn__text">Load More...</span>
            </a>
          </Row>
        </Container>
        <Container className="container-10">
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".purple-container")
                .classList.add("animate")
            }}
          />
          <Row>
            <Col className=" three-fourth purple-container">
              <div className="left-side">
                <h3 className="white-text margin-bottom-0">
                  Get a taste of Honey
                </h3>
                <h4 className="margin-bottom-0 white-text light-weight">
                  Sign up today
                </h4>
              </div>
              <div className="right-side">
                <a href="#" className="btn white">
                  Join Honey
                </a>
              </div>
            </Col>
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
          categories {
            name
          }
        }
      }
    }
  }
`

export default Pricing
