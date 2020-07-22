import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import { Waypoint } from "react-waypoint"
import "../styles/page-vendors.scss"
import axios from "axios"

const IndexPage = () => {
  useEffect(() => {})

  return (
    <Layout navTheme="light">
      <SEO title="Honey CRM" />
      <div className="vendors-page">
        <Container className="blue-gradient-background container-1">
          <Row>
            <Col className="centered-text">
              <h1 className="max-width-1500">
                The Ultimate Through Partner Marketing Solution
              </h1>
              <p className="hero-subtext white-text">
                Partner Success & Tracking of MDF, POP, and ROI, Fully Automated
              </p>
            </Col>
          </Row>
          <Row>
            <div className="hero-img-container">
              <img
                className="mobile-img"
                src={require("../images/vendors/Group 7209.png")}
                alt="decorative img grouped mobile"
              />
              <img
                className="img-1"
                src={require("../images/agencies/Group 6813.png")}
                alt="calendar"
              />
              <img
                className="img-2"
                src={require("../images/agencies/Component 103.png")}
                alt="cards"
              />
              <img
                className="img-3"
                src={require("../images/agencies/Group 6457.png")}
                alt="flow chard"
              />
              <img
                className="img-8"
                src={require("../images/vendors/Group 6814.png")}
                alt="lines"
              />
              <img
                className="img-9"
                src={require("../svgs/agencies/color-lines.svg")}
                alt="decorative img"
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
                Honey Revolutionizes Partner Enablement
              </h3>
              <p className="wrapLineSib">
                Honey places you directly in your partners workflow environment.
                You will have the ability to share marketing and sales assets
                with them at unlimited scale.
              </p>
              <p className="wrapLineSib">
                Automated on-demand performance data and co-op features allow
                you to provide additional resources and support to maximize
                their success potential.
              </p>
            </Col>
          </Row>
          <img
            className="grey-blob"
            src={require("../svgs/agencies/grey-oval.svg")}
            alt="grey-blob"
          />
        </Container>
        <Container className="container-3 z-index-999 ">
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".slide-in-spider")
                .classList.add("animate")
            }}
          />
          <Row className="flexed-mobile">
            <Col className="one-half max-width-480">
              <h3 className="purple-text">
                Easily share your collateral with all your partners
              </h3>
              <p className="wrapLineSib">
                Honey can take all marketing collateral and fully co-brand it
                with their colors, logo, and contact information automatically.
              </p>
              <p className="wrapLineSib">
                You can even bundle it all up into a comprehensive marketing
                plan that a partner can execute in just a few clicks.
              </p>
              <p className="wrapLineSib">Heck, you can even do it for them.</p>
            </Col>

            <Col className="one-half centered-text rel second-col width-55-perc z-index-999">
              <div className="slide-in-spider">
                <img
                  className="tablet-img"
                  src={require("../images/agencies/Group 7208.png")}
                  alt="grouped tablet"
                />
                <img
                  className="white-lines img-1"
                  src={require("../images/vendors/blue-lines.png")}
                  alt="white lines"
                />
                <img
                  className="img-2"
                  src={require("../images/agencies/Compass_Whitepaper.png")}
                  alt="compass whitepaper"
                />
                <img
                  className="img-3"
                  src={require("../images/agencies/Computex_PPT.png")}
                  alt="computex"
                />
                <img
                  className="img-4"
                  src={require("../images/agencies/Easetech_Brochure.png")}
                  alt="easetech"
                />
                <img
                  className="img-5"
                  src={require("../images/agencies/KJ_Brochure.png")}
                  alt="KJ brochure"
                />
                <img
                  className="img-6"
                  src={require("../images/agencies/Website_KJ.png")}
                  alt="Website KJ"
                />
                <img
                  className="img-7"
                  src={require("../images/agencies/Library.png")}
                  alt="Library"
                />
                <img
                  className="img-8"
                  src={require("../images/agencies/Company_Brochure.png")}
                  alt="brochure"
                />
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="container-4 ">
          <Row className="">
            <Col className="one-half centered-text rel  width-55-perc z-index-9 rel">
              <img
                className="three-piece-img"
                src={require("../images/vendors/The Sceens - Perspective PSD Mockup - by Tranmautritam3.png")}
                alt="mockup"
              />
            </Col>
            <Col className="one-half max-width-480">
              <h3 className="purple-text">
                Track individual campaigns and collateral performance
              </h3>
              <p className="wrapLineSib">
                Every resource you publish in Honey that a partner uses will
                send back analytics on how well it performs.
              </p>
              <p className="wrapLineSib">
                Imagine, knowing exactly what material is most used by partners
                and most attractive to their prospects.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="container-5">
          <Row className="flexed-mobile">
            <Col className="one-half max-width-480">
              <h3 className="purple-text">
                REAL insights into partner performance and MDF ROI
              </h3>
              <p className="wrapLineSib">
                Honey’s power is in the visibility it provides you and your
                partners.
              </p>
              <p className="wrapLineSib">
                It harnesses the magic of automation, AI, and big data to
                automatically register activities throughout the sales cycle
                whether or not users are logged in.
              </p>
            </Col>
            <Col className="one-half centered-text rel  width-55-perc z-index-9 rel">
              <img
                className="real-img"
                src={require("../images/vendors/Group 6858.png")}
                alt="real img"
              />
            </Col>
          </Row>
        </Container>
        <Container className="container-6 ">
          <Row className="">
            <Col className="one-half centered-text rel  width-55-perc z-index-9 rel">
              <img
                className=" "
                src={require("../images/vendors/Group 6870.png")}
                alt="decorative img"
              />
            </Col>
            <Col className="one-half max-width-500">
              <h3 className="purple-text">
                Use The Data To Crown Your Champions.
              </h3>
              <p className="wrapLineSib">
                You know who your top partners are but do you know how and why
                they are so successful.
              </p>
              <p className="wrapLineSib">
                Honey data can reveal how each member of a top partner’s sales
                and marketing team contributes to the overall success of an
                organization.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="container-7">
          <Row className="flexed-mobile">
            <Col className="one-half max-width-480">
              <h3 className="purple-text">
                Ghost Assist Partner’s Marketing Efforts
              </h3>
              <p className="wrapLineSib">
                Through Honey, you can assist a partner with every aspect of
                their sales and marketing efforts.
              </p>
              <p className="wrapLineSib">
                You will have the ability to execute campaigns on a partner’s
                behalf and even assist in a sales engagement without
                compromising the sales rep.
              </p>
            </Col>
            <Col className="one-half centered-text rel  width-55-perc z-index-9 rel margin-bottom-75-neg">
              <img
                className=""
                src={require("../images/vendors/Mask Group 96.png")}
                alt="decorative img"
              />
            </Col>
          </Row>
        </Container>
        <Container className="container-8">
          <Row>
            <div className="logos-container deep-purple-background centered-text">
              <h3 className="white-text">
                Join the Channel Partner Success
                <br /> Revolution
              </h3>
              <Waypoint
                onEnter={() => {
                  document
                    .querySelector(".logo-images")
                    .classList.add("animate")
                }}
              />
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
                    src={require("../images/home/path24.png")}
                    alt="ingram"
                  />
                </div>
                <div className="one-third second">
                  <img
                    src={require("../images/home/757px-Apple_logo_white.png")}
                    alt="Apple"
                  />
                </div>
                <div className="one-third third">
                  <img
                    src={require("../images/home/Lenovo_logo.png")}
                    alt="Lenovo"
                  />
                </div>
                <div className="one-fourth eighth">
                  <img
                    src={require("../images/vendors/Group 7063.png")}
                    alt="Brother"
                  />
                </div>
                <div className="one-fourth seventh">
                  <img
                    src={require("../images/vendors/pngwing.com.png")}
                    alt="RSA"
                  />
                </div>
                <div className="one-fourth sixth">
                  <img
                    src={require("../images/vendors/Group 7064.png")}
                    alt="Citrix"
                  />
                </div>
                <div className="one-fourth fifth">
                  <img
                    src={require("../images/vendors/Group 5857.png")}
                    alt="Trend Micro"
                  />
                </div>
                <div className="one-third ninth">
                  <img
                    src={require("../images/vendors/Group 7062.png")}
                    alt="IBM"
                  />
                </div>
                <div className="one-third tenth">
                  <img
                    src={require("../images/vendors/fortinet-logo-white.png")}
                    alt="Fortinet"
                  />
                </div>
                <div className="one-third tenth">
                  <img
                    src={require("../images/vendors/Group 5860.png")}
                    alt="Storagecraft"
                  />
                </div>
              </div>
            </div>
          </Row>
        </Container>
        <Container className="container-9">
          <Row className="flexed-mobile stretch">
            <Col className="one-half centered-text rel z-index-9 small-width min-height-100">
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
                <h3 className="white-text form-title">
                  Request a Demo of Honey’s
                  <br />
                  Amazing Vendor Features.
                </h3>
                <div className="what-do-we-call-you">
                  <div className="field name-field">
                    <label htmlFor="firstName">
                      <input
                        type="text"
                        className="theInput"
                        name="firstName"
                        id="firstName"
                        placeholder="Name"
                        required
                      ></input>
                    </label>
                  </div>
                  <div className="field email-field">
                    <label className="hide-me" htmlFor="email">
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
                    <label className="second-label" htmlFor="company">
                      <input
                        type="text"
                        className="theInput"
                        name="company"
                        placeholder="Company"
                        id="company"
                      ></input>
                    </label>
                  </div>
                </div>

                <div className="field comment-field">
                  <label className="textarea-label" htmlFor="message">
                    <textarea
                      type="text"
                      className="theInput"
                      name="message"
                      id="message"
                      placeholder="Comments"
                    ></textarea>
                  </label>
                </div>
                <div className="hide-me field">
                  <input
                    data-form-type="Consultation"
                    className="formcat"
                  ></input>
                </div>
                <div className="submit-btn">
                  <button type="submit" className="pink-button">
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
