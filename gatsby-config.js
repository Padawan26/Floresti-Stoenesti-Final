module.exports = {
  siteMetadata: {
    title: `Primăria Florești-Stoenești`,
    author: `KubeWorks`,
    description: `Site-ul oficial al primăriei comunei Florești-Stoenești`,
    keywords: `primarie, giurgiu`,
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://staging.floresti-stoenesti.ro/graphql`,
      },
    },
  ],
}
