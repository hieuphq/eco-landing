/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql, withPrefix } from 'gatsby'

interface Props {
  description?: string
  lang?: string
  meta?: []
  keywords?: string[]
  title: string
}

const detailsQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const SEO = ({ description, lang, meta, keywords, title }: Props) => {
  const { site } = useStaticQuery(detailsQuery)
  let kws = keywords || []
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          kws.length > 0
            ? {
                name: `keywords`,
                content: kws.join(`, `),
              }
            : []
        )
        .concat(meta || [])}
    />
  )
}

export default SEO
