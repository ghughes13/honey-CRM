import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import { Waypoint } from "react-waypoint"
import "../styles/page-reviews.scss"
import ReviewCard from "../components/ReviewCard"
import ReviewCardFull from "../components/ReviewCardFull"

const IndexPage = () => {
  useEffect(() => {})

  return (
    <Layout navTheme="light">
      <SEO title="Honey CRM" />
      <div className="reviews-page reach">
        <Container className="purple-swish-background container-1">
          <Row className="center">
            <Col className="centered-text">
              <h1 className="white-text">
                Testimonials From <br />
                Satisfied Clients
              </h1>
              <p className="hero-subtext white-text">
                These reviews will give you an idea of <br />
                what it's like to work with us.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="container-11">
          <Waypoint
            onEnter={() => {
              document
                .querySelectorAll(".review-row-1 .reviewcard")
                .forEach(card => {
                  card.classList.add("slide-up")
                })
            }}
          />
          <Row className="flexed-mobile stretch review-row-1">
            <Col className="one-half small-width">
              <ReviewCard
                id="39haizsr07"
                clientCompany="Tridigital Marketing"
                clientName="Scott Mitchell"
                description="Honey is doing what all of the big dogs on the market are doing and adding more every single week. And that's just something you can't really find with those big companies."
              />
            </Col>
            <Col className="one-half small-width">
              <ReviewCard
                id="39haizsr07"
                clientCompany="Tridigital Marketing"
                clientName="Scott Mitchell"
                description="Honey is doing what all of the big dogs on the market are doing and adding more every single week. And that's just something you can't really find with those big companies."
              />
            </Col>
          </Row>

          <Row className="flexed-mobile stretch review-row-2">
            <Col className="one-half small-width">
              <ReviewCard
                id="39haizsr07"
                clientCompany="Tridigital Marketing"
                clientName="Scott Mitchell"
                description="Honey is doing what all of the big dogs on the market are doing and adding more every single week. And that's just something you can't really find with those big companies."
              />
            </Col>{" "}
            <Waypoint
              onEnter={() => {
                document
                  .querySelectorAll(".review-row-2 .reviewcard")
                  .forEach(card => {
                    card.classList.add("slide-up")
                  })
              }}
            />
            <Col className="one-half small-width">
              <ReviewCard
                id="39haizsr07"
                clientCompany="Tridigital Marketing"
                clientName="Scott Mitchell"
                description="Honey is doing what all of the big dogs on the market are doing and adding more every single week. And that's just something you can't really find with those big companies."
              />
            </Col>
          </Row>

          <Row className="flexed-mobile stretch z-index-999 review-row-3">
            <Col className="one-half small-width">
              <ReviewCard
                id="39haizsr07"
                clientCompany="Tridigital Marketing"
                clientName="Scott Mitchell"
                description="Honey is doing what all of the big dogs on the market are doing and adding more every single week. And that's just something you can't really find with those big companies."
              />
            </Col>
            <Waypoint
              onEnter={() => {
                document
                  .querySelectorAll(".review-row-3 .reviewcard")
                  .forEach(card => {
                    card.classList.add("slide-up")
                  })
              }}
            />
            <Col className="one-half small-width">
              <ReviewCard
                id="39haizsr07"
                clientCompany="Tridigital Marketing"
                clientName="Scott Mitchell"
                description="Honey is doing what all of the big dogs on the market are doing and adding more every single week. And that's just something you can't really find with those big companies."
              />
            </Col>
          </Row>
        </Container>
        <Container className="pink-mid">
          <Row className="review-row-4">
            <Waypoint
              onEnter={() => {
                document
                  .querySelectorAll(".review-row-4 .reviewcard")
                  .forEach(card => {
                    card.classList.add("slide-up")
                  })
              }}
            />
            <Col className="">
              <ReviewCardFull
                id="39haizsr07"
                clientCompany="Tridigital Marketing"
                clientName="Scott Mitchell"
                description="“Our top compliment: Your understanding of Managed Services and how to create content and materials suited to what we do and who we are. There are many other compliments but that is #1.

Thank you for everything you have done for us. We are looking forward to a long relationship between Affinity IT Group and TRIdigital.”"
              />
            </Col>
          </Row>
        </Container>
        <Container className="z-index-999">
          <Row className="flexed-mobile stretch review-row-5">
            <Col className="one-half small-width">
              <ReviewCard
                id="39haizsr07"
                clientCompany="Tridigital Marketing"
                clientName="Scott Mitchell"
                description="Honey is doing what all of the big dogs on the market are doing and adding more every single week. And that's just something you can't really find with those big companies."
              />
            </Col>
            <Waypoint
              onEnter={() => {
                document
                  .querySelectorAll(".review-row-5 .reviewcard")
                  .forEach(card => {
                    card.classList.add("slide-up")
                  })
              }}
            />
            <Col className="one-half small-width">
              <ReviewCard
                id="39haizsr07"
                clientCompany="Tridigital Marketing"
                clientName="Scott Mitchell"
                description="Honey is doing what all of the big dogs on the market are doing and adding more every single week. And that's just something you can't really find with those big companies."
              />
            </Col>
          </Row>
          <Row className="flexed-mobile stretch review-row-6">
            <Col className="one-half small-width">
              <ReviewCard
                id="39haizsr07"
                clientCompany="Tridigital Marketing"
                clientName="Scott Mitchell"
                description="Honey is doing what all of the big dogs on the market are doing and adding more every single week. And that's just something you can't really find with those big companies."
              />
            </Col>
            <Waypoint
              onEnter={() => {
                document
                  .querySelectorAll(".review-row-6 .reviewcard")
                  .forEach(card => {
                    card.classList.add("slide-up")
                  })
              }}
            />
            <Col className="one-half small-width">
              <ReviewCard
                id="39haizsr07"
                clientCompany="Tridigital Marketing"
                clientName="Scott Mitchell"
                description="Honey is doing what all of the big dogs on the market are doing and adding more every single week. And that's just something you can't really find with those big companies."
              />
            </Col>
          </Row>
          <Row className="review-row-7">
            <Waypoint
              onEnter={() => {
                document
                  .querySelectorAll(".review-row-7 .reviewcard")
                  .forEach(card => {
                    card.classList.add("slide-up")
                  })
              }}
            />
            <Col className="">
              <ReviewCardFull
                id="39haizsr07"
                clientCompany="Tridigital Marketing"
                clientName="Scott Mitchell"
                description="Honey is doing what all of the big dogs on the market are doing and adding more every single week. And that's just something you can't really find with those big companies."
              />
            </Col>
          </Row>
          <Row className="flexed-mobile stretch review-row-8">
            <Col className="one-half small-width">
              <ReviewCard
                id="39haizsr07"
                clientCompany="Tridigital Marketing"
                clientName="Scott Mitchell"
                description="Honey is doing what all of the big dogs on the market are doing and adding more every single week. And that's just something you can't really find with those big companies."
              />
            </Col>
            <Waypoint
              onEnter={() => {
                document
                  .querySelectorAll(".review-row-8 .reviewcard")
                  .forEach(card => {
                    card.classList.add("slide-up")
                  })
              }}
            />
            <Col className="one-half small-width">
              <ReviewCard
                id="39haizsr07"
                clientCompany="Tridigital Marketing"
                clientName="Scott Mitchell"
                description="Honey is doing what all of the big dogs on the market are doing and adding more every single week. And that's just something you can't really find with those big companies."
              />
            </Col>
          </Row>
        </Container>
        <Container className="blue-section">
          <Row className="flexed-mobile stretch review-row-9">
            <Col className="one-half small-width">
              <ReviewCard
                id="39haizsr07"
                clientCompany="Tridigital Marketing"
                clientName="Scott Mitchell"
                description="Honey is doing what all of the big dogs on the market are doing and adding more every single week. And that's just something you can't really find with those big companies."
              />
            </Col>
            <Waypoint
              onEnter={() => {
                document
                  .querySelectorAll(".review-row-9 .reviewcard")
                  .forEach(card => {
                    card.classList.add("slide-up")
                  })
              }}
            />
            <Col className="one-half small-width">
              <ReviewCard
                id="39haizsr07"
                clientCompany="Tridigital Marketing"
                clientName="Scott Mitchell"
                description="Honey is doing what all of the big dogs on the market are doing and adding more every single week. And that's just something you can't really find with those big companies."
              />
            </Col>
          </Row>
          <Row className="flexed-mobile stretch review-row-10">
            <Col className="one-half small-width">
              <ReviewCard
                id="39haizsr07"
                clientCompany="Tridigital Marketing"
                clientName="Scott Mitchell"
                description="Honey is doing what all of the big dogs on the market are doing and adding more every single week. And that's just something you can't really find with those big companies."
              />
            </Col>
            <Waypoint
              onEnter={() => {
                document
                  .querySelectorAll(".review-row-10 .reviewcard")
                  .forEach(card => {
                    card.classList.add("slide-up")
                  })
              }}
            />
            <Col className="one-half small-width">
              <ReviewCard
                id="39haizsr07"
                clientCompany="Tridigital Marketing"
                clientName="Scott Mitchell"
                description="Honey is doing what all of the big dogs on the market are doing and adding more every single week. And that's just something you can't really find with those big companies."
              />
            </Col>
          </Row>
          <Row className="flexed-mobile stretch review-row-11">
            <Col className="one-half small-width">
              <ReviewCard
                id="39haizsr07"
                clientCompany="Tridigital Marketing"
                clientName="Scott Mitchell"
                description="Honey is doing what all of the big dogs on the market are doing and adding more every single week. And that's just something you can't really find with those big companies."
              />
            </Col>
            <Waypoint
              onEnter={() => {
                document
                  .querySelectorAll(".review-row-11 .reviewcard")
                  .forEach(card => {
                    card.classList.add("slide-up")
                  })
              }}
            />
            <Col className="one-half small-width">
              <ReviewCard
                id="39haizsr07"
                clientCompany="Tridigital Marketing"
                clientName="Scott Mitchell"
                description="Honey is doing what all of the big dogs on the market are doing and adding more every single week. And that's just something you can't really find with those big companies."
              />
            </Col>
          </Row>
        </Container>
        <Container className="purple-section">
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".purple-container")
                .classList.add("animate")
            }}
          />
          <Row className="center purple-row">
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
