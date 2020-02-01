import * as React from "react"
import { Layout } from "../components/Layout"
import { Categories } from "../components/PageBase"
import { useStaticQuery, graphql } from "gatsby"
import { ArticleList, CategorieTitle } from "../components/ArticleList"

export default () => {
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(graphql`
    query PolitiqueQuery {
      allMarkdownRemark(filter: { frontmatter: { categorie: { eq: 2 } } }) {
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
    <Layout title={"Politique"} categorie={Categories.Politique}>
      <CategorieTitle>Politique</CategorieTitle>
      <ArticleList nodes={nodes} />
    </Layout>
  )
}
