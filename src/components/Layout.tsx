import * as React from "react"
import { Page, Wrapper, Title, NavBar, Categories, NavLink } from "./PageBase"
import Helmet from "react-helmet"
import { navigate } from "gatsby"

interface LayoutProps {
  title: string
  categorie?: Categories
}
export const Layout: React.SFC<LayoutProps> = ({ categorie, title, children }) => {
  const nav = (dir: string) => () => navigate(dir)

  return (
    <Page>
      <Helmet>
        <style>{`
        * {
          margin: 0;
          padding: 0;
        }
        html {
          overflow-y: scroll;
        }
        `}</style>
        <title>{title}</title>
      </Helmet>
      <Wrapper>
        <Title onClick={nav("/")}>Les conséquences du climatoscepticisme</Title>
        <NavBar>
          <NavLink active={categorie === Categories.Economie} onClick={nav("economie")}>
            Économie
          </NavLink>
          <NavLink active={categorie === Categories.Social} onClick={nav("social")}>
            Social
          </NavLink>
          <NavLink active={categorie === Categories.Politique} onClick={nav("politique")}>
            Politique
          </NavLink>
        </NavBar>
        {children}
      </Wrapper>
    </Page>
  )
}
