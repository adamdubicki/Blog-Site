module.exports = {
  siteMetadata: {
    title: `Adam Dubicki`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    "gatsby-plugin-sass"
  ]
}