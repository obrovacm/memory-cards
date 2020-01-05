import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h3>Welcome to About page</h3>
    <Link to="/">
      <h5>
        Go back to the <i>Start</i> page
      </h5>
    </Link>
  </Layout>
)

export default About
