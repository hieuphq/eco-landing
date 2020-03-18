#### Install packages

```bash
yarn add gatsby-image gatsby-transformer-sharp gatsby-plugin-sharp gatsby-source-filesystem
```

#### Configuration

gatsby-config.js

```js
module.exports = {
  plugins: [
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
```

#### Add some images into ./src/images

```tsx
import React from 'react'
import './style.css'
import { useStaticQuery, graphql } from 'gatsby'
import Carousel from 'nuka-carousel'

const HomeSlider = () => {
  const { webBanner, mobileBanner } = useStaticQuery(graphql`
    query {
      webBanner: file(relativePath: { eq: "ecopark-1-web.png" }) {
        childImageSharp {
          fluid(maxWidth: 2500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileBanner: file(relativePath: { eq: "ecopark-1-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 376) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const banner1 = [
    mobileBanner.childImageSharp.fluid,
    {
      ...webBanner.childImageSharp.fluid,
      media: `(min-width: 767px)`,
    },
  ]

  return (
    <div className="home-slider">
      <Carousel className="home-slide" autoplay withoutControls wrapAround>
        <Image fluid={banner1} />
      </Carousel>
    </div>
  )
}
```
