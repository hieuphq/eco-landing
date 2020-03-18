import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import "bootstrap/dist/css/bootstrap.min.css"
import "jquery/dist/jquery.min.js"
import "popper.js/dist/popper.min"
import "bootstrap/dist/js/bootstrap.min.js"
import "../styles/main.css"
import VerticalBar from "../components/VerticalBar"
import HomeSlider from "../components/HomeSlider"
import Island from "../components/Island"
import UniquePosition from "../components/UniquePosition"

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
        hotline: string
        social: {
          facebook: string
        }
      }
    }
  }
}

const Index = ({ data }: Props) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={window.location} title={siteTitle}>
      <SEO title="Trang chủ" />
      <VerticalBar
        hotline={data.site.siteMetadata.hotline}
        fb={data.site.siteMetadata.social.facebook}
      />
      <HomeSlider />
      <Island />
      <UniquePosition />
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        hotline
        social {
          facebook
        }
      }
    }
  }
`
// allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//   edges {
//     node {
//       excerpt
//       fields {
//         slug
//       }
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         title
//         description
//       }
//     }
//   }
// }
