import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "./Layout"
import { styled } from "linaria/react"

export const MarkdownWrapper = styled.div`
  font-size: 20px;
  padding: 5px;
  line-height: 1.5;
`

interface Data {
  markdownRemark: {
    id: string
    html: string
    frontmatter: { title: string }
  }
}
export default (props: { data: Data }) => {
  console.log(props)
  return (
    <Layout title={props.data.markdownRemark.frontmatter.title}>
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
