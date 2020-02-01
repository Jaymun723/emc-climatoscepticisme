import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "./Layout"
import { styled } from "linaria/react"
import { CategorieTitle } from "./ArticleList"

export const MarkdownWrapper = styled.div`
  font-size: 20px;
  padding: 5px;
  line-height: 1.5;
  p {
    margin: 5px 0px;
  }
`

interface Data {
  markdownRemark: {
    id: string
    html: string
    frontmatter: { title: string }
  }
}
export default (props: { data: Data }) => {
  return (
    <Layout title={props.data.markdownRemark.frontmatter.title}>
      <CategorieTitle>{props.data.markdownRemark.frontmatter.title}</CategorieTitle>
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
      }
    }
  }
`
