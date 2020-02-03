import * as React from "react"
import { navigate, useStaticQuery, graphql } from "gatsby"
import { Carrousel } from "../components/Carrousel"
import { Introduction } from "../components/Introduction"
import { Layout } from "../components/Layout"

export default () => {
  const {
    intro: { html: introContent },
    jeunesse,
    etudes,
    convictions,
  } = useStaticQuery(graphql`
    query IndexQuery {
      intro: markdownRemark(frontmatter: { title: { eq: "Intro" } }) {
        html
      }
      jeunesse: markdownRemark(frontmatter: { slug: { eq: "mouvement-jeunesse" } }) {
        excerpt(pruneLength: 200)
        frontmatter {
          title
          image {
            publicURL
          }
        }
        fields {
          slug
        }
      }
      etudes: markdownRemark(frontmatter: { slug: { eq: "monde-affaire" } }) {
        excerpt(pruneLength: 200)
        frontmatter {
          title
          image {
            publicURL
          }
        }
        fields {
          slug
        }
      }
      convictions: markdownRemark(frontmatter: { slug: { eq: "convictions-ecolo-politique" } }) {
        excerpt(pruneLength: 200)
        frontmatter {
          title
          image {
            publicURL
          }
        }
        fields {
          slug
        }
      }
    }
  `)

  const articles = [jeunesse, convictions, etudes].map((art) => ({
    imageUrl: art.frontmatter.image.publicURL,
    description: art.excerpt,
    title: art.frontmatter.title,
    url: art.fields.slug,
  }))

  return (
    <Layout title={"Les conséquences du climatoscepticisme"}>
      <Introduction title="Introduction" content={introContent} />
      <Carrousel articles={articles} />
    </Layout>
    // <Page>
    //   <Helmet>
    //     <style>{`
    //     * {
    //       margin: 0;
    //       padding: 0;
    //     }
    //     html {
    //       overflow-y: scroll;
    //     }
    //     `}</style>
    //   </Helmet>
    //   <Wrapper>
    //     <Title>Les conséquences du climatoscepticisme</Title>
    //     <NavBar>
    //       <NavLink>Économie</NavLink>
    //       <NavLink>Social</NavLink>
    //       <NavLink>Politique</NavLink>
    //     </NavBar>
    //     <Introduction {...intro} />
    //     <Carrousel articles={articles} />
    //   </Wrapper>
    // </Page>
  )
}
