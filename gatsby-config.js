module.exports = {
  siteMetadata: {
    title: "Safe Ecomobilité",
    author: "Robin Allory",
    description: "SAFE déploie de solutions de tourisme éco-responsable pour partir l’esprit tranquille en groupe ou en famille tout en réduisant notre impact sur l’environnement."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Safe Ecomobilité',
        short_name: 'Safe',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
