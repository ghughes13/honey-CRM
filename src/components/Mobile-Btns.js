import React from "react"
import "../styles/mobile-btns.scss"

const Footer = () => (
  <div className="mobile-btns">
    <a href="#" className="btn blue">
      <span class="btn__mask"></span>
      <span class="btn__text">Log In</span>
    </a>
    <a href="#" className="btn pink">
      <span class="btn__mask"></span>
      <span class="btn__text">Create Free Account</span>
    </a>
  </div>
)

export default Footer
