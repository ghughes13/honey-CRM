import React from "react"
import "../styles/comp-pricecard.scss"

const Footer = ({ title, price, contactNum }) => (
  <div className={"price-card " + title.toLowerCase()}>
    <div className="top">
      <h4 className="white-text">{title}</h4>
    </div>
    <div className="parts">
      <p className="price">
        <sup className="dollar-sign">$</sup>
        {price}
      </p>
      <span className="per-month">/month</span>
      <ul>
        <li>Unlimited Users</li>
        <li>
          <span className="bold">{contactNum}</span> Contacts
        </li>
      </ul>
      <a href="/marketing-warmup" className="btn blue first">
        <span className="btn__mask"></span>
        <span className="btn__text">Sign Up</span>
      </a>
    </div>
  </div>
)

export default Footer
