import React from "react"
import WistiaVideoInline from "./WistiaVideoInline"
import "../styles/comp-reviewcard.scss"

const ReviewCard = ({ id, clientCompany, clientName, description }) => {
  return (
    <div className="reviewcard">
      <WistiaVideoInline id={id} />
      <div className="text">
        <h4>{clientCompany}</h4>
        <h6>{clientName}</h6>
        <p>{description}</p>
        <div className="centered-text">
          <img
            src={require("../images/reviewCard/stars.png")}
            alt="feat img thumbnail"
          />
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
