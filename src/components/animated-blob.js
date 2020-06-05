import React, { useEffect } from "react"
import "../styles/animated-blob.scss"

const Blob = () => {
  useEffect(() => {
    const script = document.createElement("script")

    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js"
    script.async = true

    document.body.appendChild(script)

    var radius = 8
    TweenMax.staggerFromTo(
      ".blob",
      4,
      {
        cycle: {
          attr: function (i) {
            var r = i * 90
            return {
              transform:
                "rotate(" +
                r +
                ") translate(" +
                radius +
                ",0.1) rotate(" +
                -r +
                ")",
            }
          },
        },
      },
      {
        cycle: {
          attr: function (i) {
            var r = i * 90 + 360
            return {
              transform:
                "rotate(" +
                r +
                ") translate(" +
                radius +
                ",0.1) rotate(" +
                -r +
                ")",
            }
          },
        },
        ease: Linear.easeNone,
        repeat: -1,
      }
    )
  })

  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" id="loader">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feBlend in2="goo" in="SourceGraphic" result="mix" />
        </filter>
        <linearGradient id="MyGradient">
          <stop offset="0%" stopColor="#ff899d" />
          <stop offset="100%" stopColor="#f7329c" />
        </linearGradient>
      </defs>
      <mask id="maska">
        <g class="blobs">
          <circle
            class="blob"
            cx="440"
            cy="250"
            r="30"
            transform="rotate(0) translate(0, 0) rotate(0)"
          />
          <circle
            class="blob"
            cx="500"
            cy="320"
            r="70"
            transform="rotate(0) translate(0, 0) rotate(0)"
          />
          <circle
            class="blob"
            cx="300"
            cy="390"
            r="40"
            transform="rotate(0) translate(0, 0) rotate(0)"
          />
          <circle
            class="blob"
            cx="380"
            cy="390"
            r="80"
            transform="rotate(0) translate(0, 0) rotate(0)"
          />
          <circle
            class="blob"
            cx="470"
            cy="450"
            r="20"
            transform="rotate(0) translate(0, 0) rotate(0)"
          />
        </g>
      </mask>
      <rect
        x="200"
        y="200"
        mask="url(#maska)"
        fill="url(#MyGradient)"
        width="400"
        height="400"
      />
    </svg>
  )
}

export default Blob
