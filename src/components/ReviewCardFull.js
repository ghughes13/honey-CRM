import React from "react"
import "../styles/comp-reviewcard.scss"

const ReviewCard = ({ id, clientCompany, clientName, description }) => {
  return (
    <div className="reviewcard full">
      <div className="image">
        <img
          src={require("../images/reviewCard/Group 7211.png")}
          alt="company"
        />
      </div>
      <div className="text">
        <h4>{clientCompany}</h4>
        <h6>{clientName}</h6>
        <div className="">
          <img src={require("../images/reviewCard/stars.png")} alt="5 stars" />
        </div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ReviewCard
