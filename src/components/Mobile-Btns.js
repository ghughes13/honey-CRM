import React from "react"
import "../styles/mobile-btns.scss"

const Footer = () => (
  <div className="mobile-btns">
    <a href="/login" className="btn blue">
      <span className="btn__mask"></span>
      <span className="btn__text">Log In</span>
    </a>
    <a href="/demo" className="btn pink">
      <span className="btn__mask"></span>
      <span className="btn__text">Create Free Account</span>
    </a>
  </div>
)

export default Footer
