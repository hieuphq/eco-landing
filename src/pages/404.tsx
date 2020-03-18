import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {
  data: {
    site: {
      siteMetadata: {
        shortTitle: string
      }
    }
  }
}

const NotFoundPage = ({ data }: Props) => {
  const siteTitle = data.site.siteMetadata.shortTitle

  return (
    <Layout location={window.location} title={siteTitle}>
      <SEO title="Không tìm thấy trang phù hợp" />
      <h1>Không tìm thấy trang phù hợp</h1>
      <p>Liên kết trang không tồn tại</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        shortTitle
      }
    }
  }
`
