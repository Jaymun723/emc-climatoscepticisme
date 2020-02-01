import * as React from "react"
import { styled } from "linaria/react"
import ArrowDown from "@material-ui/icons/ArrowDropDown"
import ArrowUp from "@material-ui/icons/ArrowDropUp"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
`

const MainPart = styled.div`
  max-height: 0;
  &.active {
    max-height: 100vh;
  }

  overflow: hidden;
  transition: max-height 0.5s;
  background-color: rgba(0, 0, 0, 0.1);

  p {
    margin: 5px;
  }
`

const IntroTitle = styled.div`
  padding: 10px;
  border-radius: 2px;
  background-color: #4ced84;
  color: white;
  display: flex;
  cursor: pointer;
`

const IconHolder = styled.span`
  margin-left: auto;
`

interface IntroductionProps {
  title: string
  content: string
}
export const Introduction = ({ content, title }: IntroductionProps) => {
  const [show, setShow] = React.useState(false)

  return (
    <Wrapper>
      <IntroTitle onClick={() => setShow(!show)}>
        <h2>{title}</h2>
        <IconHolder>{show ? <ArrowUp /> : <ArrowDown />}</IconHolder>
      </IntroTitle>
      <MainPart className={show ? "active" : undefined}>
        <p>{content}</p>
      </MainPart>
    </Wrapper>
  )
}
