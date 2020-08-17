/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// const { createFilePath } = require(`gatsby-source-filesystem`)
// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `ContentfulPage`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }
// exports.createPages = async ({ graphql, actions }) => {
//   // **Note:** The graphql function call returns a Promise
//   // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
//   const result = await graphql(`
//     query {
//       allContentfulPage {
//         edges {
//           node {
//             id
//             title
//             slug
//             heroCopy {
//               heroCopy
//             }
//             heroImage {
//               description
//               file {
//                 url
//               }
//               fluid(maxWidth: 500) {
//                 base64
//                 src
//                 srcSet
//                 srcWebp
//                 srcSetWebp
//               }
//             }
//             intro {
//               intro
//             }
//             childContentfulPageBodyRichTextNode {
//               body
//               content {
//                 content {
//                   value
//                 }
//               }
//             }
//             createdAt
//           }
//         }
//       }
//     }
//   `)
//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage({
//       path: node.fields.slug,
//       component: path.resolve(`./src/page-template.js`),
//       context: {
//         // Data passed to context is available
//         // in page queries as GraphQL variables.
//         slug: node.fields.slug,
//       },
//     })
//   })
// }