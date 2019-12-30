import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Table from "../components/table/table"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Table data={data} />
    <Link to="/page-2">Go back to page-2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    cardFaces: allFile(filter: { relativeDirectory: { eq: "deck-faces" } }) {
      edges {
        node {
          id
          name
          publicURL
          childImageSharp {
            fluid(maxWidth: 256) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
