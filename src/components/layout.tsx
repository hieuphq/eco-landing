import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Footer from './footer'

interface Props {
  location?: Location
  children?: any
}

const detailsQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        office {
          address {
            line1
            city
            country
          }
          phone
        }
      }
    }
  }
`

const Layout = ({ location, children }: Props) => {
  const { site } = useStaticQuery(detailsQuery)
  const title = `${site.siteMetadata.title} © ${new Date().getFullYear()}`
  return (
    <div className="wrap-main">
      <header />
      <main>{children}</main>
      <Footer
        hotline={site.siteMetadata.office.phone}
        title={title}
        address={{ ...site.siteMetadata.office.address }}
      />
    </div>
  )
}

export default Layout
