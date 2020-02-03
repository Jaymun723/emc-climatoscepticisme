import * as React from "react"
import { Layout } from "../components/Layout"
import { Categories } from "../components/PageBase"
import { CategorieTitle, ArticleList } from "../components/ArticleList"
import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(graphql`
    query EconomieQuery {
      allMarkdownRemark(
        filter: { frontmatter: { categorie: { eq: 0 } } }
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
    <Layout title={"Economie"} categorie={Categories.Economie}>
      <CategorieTitle>Economie</CategorieTitle>
      <ArticleList nodes={nodes} />
    </Layout>
  )
}
