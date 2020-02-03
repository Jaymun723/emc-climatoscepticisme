module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["playfair display"],
        display: "swap",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    "gatsby-plugin-linaria",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "articles",
        path: `${__dirname}/src/articles/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "media",
        path: `${__dirname}/src/media/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1024,
              linkImagesToOriginal: true,
            },
          },
          "gatsby-remark-embedder",
        ],
      },
    },
    "gatsby-plugin-twitter",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
}
