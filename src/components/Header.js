import PropTypes from "prop-types"
import React, { useEffect } from "react"
import Burger from "./HamburgerMenu.js"
import CookieConsent from "react-cookie-consent"
import "../styles/comp-header.scss"
import DropdownMenu from "./DropdownMenu.js"
import HoneyLogoDark from "./HoneyLogoDark.js"
import HoneyLogoLight from "./HoneyLogoLight.js"
import $ from "jquery"

const Header = ({ navTheme, siteTitle, opaque, headerVersion }) => {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (!opaque) {
        if (window.scrollY === 0) {
          document.querySelector("header").classList.remove("end-transparency")
        } else {
          document.querySelector("header").classList.add("end-transparency")
        }
      }
    })

    const script = document.createElement("script")
    script.src = "/static/honey-form-integration.js"
    script.async = true
    document.body.appendChild(script)

    if (window.screen.width > 767) {
      function _createTemp(element) {
        return element.clone().css({ position: "absolute" })
      }

      function _splitHtmlWords(contents) {
        var words = []
        var splitContent
        for (var c = 0; c < contents.length; c++) {
          if (contents[c].nodeName === "BR") {
            words.push("<br>")
            continue
          }
          if (contents[c].nodeType === 3) {
            splitContent = _splitWords(
              contents[c].textContent || contents[c].toString()
            )
          } else {
            var tag = $(contents[c]).clone()
            splitContent = _splitHtmlWords(tag.contents())
            for (var t = 0; t < splitContent.length; t++) {
              tag.empty()
              splitContent[t] = tag
                .html(splitContent[t])
                .wrap("<p></p>")
                .parent()
                .html()
            }
          }
          for (var w = 0; w < splitContent.length; w++) {
            if (splitContent[w] === "") {
              continue
            }
            words.push(splitContent[w])
          }
        }
        return words
      }

      function _splitWords(text) {
        return text.split(/\s+/)
      }

      function _markupContent(tag, html, index) {
        tag = '<div class="stop">' + tag
        var $outer = $(tag)
          .find('*:not(:has("*"))')
          .html(html)
          .closest(".stop")
          .slice(-1)

        $outer.children().each(function (i, element) {
          element.style.setProperty("--line-index", index)
        })

        return $outer.html()
      }

      $.fn.splitLines = function (options) {
        var settings = {
          width: "auto",
          tag: "<div>",
          wrap: "",
          keepHtml: true,
        }
        if (options) {
          $.extend(settings, options)
        }
        var newHtml = _createTemp(this)
        var contents = this.contents()
        var text = this.text()
        this.append(newHtml)
        newHtml.text("42")
        var maxHeight = newHtml.height() + 2
        newHtml.empty()

        var tempLine = _createTemp(newHtml)
        var width = settings.width
        if (settings.width === "auto") {
          width = this[0].offsetWidth
        }
        tempLine.width(width)
        this.append(tempLine)
        var words = settings.keepHtml
          ? _splitHtmlWords(contents)
          : _splitWords(text)
        var prev
        var lineCount = 0
        for (var w = 0; w < words.length; w++) {
          var html = tempLine.html()
          tempLine.html(html + words[w] + " ")
          if (tempLine.html() === prev) {
            prev = ""
            newHtml.append(
              _markupContent(settings.tag, tempLine.html(), lineCount)
            )
            tempLine.html("")
            continue
          }
          if (tempLine.height() > maxHeight) {
            prev = tempLine.html()
            tempLine.html(html)
            newHtml.append(
              _markupContent(settings.tag, tempLine.html(), lineCount)
            )
            tempLine.html("")
            w--
            lineCount++
          }
        }
        newHtml.append(_markupContent(settings.tag, tempLine.html(), lineCount))

        this.html(newHtml.html())
      }

      $(".wrapLineSib").each(function () {
        $(this).splitLines({ tag: '<div class="container-span"><span>' })
      })

      setTimeout(function () {
        $("#section-cover .banner").addClass("reach")
      }, 500)

      let $window = $(window)
      function animScroll() {
        var windowHeight = $window.height() / 1.5
        $(".wrapLineSib, h2, h3, h4")
          .parent()
          .each(function () {
            if ($window.scrollTop() >= $(this).offset().top - windowHeight) {
              if (!$(this).hasClass("reach")) {
                $(this).addClass("reach")
              }
            }
          })
      }
      $window.scroll(function () {
        animScroll()

        $("main").addClass("scroll")
        clearTimeout($.data(this, "scrollTimer"))
        $.data(
          this,
          "scrollTimer",
          setTimeout(function () {
            $("main").removeClass("scroll")
          }, 50)
        )
      })

      animScroll()

      $("h2, h3, h4, h5").each(function () {
        let textH2 = $.trim($(this).text())
        let newText = ""
        for (let i = 0; i < textH2.length; i++) {
          if (i === 0) {
            newText += '<div class="word">'
          } else if (i === textH2.length) {
            newText += "</div>"
          }

          if (textH2[i] === " ") {
            newText += '</div><span class="space"> </span><div class="word">'
          } else {
            newText += "<span>" + textH2[i] + "</span>"
          }
        }
        $(this).html(newText)

        let i = 0
        $(this)
          .find("span")
          .each(function (index) {
            $(this)
              .css("-webkit-transition-delay", i + "s")
              .css("-moz-transition-delay", i + "s")
              .css("-ms-transition-delay", i + "s")
              .css("-o-transition-delay", i + "s")
              .css("transition-delay", i + "s")

            i += 0.025
          })
      })
    }
  })

  const honeyInt = document.createElement("script")
  const honeyVal = document.createElement("script")

  honeyInt.src = require("../scripts/honey-form-integration.js")
  honeyInt.async = true

  // honeyVal.src = require("../scripts/honey-form-validation.js")
  // honeyVal.async = true

  document.body.appendChild(honeyInt)
  // document.body.appendChild(honeyVal)

  return (
    <header className={`fixed ${opaque ? "end-transparency" : ""}`}>
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <CookieConsent
        cookieName="myAwesomeCookieName2"
        style={{ background: "#fff", justifyContent: "Center" }}
        buttonStyle={{
          color: "#fff",
          fontSize: "13px",
          background: "#ff3975",
          borderRadius: "20px",
          padding: "10px 20px",
        }}
        contentStyle={{
          color: "#4a4a4a",
          textTransform: "none",
          flex: "initial",
          fontSize: "13px",
        }}
        expires={150}
        acceptOnScroll={true}
        acceptOnScrollPercentage={10}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>

      <div className={"mainHeader navbar " + navTheme} role="navigation">
        <div href="/" className="navbar-brand">
          <a className="navbar-item" href="/">
            <HoneyLogoLight />
            <HoneyLogoDark />
          </a>
          <Burger className="burger-container" />
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="dropdown-container">
              <button className="navbar-item features">Features for</button>
              <DropdownMenu />
            </div>
            <a href="/pricing" className="navbar-item">
              Pricing
            </a>
            <a href="/resources" className="navbar-item">
              Resources
            </a>
            <a href="/reviews" className="navbar-item">
              Reviews
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a href="/marketing-warmup" className="btn blue first">
                  <span className="btn__mask"></span>
                  <span className="btn__text">Log in</span>
                </a>
                <a href="/custom-marketing" className="btn pink margin-left-50">
                  <span className="btn__mask"></span>
                  <span className="btn__text">Create Free Account</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
