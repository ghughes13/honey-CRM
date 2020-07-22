import React, { useEffect } from "react"
import Layout from "../components/layout"
import Image from "../components/ParallaxImageHandler"
import SEO from "../components/seo"
import NewBlob from "../components/AnimatedBlob"
import { Container, Row, Col } from "react-bootstrap"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import FeatureCard from "../components/FeatureCard"
import WistiaPopoverVideo from "../components/WistiaPopoverVideo.js"
import { Waypoint } from "react-waypoint"
import "../styles/page-home.scss"

const IndexPage = () => {
  useEffect(() => {
    document.querySelector(".stats-view-box").classList.add("animate")
  })

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
              <a href="/demo" className="btn pink">
                <span className="btn__mask"></span>
                <span className="btn__text">Try Honey for Free</span>
              </a>
              <WistiaPopoverVideo id={"8bmv5xntgu"}>
                <button className="btn blue margin-left-25">
                  <span className="btn__mask"></span>
                  <span className="btn__text arrow-btn">
                    Watch Demo
                    <img
                      src={require("../images/home/right-arrow.png")}
                      alt="right-arrow"
                    />
                  </span>
                </button>
              </WistiaPopoverVideo>
            </div>
          </Container>
          <Container className="container-2">
            <div className="mobile-stats-view">
              <img
                src={require("../images/home/stats-mobile.png")}
                alt="mobile stats"
              />
            </div>
            <div className="stats-view-box">
              <img
                className="stat-img img-1"
                src={require("../images/home/Group 7213.png")}
                alt="decorative pop up"
              />
              <img
                src={require("../images/home/Group 7084.png")}
                className="stat-img img-2"
                alt="decorative pop up"
              />
              <img
                src={require("../images/home/Group 557.png")}
                className="stat-img img-3"
                alt="decorative pop up"
              />
              <img
                src={require("../images/home/Group 7216.png")}
                className="stat-img img-4"
                alt="decorative pop up"
              />
              <img
                src={require("../images/home/Group 2460.png")}
                className="stat-img img-5"
                alt="decorative pop up"
              />
              <img
                src={require("../images/home/Group 4773.png")}
                className="stat-img img-6"
                alt="decorative pop up"
              />
              <img
                src={require("../images/home/Group 5014.png")}
                className="stat-img img-7"
                alt="decorative pop up"
              />
            </div>
          </Container>
          <Container className="pink-gradient-background container-3 ">
            <Row className="flexed-mobile">
              <Col className="max-width-500">
                <h3 className="white-text">
                  Overcome your
                  <br /> Kryptonite with Data{" "}
                </h3>
                <p className="white-text wrapLineSib">
                  If you’re an IT service provider, you know what your problem
                  is… it’s sales and marketing. If you want to fix that problem
                  you need to approach it like any other problem, identify the
                  source.
                </p>
                <p className="white-text wrapLineSib">
                  That’s why Honey’s entire foundation is built on visibility.
                  With Honey you will finally have complete visibility over your
                  sales and marketing team, making the source of the problem
                  clear.
                </p>
              </Col>{" "}
              <Waypoint
                onEnter={() => {
                  document
                    .querySelector(".phone-img-col")
                    .classList.add("animate")
                }}
              />
              <Col className="phone-img-col">
                {" "}
                <img
                  className="phone-img"
                  src={require("../images/home/Kryptonite Daa.png")}
                  alt="phone"
                />
              </Col>
            </Row>
            <Row className="padding-top-125px z-index-999">
              <Col className="layered-img-col two-thirds rel">
                <img
                  className="mobile-img"
                  src={require("../images/home/parallax-imgs.png")}
                  alt="mobile parallsax"
                />
                <Parallax
                  y={[-30, 150]}
                  tagOuter="div"
                  className="layer-3 layered-images"
                >
                  <Image
                    class="A-3"
                    src={require("../images/home/layer 3.png")}
                  />
                  <Image
                    class="B-3"
                    src={require("../images/home/layer 3 B.png")}
                  />
                </Parallax>
                <Parallax
                  y={[-25, 10]}
                  tagOuter="div"
                  className="layer-2 layered-images"
                >
                  <Image
                    class="A-2"
                    src={require("../images/home/layer 2.png")}
                  />
                </Parallax>
                <Parallax
                  y={[-50, 80]}
                  tagOuter="div"
                  className="later-1 layered-images"
                >
                  <Image
                    class="A-1"
                    src={require("../images/home/layer 1.png")}
                  />
                </Parallax>
              </Col>
              <Col className="one-third ">
                <h3 className="white-text ">Defeat Time with Automation </h3>
                <p className="white-text wrapLineSib">
                  Honey has the power to automate pretty much everything. From
                  sales follow up to marketing plans, data entry, and beyond,
                  Honey’s got the power to make your sales and marketing team
                  super human.
                </p>
                <p className="white-text wrapLineSib">
                  All this time it’s been about empowering your service delivery
                  team with automation. It’s our turn to make them jealous.
                </p>
              </Col>
            </Row>
            <img
              className="pink-shadow"
              src={require("../svgs/home/ping-shadow.svg")}
              alt="pink shadow"
            />
          </Container>
          <Container className="grey-swish-mid transparent-background">
            <Row>
              <h2 className="purple-text centered-text margin-bottom-100 max-width-1100 margin-auto">
                Innovative Sales & Marketing
                <br /> Features for IT Service Providers{" "}
              </h2>
            </Row>
            <Row>
              <Col>
                <Waypoint
                  onEnter={() => {
                    document
                      .querySelector(".first-card")
                      .classList.add("animate")
                  }}
                />
                <FeatureCard
                  title="Email Marketing Management"
                  body="From a simple intuitive email builder that enables you to compose beautiful emails campaigns to fully automated marketing plans and journeys. Honey helps you master email marketing."
                  src={require("../images/home/Drag and Drop.png")}
                  class="first-card reach"
                />{" "}
                <FeatureCard
                  title="Automated activity tracking"
                  body="Everybody loves Outlook, We use it all day to send emails and schedule meetings. Honey will automatically grab those activities and enter them to Honey for you."
                  src={require("../images/home/1to1.png")}
                  class="abs second-card reach"
                />
                <Waypoint
                  onEnter={() => {
                    document
                      .querySelector(".second-card")
                      .classList.add("animate")
                  }}
                />
              </Col>
              <Col>
                <Waypoint
                  onEnter={() => {
                    document
                      .querySelector(".third-card")
                      .classList.add("animate", "reach")
                  }}
                />
                <FeatureCard
                  title="Tried and Tested MSP Marketing Content"
                  body="Honey offers a large library of marketing resources that cover the full gamut of IT services. All of it is automatically branded for your company so you can go to market in minutes."
                  src={require("../images/home/Group 5761.png")}
                  class="margin-top-50 third-card reach"
                />

                <FeatureCard
                  title="Bulk sales actions"
                  body="Honey takes the grunt work out of sales follow up. Use Honey’s powerful bulk actions to follow up 1,000’s of leads in under 5 minutes. "
                  src={require("../images/home/Card View – 10.png")}
                  class="abs fourth-card reach"
                />
                <Waypoint
                  onEnter={() => {
                    document
                      .querySelector(".fourth-card")
                      .classList.add("animate", "reach")
                  }}
                />
              </Col>
            </Row>
            <Row>
              <div className="demo-videos"></div>
            </Row>
          </Container>
          <Container className="purple-gradient-background">
            <Row>
              <Waypoint
                onEnter={() => {
                  document
                    .querySelector(".circle-image-container")
                    .classList.add("animate")
                }}
              />
              <Col className="one-half circle-image-container">
                <img
                  className="mobile-img-2"
                  src={require("../images/home/cir.png")}
                  alt="mobile"
                />
                <img
                  className="main-circle"
                  src={require("../images/home/circles/Ellipse 2058.png")}
                  alt="circle"
                />
                <img
                  className="abs dash-1"
                  src={require("../images/home/circles/dashes-1.png")}
                  alt="dashed lines"
                />
                <img
                  className="abs dash-2"
                  src={require("../images/home/circles/dashes-2.png")}
                  alt="dashed lines"
                />
                <img
                  className="abs dash-3"
                  src={require("../images/home/circles/dash-3.png")}
                  alt="dashed lines"
                />
                <img
                  className="abs dash-4"
                  src={require("../images/home/circles/dash-4.png")}
                  alt="dashed lines"
                />
                <img
                  className="abs dash-5"
                  src={require("../images/home/circles/dashes-5.png")}
                  alt="dashed lines"
                />
                <img
                  className="abs group-2696"
                  src={require("../images/home/circles/Group 2696.png")}
                  alt="logo"
                />
                <img
                  className="abs group-2699"
                  src={require("../images/home/circles/Group 2699.png")}
                  alt="logo"
                />
                <img
                  className="abs group-2701"
                  src={require("../images/home/circles/Group 2701.png")}
                  alt="logo"
                />
                <img
                  className="abs group-2702"
                  src={require("../images/home/circles/Group 2702.png")}
                  alt="logo"
                />
                <img
                  className="abs group-2703"
                  src={require("../images/home/circles/Group 2703.png")}
                  alt="logo"
                />
                <img
                  className="abs group-2704"
                  src={require("../images/home/circles/Group 2704.png")}
                  alt="logo"
                />
                <img
                  className="abs group-2705"
                  src={require("../images/home/circles/Group 2705.png")}
                  alt="logo"
                />
                <img
                  className="abs group-7169"
                  src={require("../images/home/circles/Group 7169.png")}
                  alt="logo"
                />
                <img
                  className="abs path-3885"
                  src={require("../images/home/circles/Path 3885.png")}
                  alt="logo"
                />
                <img
                  className="abs path-3886"
                  src={require("../images/home/circles/Path 3886.png")}
                  alt="logo"
                />
                <img
                  className="abs rect-2837"
                  src={require("../images/home/circles/Rectangle 2837.png")}
                  alt="logo"
                />
                <img
                  className="abs rect-2838"
                  src={require("../images/home/circles/Rectangle 2838.png")}
                  alt="logo"
                />
                <img
                  className="abs rect-2840"
                  src={require("../images/home/circles/Rectangle 2840.png")}
                  alt="logo"
                />
                <img
                  className="abs rect-3138"
                  src={require("../images/home/circles/Rectangle 3138.png")}
                  alt="logo"
                />
              </Col>
              <Col className="one-third lose-the-migration">
                {" "}
                <h3 className="white-text">
                  Lose the migration
                  <br /> anxiety{" "}
                </h3>
                <p className="white-text wrapLineSib">
                  Instead of outright replacing what you currently use, our
                  integrations let your favorite apps ride shotgun in your sales
                  and marketing journey.
                </p>
                <p className="white-text wrapLineSib">
                  Keep them all or replace what you want when you want.
                </p>
              </Col>
            </Row>
            <div className="logos-container deep-purple-background centered-text">
              <h3 className="white-text max-width-700 margin-auto">
                Simplify Marketing Relationships
                <br /> with Platform Unity
              </h3>
              <p className="white-text max-width-650 margin-auto margin-bottom-50 inline-block wrapLineSib">
                Honey takes the complexity out of your vendor marketing
                relationships by creating a single platform that benefits both
                vendors and partners.
              </p>
              <div className="logo-images">
                <Waypoint
                  onEnter={() => {
                    document
                      .querySelector(".logo-images")
                      .classList.add("animate")
                  }}
                />
                <div className="one-fourth first">
                  <img
                    src={require("../images/home/Group 11.png")}
                    alt="logo"
                  />
                </div>
                <div className="one-fourth second">
                  <img src={require("../images/home/path24.png")} alt="logo" />
                </div>
                <div className="one-fourth third">
                  <img
                    src={require("../images/home/757px-Apple_logo_white.png")}
                    alt="logo"
                  />
                </div>
                <div className="one-fourth fourth">
                  <img
                    src={require("../images/home/Lenovo_logo.png")}
                    alt="logo"
                  />
                </div>
                <div className="one-third seventh">
                  <img
                    src={require("../images/home/fortinet-logo-white.png")}
                    alt="logo"
                  />
                </div>
                <div className="one-third sixth">
                  <img
                    src={require("../images/home/pronto-marketing.png")}
                    alt="logo"
                  />
                </div>
                <div className="one-third fifth">
                  <img
                    src={require("../images/home/Group 5857.png")}
                    alt="logo"
                  />
                </div>
                <div className="one-third eighth">
                  <img
                    src={require("../images/home/Group 7140.png")}
                    alt="logo"
                  />
                </div>
                <div className="one-third nineth">
                  <img
                    src={require("../images/home/Group 5860.png")}
                    alt="logo"
                  />
                </div>
                <div className="one-third tenth">
                  <img
                    src={require("../images/home/compliancy group logo.png")}
                    alt="logo"
                  />
                </div>
              </div>
            </div>
            <NewBlob cls="canvas-1" fill="rgba(255,137,157, .25)" />
            <NewBlob cls="canvas-2" fill="rgba(255,137,157, .25)" />
          </Container>
        </div>
      </Layout>
    </ParallaxProvider>
  )
}

export default IndexPage
