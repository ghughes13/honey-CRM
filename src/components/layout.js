/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import MobileBtns from "./MobileBtns"

import Header from "./Header"
import Footer from "./Footer"
import "../styles/layout.scss"

const Layout = ({ navTheme = "default", children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 767) {
      setIsMobile(true)
    }
  }, [])

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} navTheme={navTheme} />
      <div>
        <main>{children}</main>
        <footer></footer>
      </div>
      {isMobile && <MobileBtns />}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
