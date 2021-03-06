import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import { Waypoint } from "react-waypoint"
import "../styles/page-sales.scss"

const IndexPage = () => {
  useEffect(() => {})

  return (
    <Layout>
      <SEO title="Legendary Sales - Honey CRM" />
      <div className="sales-page">
        <Container className="pink-blob container-1">
          <Row>
            <Col className="mobile-only">
              <img
                src={require("../images/sales/Group 7100.png")}
                alt="mobile graphs"
              />
            </Col>
            <Col className="one-half max-width-550 z-index-999">
              <h1>Deliver a Legendary Sales Performance</h1>
              <p className="hero-subtext">With a CRM That Helps You Close</p>
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
                  src={require("../images/sales/Group 5999.png")}
                  alt="graph stats"
                />
                <img
                  className="slide-2"
                  src={require("../images/sales/Group 467.png")}
                  alt="graph stats"
                />
                <img
                  className="slide-3"
                  src={require("../images/sales/Group 4085.png")}
                  alt="graph stats"
                />
                <img
                  className="slide-4"
                  src={require("../images/sales/Group 5014.png")}
                  alt="graph stats"
                />
                <img
                  className="slide-5"
                  src={require("../images/sales/Group 466.png")}
                  alt="graph stats"
                />
                <img
                  className="slide-6"
                  src={require("../images/sales/Group 4086.png")}
                  alt="graph stats"
                />
                <img
                  className="slide-7"
                  src={require("../images/sales/Group 2495.png")}
                  alt="graph stats"
                />
                <img
                  className="slide-8"
                  src={require("../images/sales/Group 469.png")}
                  alt="graph stats"
                />
                <img
                  className="slide-9"
                  src={require("../images/sales/Group 4083.png")}
                  alt="graph stats"
                />
                <img
                  className="slide-10"
                  src={require("../images/sales/Group 5817.png")}
                  alt="graph stats"
                />
                <img
                  className="slide-11"
                  src={require("../images/sales/Group 4087.png")}
                  alt="graph stats"
                />
                <img
                  className="slide-12"
                  src={require("../images/sales/Group 468.png")}
                  alt="graph stats"
                />
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="grey-swish-background container-2 centered-text z-index-999">
          <Row>
            <Col className="max-width-900 margin-auto">
              <h3>Features To Shatter Your Quotas</h3>
              <p className="large-p-text wrapLineSib">
                Honey gives your sales team the tools they need to carry out
                effective activities without the rigamarole of data entry and
                file management. When your sales process lives in Honey, you can
                harness the full power of AI, big data, automation, and an
                integrated collateral library, without sacrificing your
                workflow.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="container-3">
          <Row className="flexed-mobile z-index-999">
            <Col className="one-half max-width-500 margin-left-10-perc ">
              <h3>
                Big Data,
                <br /> Big Improvements
              </h3>
              <p className="wrapLineSib">
                Big data, big improvements, dial-in your sales process and KPIs
                with big data automatically gathered and compiled within Honey.
              </p>
              <p className="wrapLineSib">
                Honey tracks all of your sales and marketing statistics, and
                even allows you to compare them against best-in-class performers
                in the industry.
              </p>
            </Col>
            <Waypoint
              onEnter={() => {
                document.querySelector(".area-chart").classList.add("animate")
              }}
            />
            <Col className="one-half centered-text rel second-col width-55-perc">
              <img
                className="margin-bottom-50-neg"
                src={require("../images/sales/Group 7210.png")}
                alt="stats"
              />
              <img
                className="area-chart"
                src={require("../images/sales/Group 7208.png")}
                alt="stats"
              />
            </Col>
          </Row>
        </Container>
        <Container className="container-4">
          <Row>
            <Waypoint
              onEnter={() => {
                document.querySelector("#grunt-work").play()
              }}
            />
            <Col className="one-half">
              <video
                src={require("../videos/ai-gruntwork.mp4")}
                muted
                playsInline
                className="hide-on-mobile"
                id="grunt-work"
              >
                <p className="wrapLineSib">
                  If you are reading this, it is because your browser does not
                  support the HTML5 video element.
                </p>
              </video>
              <img
                src={require("../images/sales/Group 5996.png")}
                alt="flow chart"
                className="mobile-img"
              />
            </Col>
            <Col className="one-half second-col max-width-420 ">
              <h3>
                Let AI Do The
                <br /> Grunt Work
              </h3>
              <p className="wrapLineSib">
                Finding important lead information is as simple as entering the
                information on a business card.
              </p>
              <p className="wrapLineSib">
                Honey automatically scrubs google and social media platforms to
                create a profile for every lead entered into the platform.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="container-5">
          <Row className="flexed-mobile">
            <Col className="one-half max-width-500 margin-left-10-perc">
              <h3>
                Craft The <br />
                Perfect Journey
              </h3>
              <p className="wrapLineSib">
                Doing the same campaigns over and over manually is, frankly, a
                waste of your time and effort.
              </p>
              <p className="wrapLineSib">
                That’s why in Honey you have the capability to create completely
                automated email journeys. As simple as selecting a trigger
                event, a series of campaigns and a timeline, you can send out
                effective campaigns with little to no exertion from on your end.
                That’s scalability.
              </p>
            </Col>
            <Col className="one-half centered-text second-col ">
              <img
                className="margin-bottom-125-neg scale-up"
                src={require("../images/sales/Group 7106.png")}
                alt="future video"
              />
            </Col>
          </Row>
        </Container>
        <Container className="container-6">
          <Row>
            <Waypoint
              onEnter={() => {
                document.querySelector("#leads-video").play()
              }}
            />
            <Col className="one-half centered-text">
              <video
                src={require("../videos/anim-leads.mp4")}
                muted
                playsInline
                className="hide-on-mobile"
                id="leads-video"
              >
                <p className="wrapLineSib">
                  If you are reading this, it is because your browser does not
                  support the HTML5 video element.
                </p>
              </video>

              <img
                src={require("../images/sales/Group 6591.png")}
                className="mobile-img"
                alt="leads"
              />
            </Col>
            <Col className="one-half max-width-480 second-col">
              <h3>
                Your Sales <br />
                Sidekick{" "}
              </h3>
              <p className="wrapLineSib">
                Prioritize your daily activities at a glance.
              </p>
              <p className="wrapLineSib">
                Honey allows you to organize your leads from temperature all the
                way to the last activity so you can set your priorities quickly
                and effectively.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="container-7">
          <Row className="flexed-mobile">
            <Col className="one-half max-width-500 margin-left-10-perc">
              <h3>
                A Fully-Stocked <br />
                Marketing Library
              </h3>
              <p className="wrapLineSib">
                Every Honey subscription comes with access to an ever-growing
                library of MSP content that you can instantly use in your
                marketing.
              </p>
              <p className="wrapLineSib">
                Whitepapers, eBooks, infographics and more are instantly
                accessible to your team to be easily inserted into any email.
                Each content piece has been tried-and-tested to generate the
                right leads for MSPs like yours.
              </p>
            </Col>
            <Waypoint
              onEnter={() => {
                document.querySelector("#library").play()
              }}
            />
            <Col className="one-half centered-text second-col">
              <video
                src={require("../videos/marketing-library.mp4")}
                muted
                playsInline
                className="hide-on-mobile"
                id="library"
              >
                <p className="wrapLineSib">
                  If you are reading this, it is because your browser does not
                  support the HTML5 video element.
                </p>
              </video>
              <img
                src={require("../images/sales/Group 7109.png")}
                alt="future video"
                className="mobile-img"
              />
            </Col>
          </Row>
        </Container>
        <Container className="container-8">
          <Row>
            <Col className="one-half centered-text">
              <img
                src={require("../images/sales/The Sceens - Perspective PSD Mockup - by Tranmautritam_2.png")}
                alt="future video"
              />
            </Col>
            <Col className="one-half max-width-500 second-col">
              <h3>
                Important information
                <br /> in one place
              </h3>
              <p className="wrapLineSib">
                Honey has robust and expert integrations with your existing line
                of business applications. Whether you’re using Office 365,
                Exchange, Salesforce or ConnectWise, Honey can connect to all
                that important information and bring it into one well-organized
                hub.
              </p>
              <p className="wrapLineSib">
                These activities are automatically logged and connected to the
                appropriate lead inside of Honey. From a single pane of glass,
                you can see all activities associated with any lead in your list
                -- without skipping a beat.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="container-9">
          <Row className="flexed-mobile">
            <Col className="one-half max-width-500 margin-left-10-perc">
              <h3>
                Make winners with
                <br /> outstanding visibility
              </h3>
              <p className="wrapLineSib">
                Manage your daily tasks and stay connected with the rest of your
                sales team using the intuitive visibility of Honey.
              </p>
              <p className="wrapLineSib">
                All emails from linked accounts are automatically logged, along
                with the ability to create tasks on a per-lead basis so you can
                organize your sales funnel for seamless and timely follow-ups to
                hit your conversion metrics. And when a team member gets a win,
                everyone can be notified to celebrate another victory.
              </p>
            </Col>
            <Col className="one-half centered-text second-col">
              <img
                className="margin-bottom-125-neg"
                src={require("../images/sales/Group 7112.png")}
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
