import * as React from "react"
import { Layout } from "../components/Layout"
import { Categories } from "../components/PageBase"
import { navigate } from "gatsby"

export default () => (
  <Layout title={"Politique"} categorie={Categories.Politique}>
    <p>Temporaire -> une liste des articles</p>
    <ul>
      <li>
        <button onClick={() => navigate("/politique/entree-politique-ecologie")}>
          L'entrée en politique de l'écologie
        </button>
      </li>
    </ul>
  </Layout>
)
