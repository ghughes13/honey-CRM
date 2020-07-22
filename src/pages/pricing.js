import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import { Waypoint } from "react-waypoint"
import "../styles/page-pricing.scss"
import PriceCard from "../components/PriceCard"
import axios from "axios"
import NewBlob from "../components/AnimatedBlob"

const Pricing = () => {
  useEffect(() => {})

  return (
    <Layout>
      <SEO title="Legendary Sales - Honey CRM" />
      <div className="pricing-page">
        <Container className="grey-blob container-1">
          <Waypoint
            onEnter={() => {
              document
                .querySelectorAll(".price-card")
                .forEach(card => card.classList.add("animate"))
            }}
          />
          <Row>
            <Col className="centered-text">
              <h1>Get started with Honey</h1>
              <p className="hero-subtext">
                Try it for free and then dial it to your company’s needs
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="container-2">
          <NewBlob cls="canvas-1" fill="rgba(121, 91, 255, .25)" />
          <Row>
            <PriceCard title="Lite" price="49" contactNum="500" />
            <PriceCard title="Standard" price="149" contactNum="2500" />
            <PriceCard title="Pro" price="249" contactNum="10000" />
          </Row>
          <NewBlob cls="canvas-2" fill="rgba(251, 96, 157, .25)" />
        </Container>
        <Container className="container-3">
          <Row>
            <Col className="">
              <form
                id="contact-form"
                className="pink-form"
                method="POST"
                onSubmit={e => {
                  e.preventDefault()
                  var request = `form-name=contact-us-form&firstName=${
                    document.getElementById("firstName").value
                  }&company=${document.getElementById("company").value}&email=${
                    document.getElementById("email").value
                  }&message=${document.getElementById("message").value}`
                  document.querySelector("#contact-form").style.display = "none"
                  document.querySelector(".contact-thank-you").style.display =
                    "block"
                  return axios.post(
                    "https://eloquent-hawking-0b4899.netlify.com/",
                    request
                  )
                }}
                name="contact-us-form"
              >
                <div className="form-container-for-btn">
                  <div className="top">
                    <h3 className="white-text form-title">
                      Need a Honey vendor or agency account? Email us to get
                      your custom quote!
                    </h3>
                  </div>
                  <div className="what-do-we-call-you">
                    <div className="field name-field">
                      <label htmlFor="firstName">What’s your name?</label>
                      <input
                        type="text"
                        className="theInput"
                        name="firstName"
                        id="firstName"
                        placeholder="Name"
                        required
                      ></input>
                    </div>

                    <div className="field">
                      <label className="second-label" htmlFor="company">
                        What company are you with?
                      </label>
                      <input
                        type="text"
                        className="theInput"
                        name="company"
                        placeholder="Company"
                        id="company"
                      ></input>
                    </div>
                    <div className="field email-field">
                      <label htmlFor="email">What’s your email address?</label>
                      <input
                        type="email"
                        className="theInput"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                      ></input>
                    </div>
                  </div>

                  <div className="field comment-field">
                    <label className="textarea-label" htmlFor="message">
                      What question can we answer for you?
                    </label>
                    <textarea
                      type="text"
                      className="theInput"
                      name="message"
                      id="message"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div className="hide-me field">
                    <input
                      data-form-type="Consultation"
                      className="formcat"
                      hidden
                    ></input>
                  </div>
                </div>
                <div className="submit-btn">
                  <a href="/marketing-warmup" className="btn blue first">
                    <span class="btn__mask"></span>
                    <span class="btn__text">Send Email</span>
                  </a>
                </div>
              </form>
              <div className="contact-thank-you">
                <h5>Thank you for contacting us. We'll be in touch shortly!</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default Pricing
