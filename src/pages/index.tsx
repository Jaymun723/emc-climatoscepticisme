import * as React from "react"
import { navigate, useStaticQuery, graphql } from "gatsby"
import { Carrousel } from "../components/Carrousel"
import Helmet from "react-helmet"
import { Introduction } from "../components/Introduction"
import { Page, Wrapper, Title, NavBar, NavLink } from "../components/PageBase"
import { Layout } from "../components/Layout"

export default () => {
  // const articles = [
  //   {
  //     imageUrl: require("../media/test.jpg"),
  //     description:
  //       "Id irure excepteur ad do in tempor aliqua eiusmod. Ex do culpa culpa ut. Reprehenderit nulla aute dolore esse aliqua commodo. Proident aliqua excepteur ad quis elit. Ipsum enim anim ut non laboris consectetur duis cillum. Mollit nulla mollit minim culpa. Ipsum est tempor aute cupidatat minim sint exercitation eu.",
  //     title: "L'entrée en politique de l'écologie",
  //   },
  //   {
  //     imageUrl: require("../media/japon.jpg"),
  //     description:
  //       "Laborum consequat fugiat incididunt aliqua magna adipisicing tempor fugiat do veniam. Id tempor est voluptate deserunt amet cupidatat veniam ipsum excepteur quis minim sint eiusmod aliqua. Proident nisi laboris dolore excepteur cillum adipisicing non fugiat id. Dolore quis eiusmod ullamco fugiat sit ex dolor deserunt quis duis dolor sint duis. Laborum anim ut id dolor do reprehenderit eiusmod.",
  //     title: "Manuel est allé au Japon",
  //   },
  // ]

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
      etudes: markdownRemark(frontmatter: { slug: { eq: "etudes-scientifiques" } }) {
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
