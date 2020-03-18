/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Ecopark Grand | The Island – Biệt thự đảo của Ecopark`,
    shortTitle: `Ecopark Grand`,
    author: {
      name: `Hieu Phan`,
      summary: `from DF foundation`,
    },
    description: `Ecopark Grand Infomation Page`,
    siteUrl: `https://ecopark.netlify.com/`,
    hotline: "+84 918802484",
    office: {
      address: "1/123 Hoàng Quốc Việt, Nghĩa Đô, Cầu Giấy, Hà Nội.",
      phone: "+84 918802484",
    },
    social: {
      facebook: `ecoparkgrandtheisland.official`,
    },
  },

  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: "./src/assets",
      },
    },
    "gatsby-plugin-typescript",
  ],
}
