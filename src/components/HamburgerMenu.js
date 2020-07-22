import React from "react"
import { slide as Menu } from "react-burger-menu"
import "../styles/comp-burger-menu.scss"

class Burger extends React.Component {
  showSettings(event) {
    event.preventDefault()
  }

  render() {
    return (
      <Menu right className="navbar-burger">
        <a id="home" className="menu-item" href="/sales">
          Sales
        </a>
        <a id="home" className="menu-item" href="/marketing">
          Marketing
        </a>
        <a id="home" className="menu-item" href="/manager">
          Managers
        </a>
        <a id="home" className="menu-item" href="/agencies">
          Agencies
        </a>
        <a id="home" className="menu-item" href="/vendors">
          Vendors
        </a>
        <a id="home" className="menu-item" href="/pricing">
          Pricing
        </a>
        <a id="about" className="menu-item" href="/resources">
          Resources
        </a>
        <a id="reviews" className="menu-item" href="/reviews">
          Reviews
        </a>
        <a id="warmup" className="menu-item" href="/login">
          Log in
        </a>
        <a id="contact" className="menu-item" href="/create-account">
          Create Free Account
        </a>
      </Menu>
    )
  }
}

export default Burger
