import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


import "./index.scss"

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

      <div class="container xl:bg-red-100">test</div>

      <div class="max-w-sm mx-auto flex p-6 rounded-lg shadow-xl lg:bg-black xl:bg-red-500">
        <div class="bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-teal-500">
          derp
        </div>
        <div class="ml-6 pt-1">
          <h4 class="text-xl text-gray-900 leading-tight">ChitChat</h4>
          <p class="text-base text-gray-600 leading-normal">You have a new message!</p>
        </div>
      </div>

      <ul>
        {data.allContentfulPage.edges.map(({ node, i }) => {
          return (<li key={i}>{node.title}</li>)
        })}
      </ul>

      <div class="styleguide container">

        <h1>h1 Heading Example</h1>
        <h2>h2 Heading Example</h2>
        <h3>h3 Heading Example</h3>
        <h4>h4 Heading Example</h4>
        <h5>h5 Heading Example</h5>
        <h6>h6 Heading Example</h6>

      </div>
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
