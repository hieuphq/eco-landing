#### Install packages

```bash
yarn add react-helmet gatsby-plugin-react-helmet
yarn add @types/react-helmet -D
```

#### Configuration

gatsby-config.js

```js
module.exports = {
  siteMetadata: {
    title: `Title Page`,
    description: `Title Description`,
    author: `Hieu Phan`,
    siteUrl: `https://page.netlify.com/`,
    hotline: 'hotline',
    office: {
      address: 'address',
      phone: 'phone number',
    },
    social: {
      facebook: `fb-id`,
    },
  },
  plugins: ['gatsby-plugin-react-helmet'],
}
```

#### Make SEO.tsx for reuse

```tsx
import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql, withPrefix } from 'gatsby'

interface Props {
  description?: string
  lang?: string
  meta?: []
  keywords: string[]
  title: string
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
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
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta || [])}
    />
  )
}

export default SEO
```
