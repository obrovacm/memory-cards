/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./base.css"
import styles from "./layout.module.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <h1>{data.site.siteMetadata.title}</h1>
        {children}
      </div>
      <footer className={styles.footer}>
        © {new Date().getFullYear()}, developed by
        {` `}
        <a href="https://milos.netlify.com/">{data.site.siteMetadata.author}</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
