import React from "react"
import Layout from "../components/layout"
import Image from "../components/ParallaxImageHandler"
import SEO from "../components/seo"
import { Container, Row, Col, Card } from "react-bootstrap"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import FeatureCard from "../components/Feature-Card"
import { Waypoint } from "react-waypoint"
import "../styles/home.scss"

const IndexPage = () => {
  return (
    <ParallaxProvider>
      <Layout>
        <SEO title="Honey CRM" />
        <div className="home-page">
          <Container className="grey-swish-top container-1">
            <h1>Say Hello to Honey </h1>
            <p className="hero-subtext">
              A super sweet sales & marketing app for IT service providers
            </p>
            <div className="flex justify-center hero-btns margin-top-50">
              <a href="#" className="btn pink">
                Try Honey for Free
              </a>
              <a href="#" className="btn blue margin-left-25">
                Watch Demo
              </a>
            </div>
          </Container>
          <Container className="container-2">
            <div className="stats-view-box">
              <img
                className="stat-img img-1"
                src={require("../images/home/Group 7213.png")}
              />
              <img
                src={require("../images/home/Group 7084.png")}
                className="stat-img img-2"
              />
              <img
                src={require("../images/home/Group 557.png")}
                className="stat-img img-3"
              />
              <img
                src={require("../images/home/Group 7216.png")}
                className="stat-img img-4"
              />
              <img
                src={require("../images/home/Group 2460.png")}
                className="stat-img img-5"
              />
              <img
                src={require("../images/home/Group 4773.png")}
                className="stat-img img-6"
              />
              <img
                src={require("../images/home/Group 5014.png")}
                className="stat-img img-7"
              />
            </div>
          </Container>
          <Container className="pink-gradient-background container-3">
            <Row>
              <Col className="max-width-500">
                <h3 className="white-text">
                  Overcome your
                  <br /> Kryptonite with Data{" "}
                </h3>
                <p className="white-text">
                  If you’re an IT service provider, you know what your problem
                  is… it’s sales and marketing. If you want to fix that problem
                  you need to approach it like any other problem, identify the
                  source.
                </p>
                <p className="white-text">
                  That’s why Honey’s entire foundation is built on visibility.
                  With Honey you will finally have complete visibility over your
                  sales and marketing team, making the source of the problem
                  clear.
                </p>
              </Col>
              <Col className="phone-img-col">
                <img
                  className="phone-img"
                  src={require("../images/home/Kryptonite Daa.png")}
                />
              </Col>
            </Row>
            <Row className="padding-top-125px z-index-999">
              <Col className="layered-img-col two-thirds">
                <Parallax
                  y={[-40, 20]}
                  tagOuter="div"
                  className="layer-3 layered-images"
                >
                  <Image src={require("../images/home/layer 3.png")} />
                  <Image src={require("../images/home/layer 3 B.png")} />
                </Parallax>
                <Parallax
                  y={[-50, 0]}
                  tagOuter="div"
                  className="layer-2 layered-images"
                >
                  <Image src={require("../images/home/layer 2.png")} />
                </Parallax>
                <Parallax
                  y={[-60, 40]}
                  tagOuter="div"
                  className="later-1 layered-images"
                >
                  <Image src={require("../images/home/layer 1.png")} />
                </Parallax>
              </Col>
              <Col className="one-third">
                <h3 className="white-text ">Defeat Time with Automation </h3>
                <p className="white-text">
                  Honey has the power to automate pretty much everything. From
                  sales follow up to marketing plans, data entry, and beyond,
                  Honey’s got the power to make your sales and marketing team
                  super human.
                </p>
                <p className="white-text">
                  All this time it’s been about empowering your service delivery
                  team with automation. It’s our turn to make them jealous.
                </p>
              </Col>
            </Row>
          </Container>
          <Container className="grey-swish-mid transparent-background">
            <Row>
              <h2 className="purple-text centered-text margin-bottom-100">
                Innovative Sales & Marketing
                <br /> Features for IT Service Providers{" "}
              </h2>
            </Row>
            <Row>
              <Col>
                <FeatureCard
                  title="Email Marketing Management"
                  body="From a simple intuitive email builder that enables you to compose beautiful emails campaigns to fully automated marketing plans and journeys. Honey helps you master email marketing."
                  src={require("../images/home/Drag and Drop.png")}
                />
                <FeatureCard
                  title="Automated activity tracking"
                  body="Everybody loves Outlook, We use it all day to send emails and schedule meetings. Honey will automatically grab those activities and enter them to Honey for you."
                  src={require("../images/home/1to1.png")}
                  class="abs"
                />
              </Col>
              <Col>
                <FeatureCard
                  title="Tried and Tested MSP Marketing Content"
                  body="Honey offers a large library of marketing resources that cover the full gamut of IT services. All of it is automatically branded for your company so you can go to market in minutes."
                  src={require("../images/home/Group 5761.png")}
                  class="margin-top-50"
                />
                <FeatureCard
                  title="Bulk sales actions"
                  body="Honey takes the grunt work out of sales follow up. Use Honey’s powerful bulk actions to follow up 1,000’s of leads in under 5 minutes. "
                  src={require("../images/home/Card View – 10.png")}
                  class="abs"
                />
              </Col>
            </Row>
            <Row>
              <div className="demo-videos"></div>
            </Row>
          </Container>
          <Container className="purple-gradient-background">
            <Row>
              <Col className="two-thirds circle-image-container">
                <img src={require("../images/home/Group 5863.png")} />
              </Col>
              <Col className="one-third">
                {" "}
                <h3 className="white-text">Lose the migration anxiety </h3>
                <p className="white-text">
                  Instead of outright replacing what you currently use, our
                  integrations let your favorite apps ride shotgun in your sales
                  and marketing journey.
                </p>
                <p className="white-text">
                  Keep them all or replace what you want when you want.
                </p>
              </Col>
            </Row>
            <div className="logos-container deep-purple-background centered-text">
              <h3 className="white-text">
                Simplify Marketing Relationships
                <br /> with Platform Unity
              </h3>
              <p className="white-text max-width-650 margin-auto margin-bottom-50 inline-block">
                Honey takes the complexity out of your vendor marketing
                relationships by creating a single platform that benefits both
                vendors and partners.
              </p>
              <div className="logo-images">
                <div className="one-fourth">
                  <img src={require("../images/home/Group 11.png")} />
                </div>
                <div className="one-fourth">
                  <img src={require("../images/home/path24.png")} />
                </div>
                <div className="one-fourth">
                  <img
                    src={require("../images/home/757px-Apple_logo_white.png")}
                  />
                </div>
                <div className="one-fourth">
                  <img src={require("../images/home/Lenovo_logo.png")} />
                </div>
                <div className="one-third">
                  <img
                    src={require("../images/home/fortinet-logo-white.png")}
                  />
                </div>
                <div className="one-third">
                  <img src={require("../images/home/pronto-marketing.png")} />
                </div>
                <div className="one-third">
                  <img src={require("../images/home/Group 5857.png")} />
                </div>
                <div className="one-third">
                  <img src={require("../images/home/Group 7140.png")} />
                </div>
                <div className="one-third">
                  <img src={require("../images/home/Group 5860.png")} />
                </div>
                <div className="one-third">
                  <img
                    src={require("../images/home/compliancy group logo.png")}
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Layout>
    </ParallaxProvider>
  )
}

export default IndexPage
