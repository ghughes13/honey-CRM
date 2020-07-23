import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import { Waypoint } from "react-waypoint"
import "../styles/page-pricing.scss"
import PriceCard from "../components/PriceCard"
import NewBlob from "../components/AnimatedBlob"
import Loader from "../components/Loader"

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
                id="pricing-form"
                className="pink-form"
                method="POST"
                name="pricing-form"
                action="/pricing/#thanks"
                onSubmit={e => {
                  e.preventDefault()
                  const submitButton = document.getElementById("sbmt-form-btn")
                  const loader = document.querySelector(".loader")
                  const formName = document.getElementById("pricing-form")

                  loader.style.display = "block"
                  submitButton.style.display = "none"

                  fetch(formName.getAttribute("action"), {
                    method: "POST",
                    body: new FormData(document.getElementById("pricing-form")),
                  }).then(res => {
                    console.log(res.body)
                    if (res.status === 200) {
                      document.querySelector("#pricing-form").style.display =
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
                  <Loader />
                  <p id="error-msg" style={{ color: "red" }}>
                    Looks like there was a problem submitting your form. Please
                    ensure ALL form fields are filled out and try again.
                  </p>
                  <button
                    type="submit"
                    className="btn blue first"
                    id="sbmt-form-btn"
                  >
                    <span className="btn__mask"></span>
                    <span className="btn__text">Send Email</span>
                  </button>
                </div>
              </form>
              <div className="contact-thank-you reach" id="thanks">
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
