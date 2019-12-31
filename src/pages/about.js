import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <p>Welcome to About page</p>
    <Link to="/">Go back to the start page</Link>
  </Layout>
)

export default About
