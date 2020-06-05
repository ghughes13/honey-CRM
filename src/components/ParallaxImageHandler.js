import React, { Component } from "react"
import { withController } from "react-scroll-parallax"

class Image extends Component {
  handleLoad = () => {
    this.props.parallaxController.update()
  }

  render() {
    return (
      <img
        src={this.props.src}
        onLoad={this.handleLoad}
        alt="Step Background"
        class={this.props.class}
      />
    )
  }
}

export default withController(Image)
