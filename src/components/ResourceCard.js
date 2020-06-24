import React from "react"
import "../styles/comp-reviewcard.scss"

const ResourceCard = ({ colLength, post }) => {
  let date = new Date(post.date).toString().split(" ")
  const formatedDate = date[1] + " " + date[2] + ", " + date[3]
  const category = post.categories[0].name.split(" ").join("-")

  return (
    <div className={"card " + colLength + " " + category}>
      <div className="top-img">
        <img src={post.featured_media.localFile.url} />
      </div>
      <div className="card-text">
        <h3>{post.title}</h3>
        <div className="date">
          <img src={require("../svgs/resources/calendar.svg")} />
          <p>{formatedDate}</p>
        </div>
      </div>
    </div>
  )
}

export default ResourceCard