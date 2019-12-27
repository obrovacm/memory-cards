import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Table from "../components/table/table"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Table />
    <Link to="/page-2">Go back to page-2</Link>
  </Layout>
)

export default IndexPage
