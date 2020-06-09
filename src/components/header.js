import PropTypes from "prop-types"
import React, { useEffect } from "react"
import Burger from "./HamburgerMenu.js"
import CookieConsent from "react-cookie-consent"
import "../styles/header.scss"

const Header = ({ siteTitle, opaque, headerVersion }) => {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (!opaque) {
        if (window.scrollY === 0) {
          document.querySelector("header").classList.remove("end-transparency")
        } else {
          document.querySelector("header").classList.add("end-transparency")
        }
      }
    })
    const script = document.createElement("script")
    script.src = "/static/honey-form-integration.js"
    script.async = true
    document.body.appendChild(script)
  })

  return (
    <header className={`fixed ${opaque ? "end-transparency" : ""}`}>
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,800;1,600&display=swap"
        rel="stylesheet"
      ></link>
      <CookieConsent
        cookieName="myAwesomeCookieName2"
        style={{ background: "#fff", justifyContent: "Center" }}
        buttonStyle={{
          color: "#fff",
          fontSize: "13px",
          background: "#ff3975",
          borderRadius: "20px",
          padding: "10px 20px",
        }}
        contentStyle={{
          color: "#4a4a4a",
          textTransform: "none",
          flex: "initial",
          fontSize: "13px",
        }}
        expires={150}
        acceptOnScroll={true}
        acceptOnScrollPercentage={10}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>

      <div className="mainHeader navbar" role="navigation">
        <div href="/" className="navbar-brand">
          <a className="navbar-item" href="/">
            <img
              className="logo"
              src={require("../images/nav/HoneyLogo.png")}
              alt="Honey Logo"
            />
          </a>
          <Burger className="burger-container" />
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="/about-us/" className="navbar-item">
              Features for
            </a>
            <a href="/process" className="navbar-item">
              Pricing
            </a>
            <a href="/reviews" className="navbar-item">
              Resources
            </a>
            <a href="/reviews" className="navbar-item">
              Reviews
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a href="/marketing-warmup" className="btn blue first">
                  <span class="btn__mask"></span>
                  <span class="btn__text">Log in</span>
                </a>
                <a href="/custom-marketing" className="btn pink margin-left-50">
                  <span class="btn__mask"></span>
                  <span class="btn__text">Create Free Account</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
