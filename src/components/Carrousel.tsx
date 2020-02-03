import * as React from "react"
import { styled } from "linaria/react"
import ArrowRight from "@material-ui/icons/ChevronRight"
import { navigate } from "gatsby"

const Wrapper = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column-reverse;
  border-radius: 20px;
  position: relative;
`

const ButtonWrapper = styled.div`
  position: absolute;
  /* background-color: red; */
  top: 50%;
  margin-top: -15px;
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: whitesmoke;

  svg {
    font-size: 60px;
    cursor: pointer;
  }

  svg:first-child {
    transform: rotate(180deg);
  }
`

const Descriptor = styled.div`
  background-color: rgba(11, 11, 11, 0.5);
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 50vh;
  @media (max-width: 1140px) {
    margin-top: 30vh;
  }
  @media (max-width: 460px) {
    margin-top: 10vh;
  }
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: white;
  * {
    margin: 2px;
  }
`

const ArticleTitle = styled.h2`
  font-family: "Playfair Display", serif;
`

const ReadMoreBtn = styled.button`
  padding: 10px;
  font-size: 1.2rem;
  border: none;
  border-radius: 10px;
  background-color: #4ced84;
  cursor: pointer;
  color: white;
  align-self: flex-end;

  &:hover {
    text-decoration: underline;
  }
`

interface CarrouselProps {
  articles: { title: string; description: string; imageUrl: string; url: string }[]
}
export const Carrousel = ({ articles }: CarrouselProps) => {
  const [i, setI] = React.useState(0)

  const article = articles[i]

  React.useEffect(() => {
    const timer = setInterval(() => {
      setI((i + articles.length + 1) % articles.length)
    }, 5000)
    return () => {
      clearInterval(timer)
    }
  })

  return (
    <Wrapper style={{ backgroundImage: `url(${article.imageUrl})` }}>
      <ButtonWrapper>
        <ArrowRight
          fontSize="large"
          onClick={() => setI((i + articles.length - 1) % articles.length)}
          style={{ color: "#4ced84" }}
        />
        <ArrowRight
          fontSize="large"
          onClick={() => setI((i + articles.length + 1) % articles.length)}
          style={{ color: "#4ced84" }}
        />
      </ButtonWrapper>
      <Descriptor>
        <ArticleTitle>{article.title}</ArticleTitle>
        <p>{article.description}</p>
        <ReadMoreBtn onClick={() => navigate(article.url)}>Lire plus</ReadMoreBtn>
      </Descriptor>
    </Wrapper>
  )
}
