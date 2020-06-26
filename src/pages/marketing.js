import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import { Waypoint } from "react-waypoint"
import "../styles/marketing.scss"

const IndexPage = () => {
  useEffect(() => {})

  return (
    <Layout>
      <SEO title="Your IT Marketing Hive - Honey CRM" />
      <div className="marketing-page">
        <Container className="pink-blob container-1">
          <Row>
            <Col className="mobile-only">
              <img
                src={require("../images/marketing/Group 7118.png")}
                alt="mobile"
              />
            </Col>
            <Col className="one-half max-width-600">
              <h1>Your Very Own IT Marketing Hive</h1>
              <p className="hero-subtext">
                Complete with everything you need
                <br /> to create super sweet IT Marketing
              </p>
            </Col>
            <Waypoint
              onEnter={() => {
                document
                  .querySelector(".slide-in-container")
                  .classList.add("animate")
              }}
            />
            <Col className="one-half">
              <div className="slide-in-container">
                <img
                  className="slide-1"
                  src={require("../images/marketing/Group 6738.png")}
                  alt="slide in"
                />
                <img
                  className="slide-2"
                  src={require("../images/marketing/Group 6006.png")}
                  alt="slide in"
                />
                <img
                  className="slide-3"
                  src={require("../images/marketing/Group 4604.png")}
                  alt="slide in"
                />
                <img
                  className="slide-4"
                  src={require("../images/marketing/Group 4773.png")}
                  alt="slide in"
                />
                <img
                  className="slide-5"
                  src={require("../images/marketing/Group 6009.png")}
                  alt="slide in"
                />
                <img
                  className="slide-6"
                  src={require("../images/marketing/Group 2464.png")}
                  alt="slide in"
                />
                <img
                  className="slide-7"
                  src={require("../images/marketing/Group 6008.png")}
                  alt="slide in"
                />
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="grey-swish-background container-2 centered-text ">
          <Row>
            <Col className="max-width-900 margin-auto">
              <h3>Level Up Your IT Marketing</h3>
              <h5>
                You’re used to being on the front line of generating new
                revenue. You’ve probably heard more than one variation of “this
                lead isn’t an SQL.”
              </h5>
              <h5>That’s a thing of the past with Honey.</h5>
              <h5>
                With Honey, you get to see the complete picture of your
                marketing efforts. And when you hand that lead off to your sales
                team, you know its qualified.
              </h5>
            </Col>
          </Row>
        </Container>
        <Container className="container-3">
          <Row className="flexed-mobile">
            <Col className="one-half max-width-500 margin-left-10-perc ">
              <h3>Next-Generation Email Builder</h3>
              <p>
                Build completely custom and branded emails with our intuitive
                and simple-to-use email builder.
              </p>
              <p>
                Whether using one of our pre-made templates or designing it
                yourself, all emails sent through Honey are mobile-responsive.
              </p>
            </Col>

            <Col className="one-half centered-text rel second-col width-55-perc">
              <img
                className="margin-bottom-50-neg"
                src={require("../images/marketing/Group 6028.png")}
                alt="decorative"
              />
            </Col>
          </Row>
        </Container>
        <Container className="container-4">
          <Row>
            <Col className="one-half">
              <img
                className="margin-bottom-100-neg"
                src={require("../images/marketing/Group 6468.png")}
                alt="calendar and card"
              />
            </Col>
            <Col className="one-half second-col max-width-500 ">
              <h3>Comprehensive & Automated Marketing Plans</h3>
              <p>
                Plan out months or a year’s worth of marketing content through
                our marketing plan tool.
              </p>
              <p>
                Schedule the exact date, time and topic of every email you want
                to send out ahead of time. Any content you need already exists
                in the Honey collateral library, and all calls to action are
                automatically linked to the collateral piece of your choosing.
              </p>
              <p>Just pick a start date and watch the leads roll in.</p>
            </Col>
          </Row>
        </Container>
        <Container className="container-5">
          <Row className="flexed-mobile">
            <Col className="one-half max-width-500 margin-left-10-perc">
              <h3>Send The Best Email Every Time</h3>
              <p>
                Automatic A/B testing ensures you’re always sending out the
                strongest email.
              </p>
              <p>
                With Honey’s built-in A/B testing, you can test different
                subject lines or content on a portion of your list and send out
                the best performer to your full list automatically
              </p>
            </Col>
            <Col className="one-half centered-text second-col ">
              <img
                className="margin-bottom-50-neg scale-up"
                src={require("../images/marketing/Group 6827.png")}
                alt="comparison"
              />
            </Col>
          </Row>
        </Container>
        <Container className="container-6">
          <Row>
            <Col className="one-half centered-text">
              <img
                src={require("../images/marketing/Group 7119.png")}
                alt="future video"
              />
            </Col>
            <Col className="one-half max-width-480 second-col">
              <h3>Instantly Publish To Your Collateral Library</h3>
              <p>
                Honey’s collateral library lets you instantly publish all your
                marketing materials so you can quickly and easily attach it to
                future campaigns.
              </p>
              <p>
                Your sales team has access to the same collateral library, so
                you can analyze valuable data points you need to assess the
                performance of each piece of collateral to consistently improve.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="container-7">
          <Row className="flexed-mobile">
            <Col className="one-half max-width-500 margin-left-10-perc">
              <h3>
                The Data You Need In
                <br /> One Pane Of Glass
              </h3>
              <p>
                One of the core tenets of Honey is visibility. From day one,
                Honey as a platform was developed to offer comprehensive
                visibility that could be leveraged to improve sales and
                marketing efforts.
              </p>
              <p>
                That’s why we made your home dashboard a snapshot of all the
                analytics you need to assess and improve your marketing.
              </p>
            </Col>
            <Col className="one-half centered-text second-col">
              <img
                className="margin-bottom-50-neg"
                src={require("../images/marketing/Group 6472.png")}
                alt="future video"
              />
            </Col>
          </Row>
        </Container>
        <Container className="container-8">
          <Row>
            <Col className="one-half centered-text">
              <img
                className="margin-bottom-50-neg"
                src={require("../images/marketing/Group 6550.png")}
                alt="future video"
              />
            </Col>
            <Col className="one-half max-width-500 second-col">
              <h3>Pre-Made Marketing Material That’s Proven To Work</h3>
              <p>
                When you sign up for Honey, you instantly get access to a full
                library of marketing material. Whitepapers, eBooks, videos and
                more covering topics from IT budget to virtualization.
              </p>
              <p>
                With these resources, you can get to marketing quicker than on
                any other platform with specialized content that is proven to
                work.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="container-9">
          <Row className="flexed-mobile">
            <Col className="one-half max-width-500 margin-left-10-perc">
              <h3>Easily Build Your Core Marketing Pieces</h3>
              <p>
                Honey has built-in collateral, landing page and email building
                tools. You can build your own custom-branded templates so that
                every piece of marketing material you need can be easily and
                quickly branded, published and ready to use in your next
                campaign.
              </p>
              <p>
                And if you use vendor marketing materials, your vendor partners
                can share their collateral library with you so you have one
                place to go to for all of your marketing assets.
              </p>
            </Col>
            <Col className="one-half centered-text second-col">
              <img
                src={require("../images/marketing/Group 7121.png")}
                alt="future video"
              />
            </Col>
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

export default IndexPage
