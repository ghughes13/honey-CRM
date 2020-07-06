import React, { useEffect } from "react"
import "../styles/comp-wistiavideoinline.scss"

const WistiaVideoInline = ({ id, children }) => {
  useEffect(() => {
    const script1 = document.createElement("script")
    const script2 = document.createElement("script")

    script1.src = "https://fast.wistia.com/embed/medias/" + id + ".jsonp"
    script1.async = true

    script2.src = "https://fast.wistia.com/assets/external/E-v1.js"
    script2.async = true

    document.body.appendChild(script1)
    document.body.appendChild(script2)
  })

  const styles = {
    display: "inline",
    position: "relative",
  }

  return (
    <span
      className={
        "wistia_embed wistia_async_" +
        id +
        " popover=true popoverAnimateThumbnail=true popoverContent=link"
      }
      style={{ styles }}
    >
      {children}
    </span>
  )
}

export default WistiaVideoInline
