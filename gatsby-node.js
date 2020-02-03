const cats = {
  0: "economie",
  1: "social",
  2: "politique",
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark" && node.frontmatter.slug) {
    createNodeField({
      name: "slug",
      node,
      value: `/${cats[node.frontmatter.categorie]}/${node.frontmatter.slug}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(/* GraphQL */ `
    query {
      allMarkdownRemark {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMarkdownRemark.nodes

  posts.forEach((node) => {
    if (node.fields && node.fields.slug) {
      createPage({
        path: node.fields.slug,
        component: `${__dirname}/src/components/Article.tsx`,
        context: { id: node.id },
      })
    }
  })
}
