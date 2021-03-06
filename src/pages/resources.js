import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import { Waypoint } from "react-waypoint"
import "../styles/page-resources.scss"
import { graphql } from "gatsby"
import ResourceCard from "../components/ResourceCard"
import Loader from "../components/Loader"

const Resources = ({ data }) => {
  const post = data.allWordpressPost.edges
  let moreBlogs = []

  useEffect(() => {
    for (let i = 0; i < post.length - 5; i++) {
      moreBlogs.push()
    }

    document.querySelectorAll(".cat-btns a").forEach(btn =>
      btn.addEventListener("click", e => {
        document.querySelector("#search-blogs").value = ""
        let id
        if (e.path[0].tagName === "A") {
          id = e.path[0].id
        } else if (e.path[1].tagName === "A") {
          id = e.path[1].id
        } else if (e.path[2].tagName === "A") {
          id = e.path[2].id
        }
        document.querySelector(".load-more-container").style.display = "flex"
        document
          .querySelectorAll(".load-more-container .card")
          .forEach(card => {
            card.style.display = "none"
            if (card.classList.contains(id)) {
              card.style.display = "block"
            }
          })
        hideInitialBlogs()
      })
    )
  })

  const hideInitialBlogs = () => {
    document
      .querySelectorAll(".initial-blogs")
      .forEach(container => (container.style.display = "none"))
  }

  const showMoreCards = e => {
    e.preventDefault()
    document.querySelector(".load-more-container").style.display = "flex"
    document.querySelector(".load-more").style.display = "none"
  }

  const searchBlogs = () => {
    let val = document.querySelector("#search-blogs").value
    hideInitialBlogs()
    document.querySelector(".load-more-container").style.display = "flex"
    document.querySelectorAll(".load-more-container .card").forEach(card => {
      card.style.display = "none"
      if (card.children[1].innerText.includes(val)) {
        card.style.display = "block"
      }
    })
  }

  return (
    <Layout navTheme="light">
      <SEO title="Legendary Sales - Honey CRM" />
      <div className="resources-page reach">
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
              <h1 className="white-text">
                Sales & Marketing
                <br /> Resources{" "}
              </h1>
              <p className="white-text hero-subtext">
                Guides to make you better at IT
                <br /> Marketing & Sales
              </p>
            </Col>
            <Col className="centered-text">
              <img
                className="transform-scale-1x25"
                src={require("../images/resources/Group 6984.png")}
                alt="hero decorative"
              />
            </Col>
          </Row>
        </Container>
        <Container className="resource-content container-2">
          <Row className="input-els">
            <div className="flex justify-space-between flex-dir-row">
              <div className="select">
                <select>
                  <option>All Categories</option>
                </select>
              </div>
              <label className="hide-me" htmlFor="search-blogs">
                search blogs
              </label>
              <input
                type="text"
                id="search-blogs"
                name="search-blogs"
                placeholder="Search"
                onChange={() => {
                  searchBlogs()
                }}
              />
            </div>
          </Row>
          <Row>
            <div className="flex-justify-evenly flex-dir-row cat-btns">
              <button
                className="btn orange margin-left-50 category updates"
                id="updates"
              >
                <span className="btn__mask"></span>
                <span className="btn__text">
                  <img src={require("../svgs/resources/star.svg")} alt="star" />
                  Updates
                </span>
              </button>

              <button
                className="btn blue margin-left-50 category blogs"
                id="blog"
              >
                <span className="btn__mask"></span>
                <span className="btn__text">
                  <img src={require("../svgs/resources/pen.svg")} alt="pen" />
                  Blogs
                </span>
              </button>

              <button
                className="btn green margin-left-50 category guides"
                id="guides"
              >
                <span className="btn__mask"></span>
                <span className="btn__text">
                  <img
                    src={require("../svgs/resources/guides.svg")}
                    alt="guides"
                  />
                  Guides
                </span>
              </button>

              <button
                className="btn pink margin-left-50 category Videos"
                id="videos"
              >
                <span className="btn__mask"></span>
                <span className="btn__text">
                  <img
                    src={require("../svgs/resources/video.svg")}
                    alt="video"
                  />
                  Videos
                </span>
              </button>
            </div>
          </Row>
          <Row className="initial-blogs">
            <ResourceCard colLength={"two-thirds"} post={post[0]} />
            <ResourceCard colLength={"one-third"} post={post[1]} />
          </Row>
          <Row className="initial-blogs">
            <ResourceCard colLength={"one-third"} post={post[2]} />
            <ResourceCard colLength={"two-thirds"} post={post[3]} />
          </Row>
          <Row className="initial-blogs">
            <div className="card newsletter-card two-thirds">
              <h2>Join the Honey Community</h2>
              <h5 className="max-width-420 centered-text">
                Monthly company updates and marketing tips, delivered straight
                to your inbox.
              </h5>
              <form
                id="contact-form"
                className="pink-form"
                method="POST"
                name="contact-form"
                action="/resources/#thanks"
                onSubmit={e => {
                  e.preventDefault()
                  const submitButton = document.getElementById("sbmt-form-btn")
                  const loader = document.querySelector(".loader")
                  const formName = document.getElementById("contact-form")

                  loader.style.display = "block"
                  submitButton.style.display = "none"

                  fetch(formName.getAttribute("action"), {
                    method: "POST",
                    body: new FormData(document.getElementById("contact-form")),
                  }).then(res => {
                    console.log(res.body)
                    if (res.status === 200) {
                      document.querySelector("#contact-form").style.display =
                        "none"
                      document.querySelector(
                        ".contact-thank-you"
                      ).style.display = "block"
                    } else {
                      loader.style.display = "none"
                      document.getElementById("error-msg").style.display =
                        "block"
                      submitButton.style.display = "block"
                    }
                  })
                }}
                netlify="true"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="bot-field" id="bot" />

                <input
                  type="email"
                  required
                  name="email"
                  placeholder="name@email.com"
                />
                <div className="submit-btn">
                  <Loader />
                  <p id="error-msg">
                    Looks like there was a problem submitting your form. Please
                    ensure ALL form fields are filled out and try again.
                  </p>
                  <button id="sbmt-form-btn" type="submit">
                    <img
                      src={require("../svgs/resources/mail.svg")}
                      alt="mail"
                    />
                  </button>
                </div>
              </form>
              <div className="contact-thank-you reach" id="thanks">
                <h5>Thank you for contacting us. We'll be in touch shortly!</h5>
              </div>
            </div>
            <ResourceCard colLength={"one-third"} post={post[4]} />
          </Row>
          <Row id="loadMoreRow" className="initial-blogs">
            <a
              href="/custom-marketing"
              className="btn load-more pink margin-left-50"
              onClick={e => showMoreCards(e)}
            >
              <span className="btn__mask"></span>
              <span className="btn__text">Load More...</span>
            </a>
          </Row>
          <Row className="load-more-container">
            {post.map(post => {
              return (
                <ResourceCard
                  key={post.node.id}
                  colLength={"one-third"}
                  post={post}
                />
              )
            })}
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
                <a href="/join" className="btn white">
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
        }
      }
    }
  }
`

export default Resources
