import React from "react"

class FeatureCard extends React.Component {
  showSettings(event) {
    event.preventDefault()
  }

  render() {
    return (
      <div
        className={"feat-card " + (this.props.class ? this.props.class : "")}
      >
        <h4>{this.props.title}</h4>
        <p>{this.props.body}</p>
        <img src={this.props.src} alt={"Feature - " + this.props.title} />
      </div>
    )
  }
}

export default FeatureCard
