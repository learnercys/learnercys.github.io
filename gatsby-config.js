module.exports = {
  siteMetadata: {
    title: `Learnercys`,
    author: 'Carlos Hernandez <learnercys@gmail.com>',
    siteUrl: 'https://learnercys.github.io/',
  },
  plugins: [
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography.js`,
        },
      },
    ],
}
