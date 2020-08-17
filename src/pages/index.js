import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <h1>This is from graphql: {data.site.siteMetadata.title}</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>

      <ul>
        {data.allContentfulPage.edges.map(({ node, i }) => {
          return (<li key={i}>{node.title}</li>)
        })}
      </ul>
    </Layout>
  )
}

export const query = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
  allContentfulPage {
    edges {
      node {
        id
        title
        slug
        heroCopy {
          heroCopy
        }
        heroImage {
          description
          file {
            url
          }
          fluid(maxWidth: 500) {
            base64
            src
            srcSet
            srcWebp
            srcSetWebp
          }
        }
        intro {
          intro
        }
        childContentfulPageBodyRichTextNode {
          body
          content {
            content {
              value
            }
          }
        }
        createdAt
      }
    }
  }
}
`



export default IndexPage
