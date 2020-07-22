import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import { Waypoint } from "react-waypoint"
import "../styles/page-agencies.scss"
import ReviewCard from "../components/ReviewCard"
import Loader from "../components/Loader"
const IndexPage = () => {
  useEffect(() => {})

  return (
    <Layout navTheme="light">
      <SEO title="Honey CRM" />
      <div className="agencies-page">
        <Container className="purple-gradient-background container-1">
          <img
            className="gear gear-1"
            src={require("../images/agencies/6s-settings.png")}
            alt="gear"
          />
          <Row>
            <Col className="centered-text">
              <h1>
                Power-up Your <br />
                IT Marketing Agency
              </h1>
              <p className="hero-subtext white-text">
                Your Complete Sales And Marketing Solution
              </p>
            </Col>
          </Row>
          <Row>
            <img
              className="gear gear-2"
              src={require("../images/agencies/6s-settings.png")}
              alt="gear"
            />
            <div className="hero-img-container">
              <img
                className="mobile-img"
                src={require("../images/agencies/mobile-hero.png")}
                alt="mobile"
              />
              <img
                className="img-1"
                src={require("../images/agencies/Group 6813.png")}
                alt=""
              />
              <img
                className="img-2"
                src={require("../images/agencies/Component 103.png")}
                alt=""
              />
              <img
                className="img-3"
                src={require("../images/agencies/Group 6457.png")}
                alt=""
              />
              <img
                className="img-4"
                src={require("../images/agencies/Group 6771.png")}
                alt=""
              />
              <img
                className="img-5"
                src={require("../images/agencies/Group 6774.png")}
                alt=""
              />
              <img
                className="img-6"
                src={require("../images/agencies/Group 6772.png")}
                alt=""
              />
              <img
                className="img-7"
                src={require("../images/agencies/Group 6773.png")}
                alt=""
              />
              <img
                className="img-8"
                src={require("../images/agencies/Group 6810.png")}
                alt=""
              />
              <img
                className="img-9"
                src={require("../svgs/agencies/color-lines.svg")}
                alt=""
              />
            </div>
          </Row>
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".hero-img-container")
                .classList.add("animate")
            }}
          />
        </Container>
        <Container className="grey-swish-background container-2 ">
          <Row className="">
            <Col className=" max-width-900 centered-text">
              <h3 className="purple-text big-h3">
                Industry-Leading Marketing At Scale
              </h3>
              <p className="wrapLineSib">
                Digital marketing can change at the drop of a hat, and the only
                way to stay on top of market shifts is with great analytics and
                expert partner management.
              </p>
              <p className="wrapLineSib">
                Honey gives your agency a platform to carry out truly
                influential digital marketing. With complete visibility,
                management, data, and analytics, you can become the powerhouse
                you were meant to be.
              </p>
            </Col>
          </Row>
          <img
            className="grey-blob"
            src={require("../svgs/agencies/grey-oval.svg")}
            alt="grey blob"
          />
        </Container>
        <Container className="container-3 ">
          <Row className="">
            <Col className="one-half centered-text rel width-55-perc">
              <img
                className="transform-scale-1x25"
                src={require("../images/agencies/Lappy.png")}
                alt="laptop"
              />
            </Col>
            <Col className="one-half max-width-480 margin-top-75-neg z-index-999">
              <h3 className="purple-text">Client Management Made Simple</h3>
              <p className="wrapLineSib">
                Honey allows you to see the complete picture of the sales and
                marketing activities for every one of your clients.
              </p>
              <p className="wrapLineSib">
                Whether the actions were carried out by your team or your
                client, even if done on another platform, you can see those
                activities within Honey at any time.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="orange-swish-background container-4 ">
          <Row className="flexed-mobile">
            <Col className="one-half max-width-480 white-text">
              <h3 className="">
                The Library Of Alexandria, But With Collateral
              </h3>
              <p className="wrapLineSib">
                Is file sharing and management a full-time time job for your
                agency?
              </p>
              <p className="wrapLineSib">
                Not anymore. Honey has an integrated collateral library that
                hosts all of your collateral. Sharing is as simple as drag and
                drop.
              </p>
            </Col>
            <Col className="one-half centered-text rel second-col width-55-perc">
              <div className="slide-in-spider">
                <img
                  className="tablet-img"
                  src={require("../images/agencies/Group 7208.png")}
                  alt="tablet"
                />
                <img
                  className="white-lines img-1"
                  src={require("../images/agencies/Group 7209.png")}
                  alt="white lines"
                />
                <img
                  className="img-2"
                  src={require("../images/agencies/Compass_Whitepaper.png")}
                  alt=""
                />
                <img
                  className="img-3"
                  src={require("../images/agencies/Computex_PPT.png")}
                  alt=""
                />
                <img
                  className="img-4"
                  src={require("../images/agencies/Easetech_Brochure.png")}
                  alt=""
                />
                <img
                  className="img-5"
                  src={require("../images/agencies/KJ_Brochure.png")}
                  alt=""
                />
                <img
                  className="img-6"
                  src={require("../images/agencies/Website_KJ.png")}
                  alt=""
                />
                <img
                  className="img-7"
                  src={require("../images/agencies/Library.png")}
                  alt=""
                />
                <img
                  className="img-8"
                  src={require("../images/agencies/Company_Brochure.png")}
                  alt=""
                />
              </div>
            </Col>
          </Row>
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".slide-in-spider")
                .classList.add("animate")
            }}
          />
        </Container>
        <Container className="container-5 ">
          <Row className="">
            <Col className="one-half centered-text rel  width-55-perc z-index-9 rel">
              <img
                className=".transform-scale-1x25"
                src={require("../images/agencies/Group 6837.png")}
                alt=""
              />
            </Col>
            <Col className="one-half max-width-480">
              <h3 className="purple-text">Everything The Light Touches</h3>
              <p className="wrapLineSib">
                Your team does their best work when they have real-time, deep
                data to work from.
              </p>
              <p className="wrapLineSib">
                Visibility is a central pillar of Honey. The core functions, as
                well as the look and feel, were created to enable intuitive
                visibility at a glance with the ability to easily dive into
                deeper, specific data.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="container-6 ">
          <Row className="flexed-mobile">
            <Col className="centered-text max-width-700">
              <h3 className="purple-text">Automate And Improve</h3>
              <p className="wrapLineSib">
                Many industries have been reaping the benefits of automation for
                some time now. We figured it was time sales and marketing could
                do the same.
              </p>
              <p className="wrapLineSib">
                Honey has multiple tools that allow you to automate for easier
                management and increased success. Whether it’s automated email
                journies, campaign A/B testing, or a marketing plan, Honey
                allows your agency to get more out of your workday.
              </p>
            </Col>
          </Row>
          <div className="full-width-images">
            <img
              className="mobile-med"
              src={require("../images/agencies/Group 6830.png")}
              alt="mobile"
            />
            <img
              className="img-1"
              src={require("../images/agencies/Group 6813.png")}
              alt=""
            />
            <img
              className="img-2 gear"
              src={require("../images/agencies/6s-grey-settings.png")}
              alt=""
            />
            <img
              className="img-3"
              src={require("../images/agencies/Group 6457.png")}
              alt=""
            />
            <img
              className="img-4 gear"
              src={require("../images/agencies/6s-grey-settings.png")}
              alt=""
            />
            <img
              className="img-5"
              src={require("../images/agencies/Group 6828.png")}
              alt=""
            />
          </div>
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".full-width-images")
                .classList.add("animate")
            }}
          />
        </Container>
        <Container className="container-7">
          <Row className="flexed-mobile">
            <Col className="one-half max-width-480 margin-top-150-neg mobile-margin-top-0">
              <h3 className="purple-text">
                Create And Activate Marketing Plans
              </h3>
              <p className="wrapLineSib">
                Wouldn’t it be amazing if those detailed marketing plans you
                created could instantly be put to use and acted on?
              </p>
              <p className="wrapLineSib">
                Marketing plans in Honey allow you to create, schedule, and
                automatically send all of your campaigns.
              </p>
            </Col>
            <Col className="one-half centered-text rel  width-55-perc z-index-9 rel">
              <img
                className=""
                src={require("../images/agencies/Group 6468.png")}
                alt=""
              />
            </Col>
          </Row>
        </Container>
        <Container className="container-8 ">
          <Row className="flexed-mobile">
            <Col className="centered-text max-width-700">
              <h3 className="purple-text">Package And Resell Your Marketing</h3>
              <p className="wrapLineSib">
                Created emails, collateral, journeys, or entire marketing plans
                that you want to sell to future clients?
              </p>
              <p className="wrapLineSib">
                Honey allows you to package up any of your past marketing so it
                can be reused for future clients. It even automatically rebrands
                with the right colors, logos and links.
              </p>
            </Col>
          </Row>
          <Row className="full-row">
            <img
              className="odd-img-1"
              src={require("../svgs/agencies/4-blocks.svg")}
              alt=""
            />
            <img
              className="odd-img-2"
              src={require("../svgs/agencies/squigles.svg")}
              alt=""
            />
          </Row>
        </Container>
        <Container className="container-9 ">
          <Row className="flexed-mobile">
            <Col className="centered-text ">
              <h3 className="purple-text">
                Agency-Wide Performance At A Glance
              </h3>
              <p className="max-width-650 margin-auto wrapLineSib">
                Want to see who your top-performing client is? It’s right there.
                What about your average open and click-through rates? That’s
                there too.
              </p>
              <p className="max-width-650 margin-auto wrapLineSib">
                There is even an overview of total leads, meetings,
                opportunities and wins to keep your team aware of the importance
                and success of the work they do.
              </p>
            </Col>
          </Row>
          <div className="second-full-width-images">
            <img
              className="mobile-img"
              src={require("../images/agencies/Group 7068.png")}
              alt=""
            />
            <img
              className="img-1"
              src={require("../images/agencies/Group 6802.png")}
              alt=""
            />
            <img
              className="img-2"
              src={require("../images/agencies/Group 6751.png")}
              alt=""
            />
            <img
              className="img-3"
              src={require("../images/agencies/Group 466.png")}
              alt=""
            />
            <img
              className="img-4"
              src={require("../images/agencies/Group 467.png")}
              alt=""
            />
            <img
              className="img-5"
              src={require("../images/agencies/Group 469.png")}
              alt=""
            />
            <img
              className="img-6"
              src={require("../images/agencies/Group 468.png")}
              alt=""
            />
          </div>
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".second-full-width-images")
                .classList.add("animate")
            }}
          />
        </Container>
        <Container className="container-10">
          <Row>
            <div className="logos-container deep-purple-background centered-text">
              <h3 className="white-text">
                Join the Channel Partner Success
                <br /> Revolution
              </h3>
              <div className="logo-images">
                <Waypoint
                  onEnter={() => {
                    document
                      .querySelector(".logo-images")
                      .classList.add("animate")
                  }}
                />
                <div className="one-third first">
                  <img
                    src={require("../images/agencies/Group 7071.png")}
                    alt=""
                  />
                </div>
                <div className="one-third second">
                  <img
                    src={require("../images/agencies/pronto-marketing.png")}
                    alt=""
                  />
                </div>
                <div className="one-third third">
                  <img
                    src={require("../images/agencies/marketopia-logo-1.png")}
                    alt=""
                  />
                </div>
                <div className="one-third sixth">
                  <img src={require("../images/agencies/spclogo.png")} alt="" />
                </div>
                <div className="one-third fifth">
                  <img
                    src={require("../images/agencies/Group 7069.png")}
                    alt=""
                  />
                </div>
                <div className="one-third fourth">
                  <img
                    src={require("../images/agencies/Group 7070.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Row>
        </Container>
        <Container className="container-11 overflow-hidden">
          <Row className="flexed-mobile stretch">
            <Col className="one-half small-width  review-row">
              <Waypoint
                onEnter={() => {
                  document
                    .querySelectorAll(".review-row .reviewcard")
                    .forEach(card => {
                      card.classList.add("slide-up")
                    })
                }}
              />
              <ReviewCard
                id="39haizsr07"
                clientCompany="Tridigital Marketing"
                clientName="Scott Mitchell"
                description="Honey is doing what all of the big dogs on the market are doing and adding more every single week. And that's just something you can't really find with those big companies."
              />
            </Col>
            <Col className="one-half centered-text rel z-index-9 small-width min-height-100">
              <form
                id="contact-form"
                className="pink-form"
                method="POST"
                name="contact-form"
                action="https://admiring-clarke-317df8.netlify.app/agencies/#thanks"
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
                    console.log(res)
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
                name="contact-us-form"
              >
                <h3 className="white-text form-title">
                  Request a Demo of Honey’s
                  <br />
                  Amazing Vendor Features.
                </h3>
                <div className="what-do-we-call-you">
                  <div className="field name-field">
                    <label htmlFor="firstName" hidden>
                      What’s your name?
                    </label>
                    <input
                      type="text"
                      className="theInput"
                      name="firstName"
                      id="firstName"
                      placeholder="Name"
                      required
                    ></input>
                  </div>
                  <div className="field email-field">
                    <label hidden htmlFor="email">
                      What’s your email address?
                    </label>
                    <input
                      type="email"
                      className="theInput"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                    ></input>
                  </div>
                  <div className="field">
                    <label className="second-label" hidden htmlFor="company">
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
                </div>

                <div className="field comment-field">
                  <label hidden className="textarea-label" htmlFor="message">
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
                  ></input>
                </div>
                <div className="submit-btn">
                  <Loader />
                  <p id="error-msg">
                    Looks like there was a problem submitting your form. Please
                    ensure ALL form fields are filled out and try again.
                  </p>
                  <button
                    id="sbmt-form-btn"
                    type="submit"
                    className="pink-button"
                  >
                    SEND
                  </button>
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

export default IndexPage
