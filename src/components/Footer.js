import React from "react"
import { Row, Col } from "react-bootstrap"
import "../styles/footer.scss"

const Footer = () => (
  <footer className="fixed" id="footer">
    <Row>
      <Col className="footer-col-1">
        <h6>Contact Us</h6>
        <ul>
          <li>
            <a
              href="https://goo.gl/maps/9KwWjzXNR7a4tNsK7"
              target="_blank"
              rel="noopener noreferrer"
            >
              101 E Park Blvd. Suite 101
            </a>
          </li>
          <li>
            <a
              href="https://goo.gl/maps/9KwWjzXNR7a4tNsK7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Plano, TX 75074
            </a>
          </li>
          <li>
            <a href="tel:2142997399" target="_blank" rel="noopener noreferrer">
              Phone: (214) 299-7399
            </a>
          </li>
          <li>
            <a
              href="mailto:info@honeycrm.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email: info@honeycrm.com
            </a>
          </li>
        </ul>
        <img
          className="certGraphic"
          src={require("../images/nav/Group 2516.png")}
          alt="google partners"
        ></img>
      </Col>
      <Col className="footer-col-2">
        <h6>About Us</h6>
        <ul>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/media">Media/Press</a>
          </li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms">Terms of Use</a>
          </li>
        </ul>
      </Col>
      <Col className="footer-col-3">
        <h6>Site Map</h6>
        <ul>
          <li>
            <a href="/">Homepage</a>
          </li>
          <li>
            <a href="/sales">Sales</a>
          </li>
          <li>
            <a href="/marketing">Marketing</a>
          </li>
          <li>
            <a href="/manager">Managers</a>
          </li>
          <li>
            <a href="/agencies">Agencies</a>
          </li>
          <li>
            <a href="/vendors">Vendors</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/login">Log In</a>
          </li>
          <li>
            <a href="/demo">Create Free Account</a>
          </li>
        </ul>
      </Col>
      <Col className="footer-col-4">
        <h6>Training</h6>
        <ul>
          <li>
            <a href="/resources">Blog</a>
          </li>
          <li>
            <a href="/resources">White Papers</a>
          </li>
          <li>
            <a href="/resources">eBooks</a>
          </li>
          <li>
            <a href="/resources">Podcasts/Videos</a>
          </li>
          <li>
            <a href="/resources">Webinars</a>
          </li>
        </ul>
      </Col>
      <Col className="footer-col-5">
        <h6>Social Links</h6>
        <ul>
          <li>
            <a
              href="https://twitter.com/tridigitalmktg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../svgs/nav/facebook.svg")}
                alt="facebook"
              ></img>
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/tridigitalmarketing/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../svgs/nav/linkedin.svg")}
                alt="linkedin"
              ></img>
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/tridigitalmarketing/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={require("../svgs/nav/IG.svg")} alt="instagram"></img>
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/user/leadmagztraining/featured"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={require("../svgs/nav/twitter.svg")} alt="twitter"></img>
              Twitter
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  </footer>
)

export default Footer
