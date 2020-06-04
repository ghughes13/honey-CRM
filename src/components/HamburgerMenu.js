import React from "react"
import { slide as Menu } from "react-burger-menu"

class Burger extends React.Component {
  showSettings(event) {
    event.preventDefault()
  }

  render() {
    return (
      <Menu right className="navbar-burger">
        <a id="home" className="menu-item" href="/about-us">
          About
        </a>
        <a id="about" className="menu-item" href="/process">
          Process
        </a>
        <a id="reviews" className="menu-item" href="/reviews">
          Reviews
        </a>
        <a id="warmup" className="menu-item" href="/marketing-warmup/">
          Marketing Warmup
        </a>
        <a id="contact" className="menu-item" href="/custom-marketing">
          Custom Marketing
        </a>
      </Menu>
    )
  }
}

export default Burger
