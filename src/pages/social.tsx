import * as React from "react"
import { Layout } from "../components/Layout"
import { Categories } from "../components/PageBase"
import { graphql, useStaticQuery } from "gatsby"
import { CategorieTitle, ArticleList } from "../components/ArticleList"

export default () => {
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(graphql`
    query SocialQuery {
      allMarkdownRemark(
        filter: { frontmatter: { categorie: { eq: 1 } } }
        sort: { order: ASC, fields: [frontmatter___order] }
      ) {
        nodes {
          frontmatter {
            title
            image {
              childImageSharp {
                resize(width: 500, height: 500) {
                  src
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt(pruneLength: 250)
        }
      }
    }
  `)

  return (
    <Layout title={"Social"} categorie={Categories.Social}>
      <CategorieTitle>Social</CategorieTitle>
      <ArticleList nodes={nodes} />
    </Layout>
  )
}
