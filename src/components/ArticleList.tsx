import * as React from "react"
import Img from "gatsby-image"
import { styled } from "linaria/react"
import { navigate } from "gatsby"

export const CategorieTitle = styled.h2`
  font-size: 4em;
  margin: 10px 0px;
`

const ArticleWrapper = styled.div`
  border: 1px solid grey;
  box-shadow: 5px 5px black;
  display: flex;
  padding: 0;
  width: 100%;
  margin: 15px 0px;
`

const ArticleImage = styled.div`
  min-width: 200px;
  background-position: center;
  background-size: cover;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  * {
    margin: 5px 0px;
  }
  p {
    font-size: 1.25em;
  }
`

const ArticleTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 2em;
`

const ReadBtn = styled.button`
  background-color: #4ced84;
  color: white;
  padding: 5px;
  border: 0;
  border-radius: 5px;
  align-self: flex-end;
  cursor: pointer;
  font-size: 1.25em;
`

export const ArticleList: React.SFC<{ nodes: any[] }> = ({ nodes }) => {
  console.log(nodes[0])
  return (
    <>
      {nodes.map((node: any) => (
        <ArticleWrapper key={node.frontmatter.title}>
          <ArticleImage
            style={{
              backgroundImage: `url(${node.frontmatter.image.childImageSharp.resize.src})`,
            }}
          ></ArticleImage>
          <TextWrapper>
            <ArticleTitle>{node.frontmatter.title}</ArticleTitle>
            <p>{node.excerpt}</p>
            <ReadBtn onClick={() => navigate(node.fields.slug)}>Lire plus...</ReadBtn>
          </TextWrapper>
        </ArticleWrapper>
      ))}
    </>
  )
}
