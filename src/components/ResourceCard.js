import React from "react"
import "../styles/comp-reviewcard.scss"
import "../styles/comp-resource-card.scss"

const ResourceCard = ({ colLength, post }) => {
  post = post.node

  let date = new Date(post.date).toString().split(" ")
  const formatedDate = date[1] + " " + date[2] + ", " + date[3]
  const category = post.categories[0].name.split(" ").join("-")

  console.log(post)

  return (
    <div className={"card " + colLength + " " + category.toLowerCase()}>
      <div className="top-img">
        <img src={post.featured_media.localFile.url} alt="feat img thumbnail" />
      </div>
      <div className="card-text">
        <a href={"/" + post.slug}>
          <h3>{post.title}</h3>
        </a>
        <div className="date">
          <img src={require("../svgs/resources/calendar.svg")} alt="calendar" />
          <p>{formatedDate}</p>
        </div>
      </div>
    </div>
  )
}

export default ResourceCard
