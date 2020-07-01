import React from "react"
import "../styles/comp-dropdown.scss"

const DropdownMenu = () => {
  const changeActiveFeat = e => {
    document.querySelector(".dropdown-menu .active").classList.remove("active")

    document
      .querySelector(".dropdown-menu .active-feature")
      .classList.remove("active-feature")

    e.target.parentElement.classList.add("active")

    document
      .querySelector("." + e.target.innerText.toLowerCase() + "-features")
      .classList.add("active-feature")

    document.querySelector(".dropdown-menu").classList =
      "dropdown-menu " + e.target.innerText.toLowerCase()
  }

  return (
    <div className="dropdown-menu sales">
      <div className="options">
        <ul>
          <li className="active">
            <button onClick={e => changeActiveFeat(e)}>Sales</button>
          </li>
          <li>
            <button onClick={e => changeActiveFeat(e)}>Marketing</button>
          </li>
          <li>
            <button onClick={e => changeActiveFeat(e)}>Managers</button>
          </li>
          <li>
            <button onClick={e => changeActiveFeat(e)}>Agencies</button>
          </li>
          <li>
            <button onClick={e => changeActiveFeat(e)}>Vendors</button>
          </li>
        </ul>
      </div>
      <div className="right-side">
        <div className="sales-features option active-feature">
          <h2>Sales Features</h2>
          <p>
            Your sales process is bogged down by tedious and time-consuming
            activities that take away from your ability to convert. With Honey,
            you can break through those barriers and get the freedom you need to
            carry out sales activities that help you close.
          </p>
          <a href="/sales" className="btn blue">
            <span className="btn__mask"></span>
            <span className="btn__text">
              Learn More{" "}
              <img src={require("../svgs/nav/right-arrow.svg")} alt="arrow" />
            </span>
          </a>
        </div>
        <div className="marketing-features option">
          <h2>Marketing Features</h2>
          <p>
            Your very own IT marketing hive, complete with everything you need
            to create super sweet IT marketing. From intuitive content creation
            features to powerful automation and visibility features, honey takes
            your marketing to the next level.
          </p>
          <a href="/marketing" className="btn blue">
            <span className="btn__mask"></span>
            <span className="btn__text">
              Learn More{" "}
              <img src={require("../svgs/nav/right-arrow.svg")} alt="arrow" />
            </span>
          </a>
        </div>
        <div className="managers-features option">
          <h2>Manager Features</h2>
          <p>
            Sales and marketing management is like a game of chess. It takes
            years of detailed analysis and sound strategy. Honey provides you
            the immediate success formula and powerful features and data to
            consistently win.
          </p>
          <a href="/manager" className="btn blue">
            <span className="btn__mask"></span>
            <span className="btn__text">
              Learn More{" "}
              <img src={require("../svgs/nav/right-arrow.svg")} alt="arrow" />
            </span>
          </a>
        </div>
        <div className="agencies-features option">
          <h2>Agency Features</h2>
          <p>
            Honey gives your agency a platform to carry out truly influential
            digital marketing. With complete visibility, management, data, and
            analytics, you can become the powerhouse you were meant to be.
          </p>
          <a href="/agencies" className="btn blue">
            <span className="btn__mask"></span>
            <span className="btn__text">
              Learn More{" "}
              <img src={require("../svgs/nav/right-arrow.svg")} alt="arrow" />
            </span>
          </a>
        </div>
        <div className="vendors-features option">
          <h2>Vendor Features</h2>
          <p>
            Honey revolutionizes partner enablement by placing directly into
            your partner’s workflow. In addition to automated on-demand partner
            performance visibility, you will have the ability to share marketing
            and sales assets with them at unlimited scale.{" "}
          </p>
          <a href="/vendors" className="btn blue">
            <span className="btn__mask"></span>
            <span className="btn__text">
              Learn More{" "}
              <img src={require("../svgs/nav/right-arrow.svg")} alt="arrow" />
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default DropdownMenu
