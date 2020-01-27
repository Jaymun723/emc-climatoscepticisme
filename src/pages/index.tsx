import * as React from "react"
import { navigate } from "gatsby"
import { Carrousel } from "../components/Carrousel"
import Helmet from "react-helmet"
import { Introduction } from "../components/Introduction"
import { Page, Wrapper, Title, NavBar, NavLink } from "../components/PageBase"
import { Layout } from "../components/Layout"

export default () => {
  const articles = [
    {
      imageUrl: require("../media/test.jpg"),
      description:
        "Id irure excepteur ad do in tempor aliqua eiusmod. Ex do culpa culpa ut. Reprehenderit nulla aute dolore esse aliqua commodo. Proident aliqua excepteur ad quis elit. Ipsum enim anim ut non laboris consectetur duis cillum. Mollit nulla mollit minim culpa. Ipsum est tempor aute cupidatat minim sint exercitation eu.",
      title: "L'entrée en politique de l'écologie",
    },
    {
      imageUrl: require("../media/japon.jpg"),
      description:
        "Laborum consequat fugiat incididunt aliqua magna adipisicing tempor fugiat do veniam. Id tempor est voluptate deserunt amet cupidatat veniam ipsum excepteur quis minim sint eiusmod aliqua. Proident nisi laboris dolore excepteur cillum adipisicing non fugiat id. Dolore quis eiusmod ullamco fugiat sit ex dolor deserunt quis duis dolor sint duis. Laborum anim ut id dolor do reprehenderit eiusmod.",
      title: "Manuel est allé au Japon",
    },
  ]

  const intro = {
    title: "Introduction",
    content:
      "Nulla qui labore et ex commodo laborum veniam. Est ullamco do ea eiusmod qui. Quis laboris ut consequatcommodo velit nulla. Aliquip magna irure magna proident veniam exercitation officia non dolore amet exaliquip. Minim amet aliquip laborum labore dolor cupidatat ex. Reprehenderit nisi voluptate ad minim esseipsum sit ea deserunt minim. Magna eu velit ullamco sunt et mollit aliqua ut est magna pariatur esse quisnulla. Aliquip do elit elit ullamco enim ad et dolor Lorem. Esse excepteur cillum eiusmod cillum. Commodo nonminim dolor deserunt. Exercitation enim quis officia esse velit eiusmod reprehenderit eu. Deserunt deseruntipsum cillum magna. Aute excepteur pariatur nisi est anim aliqua dolore officia mollit aliqua commodo sit.",
  }

  return (
    <Layout title={"Les conséquences du climatoscepticisme"}>
      <Introduction {...intro} />
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
