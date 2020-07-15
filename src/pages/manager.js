import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import { Waypoint } from "react-waypoint"
import "../styles/manager.scss"

const IndexPage = () => {
  useEffect(() => {})

  const animateImgs = (removeFrom, addTo) => {
    console.log(removeFrom, addTo)
    document
      .querySelectorAll("." + removeFrom + ".animate")
      .forEach(img => img.classList.remove("animate"))

    document
      .querySelectorAll("." + addTo)
      .forEach(img => img.classList.add("animate"))
  }

  return (
    <Layout navTheme="light">
      <SEO title="Your IT Marketing Hive - Honey CRM" />
      <div className="manager-page">
        <Container className="purple-blob container-1">
          <Row>
            <Col className="centered-text">
              <h1 className="white-text">
                Let The Data Outweigh
                <br className="hide-on-mobile" /> The Opinions
              </h1>
              <p className="hero-subtext white-text">
                Make sales & marketing management a numbers game
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="grey-swish-background container-2 ">
          <Row className="flexed-mobile">
            <Col className="one-half max-width-480">
              <h3>
                Big Data And Best In <br className="hide-on-mobile" /> Class
                Bench Marks{" "}
              </h3>
              <p className="wrapLineSib">
                Sales and marketing management is like a game of chess. It takes
                years of detailed analysis and sound strategies to consistently
                win.
              </p>
              <p className="wrapLineSib">
                Honey provides you the immediate success formula with analytics
                and bench marks from thousands of IT services providers around
                the world from average to best in class.
              </p>
            </Col>
            <Col className="one-half centered-text rel second-col width-55-perc">
              <img
                className=".transform-scale-1x25"
                src={require("../images/manager-page/Group 6974.png")}
                alt=""
              />
            </Col>
          </Row>
        </Container>
        <Container className="container-3">
          <Row>
            <Col className="one-half">
              <img
                className=""
                src={require("../images/manager-page/Group 7123.png")}
                alt="video placeholder"
              />
            </Col>
            <Col className="one-half second-col max-width-500 ">
              <h3>See The Forest AND The Trees</h3>
              <p className="wrapLineSib">
                Honey gives your sales and marketing teams the same quality fo
                analytics that you expect from your service delivery teams.
              </p>
              <p className="wrapLineSib">
                Data in hand, you can see the big picture of your sales and
                marketing efforts without losing track of the day-to-day.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="container-4">
          <Row className="flexed-mobile">
            <Col className="one-half max-width-500 margin-left-10-perc">
              <h3>A/B Testing To Get The Best Results</h3>
              <p className="wrapLineSib">
                Want to compare two awesome subject lines to see which performs
                better on your list? Or maybe you have two layouts you want to
                give a shot.
              </p>
              <p className="wrapLineSib">
                Honey’s automatic A/B testing will find your best performing
                version and send it out to maximize your results.
              </p>
            </Col>
            <Col className="one-half centered-text second-col ">
              <img
                className=" scale-up"
                src={require("../images/marketing/Group 6827.png")}
                alt="comparison"
              />
            </Col>
          </Row>
        </Container>
        <Container className="container-6">
          <Row>
            <Col className="centered-text max-width-650">
              <h3>Centralized Dashboard</h3>
              <p className="wrapLineSib">
                Honey’s collateral library lets you instantly publish all your
                marketing materials so you can quickly and easily attach it to
                future campaigns.
              </p>
              <p className="wrapLineSib">
                Your sales team has access to the same collateral library, so
                you can analyze valuable data points you need to assess the
                performance of each piece of collateral to consistently improve.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="stats-img centered-text">
              <span id="checkRun" className="false" />
              <Waypoint
                onEnter={() => {
                  let isRun = document.querySelector("#checkRun").classList
                    .value
                  if (isRun == "false") {
                    document
                      .querySelectorAll(".sales")
                      .forEach(img => img.classList.add("animate"))
                    document.querySelector("#checkRun").classList = "true"
                  }
                }}
              />
              <img
                className="tablet-img"
                src={require("../images/manager-page/mobile-grid.png")}
                alt="pop in tablet"
              />
              <img
                className="img-1 sales marketing-button"
                src={require("../images/manager-page/stats-imgs/Marketing.png")}
                alt="stats"
                onClick={() => animateImgs("sales", "marketing")}
              />
              <img
                className="img-2 sales"
                src={require("../images/manager-page/stats-imgs/Group 7209.png")}
                alt="stats"
              />
              <img
                className="grey-block img-3 sales marketing"
                src={require("../images/manager-page/stats-imgs/Group 7125.png")}
                alt="stats"
              />
              <img
                className="img-4 sales "
                src={require("../images/manager-page/stats-imgs/Group 466.png")}
                alt="stats"
              />
              <img
                className="img-5 sales"
                src={require("../images/manager-page/stats-imgs/Group 468.png")}
                alt="stats"
              />
              <img
                className="img-6 sales"
                src={require("../images/manager-page/stats-imgs/Group 467.png")}
                alt="stats"
              />
              <img
                className="img-7 sales"
                src={require("../images/manager-page/stats-imgs/Group 469.png")}
                alt="stats"
              />
              <img
                className="img-8 sales"
                src={require("../images/manager-page/stats-imgs/Group 557.png")}
                alt="stats"
              />
              <img
                className="img-9 sales"
                src={require("../images/manager-page/stats-imgs/Group 6649.png")}
                alt="stats"
              />
              <img
                className="img-10 sales"
                src={require("../images/manager-page/stats-imgs/Group 4088.png")}
                alt="stats"
              />
              <img
                className="img-11 sales"
                src={require("../images/manager-page/stats-imgs/Group 4085.png")}
                alt="stats"
              />
              <img
                className="img-12 sales"
                src={require("../images/manager-page/stats-imgs/Group 4083.png")}
                alt="stats"
              />
              <img
                className="img-13 sales"
                src={require("../images/manager-page/stats-imgs/Group 4086.png")}
                alt="stats"
              />
              <img
                className="img-14 sales"
                src={require("../images/manager-page/stats-imgs/Group 4087.png")}
                alt="stats"
              />
              <img
                className="img-15 sales"
                src={require("../images/manager-page/stats-imgs/Group 6667.png")}
                alt="stats"
              />
              {/* START MARKETING IMAGES */}
              <img
                className="img-16 marketing"
                src={require("../images/manager-page/marketing-imgs/Group 7203.png")}
                alt="stats"
              />
              <img
                className="img-17 marketing"
                src={require("../images/manager-page/marketing-imgs/Group 7204.png")}
                alt="stats"
                onClick={() => animateImgs("marketing", "sales")}
              />
              <img
                className="img-18 marketing"
                src={require("../images/manager-page/marketing-imgs/Group 466.png")}
                alt="stats"
              />
              <img
                className="img-19 marketing"
                src={require("../images/manager-page/marketing-imgs/Group 468.png")}
                alt="stats"
              />
              <img
                className="img-20 marketing"
                src={require("../images/manager-page/marketing-imgs/Group 467.png")}
                alt="stats"
              />
              <img
                className="img-21 marketing"
                src={require("../images/manager-page/marketing-imgs/Group 469.png")}
                alt="stats"
              />
              <img
                className="img-22 marketing"
                src={require("../images/manager-page/marketing-imgs/Group 6758.png")}
                alt="stats"
              />
              <img
                className="img-23 marketing"
                src={require("../images/manager-page/marketing-imgs/Group 6759.png")}
                alt="stats"
              />
              <img
                className="img-24 marketing"
                src={require("../images/manager-page/marketing-imgs/Group 6760.png")}
                alt="stats"
              />
              <img
                className="img-25 marketing"
                src={require("../images/manager-page/marketing-imgs/Group 6761.png")}
                alt="stats"
              />
              <img
                className="img-26 marketing"
                src={require("../images/manager-page/marketing-imgs/Group 7200.png")}
                alt="stats"
              />
              <img
                className="img-27 marketing"
                src={require("../images/manager-page/marketing-imgs/Group 7199.png")}
                alt="stats"
              />
            </Col>
          </Row>
        </Container>
        <Container className="container-7 pink-swish-section">
          <Row>
            <Col className="one-half max-width-500 margin-left-10-perc white-text">
              <h3 className="white-text">Deep campaign analytics</h3>
              <p className="wrapLineSib">
                Get a complete view of how your email campaigns perform.
              </p>
              <p className="wrapLineSib">
                Besides open and click-through rate, Honey allows you to see the
                per-prospect activity as well as when activities took place.
              </p>
            </Col>
            <Col className="one-half centered-text second-col">
              <img
                className="margin-bottom-50-neg"
                src={require("../images/manager-page/The Sceens - Perspective PSD Mockup - by Tranmautritam3.png")}
                alt="future video img"
              />
            </Col>
          </Row>
        </Container>
        <Container className="container-8">
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
                className="mobile-img"
                src={require("../images/manager-page/Group 6591.png")}
                alt="video placeholder"
              />
            </Col>
            <Col className="one-half max-width-500 second-col">
              <h3>Point-based lead qualifications</h3>
              <p className="wrapLineSib">
                We created a point system to assist you in qualifying your leads
                for sales-readiness. Each action, from email click through to
                form fill has a unique score value that is easily viewable
                within Honey.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="container-9">
          <Row className="flexed-mobile">
            <Col className="one-half max-width-500 margin-left-10-perc">
              <h3>The Perfect Hand-Off</h3>
              <p className="wrapLineSib">
                Struggling to prove that MQLs are maturing into SQLs?
              </p>
              <p className="wrapLineSib">
                Honey was developed by a bunch of sales and marketing
                professionals, so we’re familiar with the butting of heads
                between the two.
              </p>
              <p className="wrapLineSib">
                That’s why, from day one, we made sure that both sales and
                marketing would be operating from the same data, the same list,
                and the same source of truth.
              </p>
            </Col>
            <Col className="one-half centered-text second-col">
              <img
                src={require("../images/manager-page/Group 7132.png")}
                alt="video placeholder"
              />
            </Col>
          </Row>
        </Container>
        <Container className="container-10">
          <Row>
            <Col className="one-half centered-text">
              <img
                className=""
                src={require("../images/manager-page/Group 6726.png")}
                alt="video placeholder"
              />
            </Col>
            <Col className="one-half max-width-500 second-col">
              <h3>Easy-To-Read Reports</h3>
              <p className="wrapLineSib">
                Honey automatically records activities and organizes them by
                team member. With a few clicks, you can see all emails and
                follow-ups as well as the content contained within each.
              </p>
              <p className="wrapLineSib">
                You can also configure Honey to automatically export these
                reports so that you can check in at regular intervals to keep
                your team on track.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="container-11">
          <Row className="flexed-mobile">
            <Col className="one-half max-width-500 margin-left-10-perc">
              <h3>Stay On Top Of Wins And Losses</h3>
              <p className="wrapLineSib">
                With built-in win-wires and lost opportunity reporting, you can
                keep your team motivated and aligned behind your goals.
              </p>
              <p className="wrapLineSib">
                Send out win-wires or lost opportunity reports to keep your team
                on the same page and rallied around the cause.
              </p>
            </Col>
            <Col className="one-half centered-text second-col">
              <img
                src={require("../images/manager-page/Group 7134.png")}
                alt="video placeholder"
              />
            </Col>
          </Row>
        </Container>
        <Container className="container-12 grey-swish flexed-mobile flex-mobile">
          <Row>
            <Col className="centered-text max-width-650">
              <h3>Stay Ahead With Marketing Plans</h3>
              <p className="wrapLineSib">
                Planning your marketing is a fun and exciting time full of
                optimism —executing, on the other hand, can fall short of
                expectations.
              </p>
              <p className="wrapLineSib">
                With marketing plans in Honey, you can schedule all of your
                email campaigns ahead of time so they will automatically send
                when you need them to.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="calendar-img centered-text">
              <Waypoint
                onEnter={() => {
                  document
                    .querySelector(".calendar-img")
                    .classList.add("animate")
                }}
              />
              <img
                className="tablet-img"
                src={require("../images/manager-page/mobile-calendar.png")}
                alt="pop in"
              />
              <img
                className="calendar"
                src={require("../images/manager-page/Group 6712.png")}
                alt="pop in"
              />
              <img
                className="small-square"
                src={require("../images/manager-page/Group 7205.png")}
                alt="pop in"
              />
              <img
                className="large-square"
                src={require("../images/manager-page/Group 6458.png")}
                alt="pop in"
              />
              <img
                className="fan-1"
                src={require("../images/manager-page/right-card.png")}
                alt="pop in"
              />
              <img
                className="fan-2"
                src={require("../images/manager-page/mid-card.png")}
                alt="pop in"
              />
              <img
                className="fan-3"
                src={require("../images/manager-page/left-card.png")}
                alt="pop in"
              />
            </Col>
          </Row>
        </Container>
        <Container className="container-13">
          <Row className="flexed-mobile">
            <Col className="one-half max-width-500 margin-left-10-perc">
              <h3>Optimize Your Pipeline</h3>
              <p className="wrapLineSib">
                Get automated revenue projections on engagements during each
                phase of your sales cycle.
              </p>
              <p className="wrapLineSib">
                Use Honey’s automated marketing and sales features to keep
                prospects moving through the funnel more consistently.
              </p>
            </Col>
            <Col className="one-half centered-text second-col">
              <img
                src={require("../images/manager-page/The Sceens - Perspective PSD Mockup - by Tranmautritam4.png")}
                alt="video placeholder"
              />
            </Col>
          </Row>
        </Container>
        <Container className="container-14">
          <Row>
            <Col className="one-half centered-text">
              <img
                className=""
                src={require("../images/manager-page/Group 6846.png")}
                alt="video placeholder"
              />
            </Col>
            <Col className="one-half max-width-500 second-col">
              <h3>Complete brand consistency</h3>
              <p className="wrapLineSib">
                Journies within Honey allow you to send the same series of
                campaigns to any prospect who takes a certain action.
              </p>
              <p className="wrapLineSib">
                When leveraged fully, you not only ensure there is always
                correct follow up to an action, but you also establish your
                brand the same way for every one of your leads.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="container-15">
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
