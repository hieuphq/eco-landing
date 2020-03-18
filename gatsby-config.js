/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Ecopark Grand | The Island – Biệt thự đảo của Ecopark`,
    description: `Ecopark Grand Infomation Page`,
    author: `Hieu Phan`,
    siteUrl: `https://ecopark.netlify.com/`,
    hotline: '+84 918802484',
    office: {
      address: {
        line1: '1/123 Hoàng Quốc Việt, Nghĩa Đô, Cầu Giấy',
        city: 'Hà Nội',
        country: 'Việt Nam',
      },
      phone: '+84 918802484',
    },
    social: {
      facebook: `ecoparkgrandtheisland.official`,
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/images/`,
      },
    },
  ],
}
