import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Learnercys`,
    author: 'Carlos Hernandez <learnercys@gmail.com>',
    siteUrl: 'https://learnercys.github.io/',
  },
  plugins: [
    `gatsby-plugin-sass`,
    'gatsby-plugin-postcss',
    /*`gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.ts`,
      },
    },*/
    ],
}

export default config;
