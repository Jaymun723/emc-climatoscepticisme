import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "./Layout"
import { styled } from "linaria/react"
import { CategorieTitle } from "./ArticleList"

export const Subtitle = styled.p`
  color: grey;
  font-style: italic;
`

export const MarkdownWrapper = styled.div`
  font-size: 20px;
  padding: 5px;
  line-height: 1.5;

  display: flex;
  flex-direction: column;

  * {
    margin: 10px 0px;
  }

  ul {
    padding: 0px 25px;
  }

  blockquote {
    padding-left: 30px;
    border-left: 5px solid #098;
  }

  twitter-widget {
    align-self: center;
  }
`

interface Data {
  markdownRemark: {
    id: string
    html: string
    frontmatter: { title: string; author: string }
  }
}
export default (props: { data: Data }) => {
  return (
    <Layout title={props.data.markdownRemark.frontmatter.title}>
      <CategorieTitle>{props.data.markdownRemark.frontmatter.title}</CategorieTitle>
      <Subtitle>Écrit par {props.data.markdownRemark.frontmatter.author}</Subtitle>
      <MarkdownWrapper dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></MarkdownWrapper>
    </Layout>
  )
}
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        author
      }
    }
  }
`
